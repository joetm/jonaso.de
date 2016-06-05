<template>
  <div id="skills"></div>
  <section id="services-section">
	  <div class="container">
		<div class="row">
			<div class="col-lg-12 text-center">
				<h2 class="wow pulse">Knowledge</h2>
				<h3>Always duly diligent.</h3>
			</div>
		</div>
		<div class="row text-center">
			<div v-for="skill in skills" class="col-md-4">
				<span class="fa-stack fa-4x wow zoomIn">
					<i class="fa fa-circle fa-stack-2x text-primary"></i>
					<i class="fa fa-thumbs-o-up fa-stack-1x fa-inverse"></i>
				</span>
				<h4 class="service-heading">{{ skill.title }}</h4>
				<p class="text-muted k_descr">
					{{{ skill.description }}}
				</p>
			</div>
		</div>
	  </div>
  </section>
</template>

<script>

var skills = require("../data/knowledge.json");

// equal height for the descriptions
$(function () {

	// find max height
	var $descrs = $('#services-section .k_descr'),
		max_height = Math.max.apply(null, $descrs.map(function () {
                return $(this).height();
		}).get());
	// set equal height
	$descrs.height(max_height);

});

export default {
  data () {
    return {
      skills: skills
    }
  }
}
</script>

<style>
.fa-stack .fa-laptop:hover:before{
  content: "\f10b";
}
</style>

