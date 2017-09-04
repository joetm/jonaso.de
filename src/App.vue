<template>
  <div id="app">
	<app-nav></app-nav>
	<app-intro></app-intro>
	<app-skills></app-skills>
	<app-tagcloud></app-tagcloud>
	<app-portfolio></app-portfolio>
	<app-minicv></app-minicv>
	<app-map></app-map>
	<app-causes></app-causes>
	<app-badges></app-badges>
	<app-disclaimer></app-disclaimer>
	<app-footer></app-footer>
  </div>
</template>

<script>
/*
    <app-contact></app-contact>
*/

require('imports?$=jquery!./js/vendor/agency.js');
require('imports?$=jquery!./js/vendor/jquery.easing.min.js');
require('imports?$=jquery!./js/vendor/jquery.lazyload.min.js');
require('imports?$=jquery!./js/vendor/wow.min.js');

// Vue components
import Nav from './components/Nav.vue';
import Intro from './components/Intro.vue';
import Skills from './components/Skills.vue';
import TagCloud from './components/TagCloud.vue';
import Portfolio from './components/Portfolio.vue';
import MiniCV from './components/MiniCV.vue';
import Map from './components/Map.vue';
import Causes from './components/Causes.vue';
import Badges from './components/Badges.vue';
// import ContactForm from './components/ContactForm.vue';
import Disclaimer from './components/Disclaimer.vue';
import Footer from './components/Footer.vue';


$(function () {

	$('#komasurfer-link').attr('href', 'http://koma' + 'surfer.' + 'com/' + 'portfolio/');

    //lazyload
    $("img.lazy").lazyload({
        threshold : 200
    });

    //set up the animations
    new WOW().init();

	/*
    // console flair
    console.log("\
         ________________________________\
        |                                |\
________|                                |_______\
\\       |           jonaso.de            |      /\
 \\      |                                |     /\
 /      |________________________________|     \\\
/__________)                          (_________\\\
");
	*/

});


export default {
  components: {
    'app-nav': Nav,
    'app-intro': Intro,
    'app-skills': Skills,
    'app-tagcloud': TagCloud,
    'app-portfolio': Portfolio,
    'app-minicv': MiniCV,
    'app-map': Map,
    'app-causes': Causes,
    'app-badges': Badges,
//    'app-contact': ContactForm,
    'app-disclaimer': Disclaimer,
    'app-footer': Footer
  }
}
</script>

<style>

@import './css/grav.css';
@import './css/font-awesome.min.css';
@import './css/animate.css';

body{overflow-x: hidden;}

.blk{color: #000000;}
.normtext{color: #777;}

</style>
