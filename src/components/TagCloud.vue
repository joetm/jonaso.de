<template>
  <section id="skills-section" style="margin-top:0;padding-top:0;">
  <div class="container">
	<div class="row">
		<div class="col-lg-12 text-center">
			<h2 class="wow bounceIn">Skills</h2>
		</div>
	</div>
    <div class="row text-center">
        <div class="col-lg-12">
			<div id="tagcloud"></div>
		</div>
	</div>
  </div>
  </section>
</template>

<script>

var jQCloud = require("imports?$=jquery!../js/vendor/jqcloud.min.js");

var words = require("../data/tagcloud.json");

$(function () {

	$('#tagcloud').jQCloud(words, {
		removeOverflowing: false,
		autoResize: true
	});

});

export default {
}
</script>

<style>
@import "../css/jqcloud.min.css";

#tagcloud{
	margin:auto;
	text-align:center;
	width:85%;
	height:550px;
}
#tagcloud .w1 {color:#AAAAAA;}
#tagcloud .w2 {color:#666666;}
#tagcloud .w3 {color:#999999;}
#tagcloud .w4 {color:#666670;}
#tagcloud .w5 {color:#777770;}
#tagcloud .w6 {color:#888890;}
#tagcloud .w7 {color:#999990;}
#tagcloud .w8 {color:#AAAA90;}
#tagcloud .w9 {color:#BBBBA0;}
#tagcloud .w10{color:#DDDD00;}
</style>

