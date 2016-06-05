<template>
	<section id="map">
	  <div class="container">
		<div class="row">
			<div class="xcol-lg-12 text-center">
				<h2>O&ugrave; est Jonas?</h2>
				<h3><span id="years_abroad">{{ years_abroad }}</span> years of international experience</h3>
			</div>
		</div>
		<div id="location-map"></div>
	  </div>
	</section>
</template>

<script>
require('../js/vendor/leaflet/leaflet.js');

var init_map = function () {
    'use strict';
    //map
    L.Icon.Default.imagePath = '../js/vendor/leaflet/images';
    var grayIcon = L.icon({
        iconUrl: require("../js/vendor/leaflet/images/marker-icon-gray.png"),
        shadowUrl: require("../js/vendor/leaflet/images/marker-shadow.png"),
        iconSize:     [18, 30], // size of the icon
        shadowSize:   [30, 30], // size of the shadow
        iconAnchor:   [9, 30], // point of the icon which will correspond to marker's location
        shadowAnchor: [9, 30],  // the same for the shadow
        popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor
    }),
    	blueIcon = L.icon({
			iconUrl: require("../js/vendor/leaflet/images/marker-icon.png"),
			shadowUrl: require("../js/vendor/leaflet/images/marker-shadow.png"),
			iconSize:     [18, 30], // size of the icon
			shadowSize:   [30, 30], // size of the shadow
			iconAnchor:   [9, 30], // point of the icon which will correspond to marker's location
			shadowAnchor: [9, 30],  // the same for the shadow
			popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor
		}),
        tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
        latlng = L.latLng(51, 4),
        i = 0,
        first = true,
        map = L.map('location-map', {
            center: latlng,
            zoom: 4,
            layers: [tiles]
        }),
        popup,
        marker,
        markers = [];
    //add markers
    for (i = 0; i < num_places; i += 1) {
        // popup for marker
        var start = new Date(countries[i].start).getFullYear(),
            end = new Date(countries[i].end).getFullYear(),
            html = '<b>' + countries[i].city + '</b><br />' + countries[i].country;
        if (!isNaN(start)) {
            html += '<br />' + start;
            if (!isNaN(end) && end !== start) {
                html += '-' + end;
            }
        }
        popup = L.popup({
            closeButton: false,
            autoPan: true
        }).setContent(html);
        // markers
        if (first) {
            first = false;
            marker = L.marker([countries[i].lat, countries[i].lng], {
                    title: countries[i].city,
                    alt: countries[i].city,
                    icon: blueIcon,
                    riseOnHover: true,
                    riseOffset: 9999999,
                    clickable: true,
                    keyboard: false
                })
                .addTo(map)
                .bindPopup(popup)
                .openPopup();
        } else {
            marker = L.marker([countries[i].lat, countries[i].lng], {
                    title: countries[i].city,
                    alt: countries[i].city,
                    icon: grayIcon,
                    riseOnHover: true,
                    riseOffset: 9999999,
                    clickable: true,
                    keyboard: false
                })
                .addTo(map)
                .bindPopup(popup);
        }
        marker.on('mouseover', function () {
            this.openPopup();
        });
        marker.on('mouseout', function () {
            var self = this;
            window.setTimeout(
                function (o) {
                    return function () { o.closePopup(); };
                }(self), 1500);
        });
        markers.push(marker);
    }
    // map hover action: close all popups
    $(map).on('mouseover', function () {
        // close all popups
        $.each(markers, function (i, m) {
            m.closePopup();
        });
    });
};


var countries = require("../data/countries.json") || [];
var num_places = countries.length;
var years_abroad = 0;

var start, end, diff;
for (let i = 0; i < num_places; i++) {
	// calculate the time abroad (extra-Germany)
	if (countries[i].start && countries[i].end) {
		start = new Date(countries[i].start).getTime();
		if (countries[i].end !== 'today') {
			end = new Date(countries[i].end).getTime();
		} else {
			end = new Date().getTime();
		}
		diff = (end - start) / 1000;
		years_abroad += diff;
	}
}
// in years
years_abroad = +((years_abroad / 31536000).toFixed(2));

$(function () {
	init_map();
});


export default {
  data () {
    return {
      years_abroad: years_abroad,
      num_places: num_places
    }
  }
}
</script>

<style>
@import '../css/leaflet.css';

/*leaflet map*/
#map{
	padding-bottom:0;
	margin-bottom:0;
}
#map .container{
	width:100%;
	padding-bottom:0;
	margin-bottom:0;
}
#map .container #location-map{
	width:100%;
	height:450px;
	/* pointer-events:none; */
}
</style>

