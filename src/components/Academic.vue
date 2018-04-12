<template>
	<section id="academic">
  	  <div class="container">
		<div class="row">
			<div class="xcol-lg-12 text-center">
				<h2>Academic Adventures</h2>
			</div>
		</div>

        <div class="row text-center">

            <ul class="timeline">
                <li v-for="item in items">
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>{{item.dates}}</h4>
                            <h4 class="subheading">{{item.title}}</h4>
                            <div class="organisation" v-html="item.organisation"></div>
                        </div>
                        <div v-bind:class="'timeline-body wow ' + item.timeline_body_alternation">
                            <p class="text-muted" v-html="item.description"></p>
                        </div>
                    </div>
                </li>
            </ul>

        </div>

        <div class="row text-center">
            <a class="btn btn-xl" style="color: #606060;" id="academic-link" href="#">Academic CV</a>
        </div>

	  </div>
	</section>
</template>

<script>

let academicdata = [];

//get security token
/*
$.ajax({
    dataType: 'text',
    method: "GET",
    url: "http://www.jonaso.de/portfolio/data/academic.json"
}).done(function (data) {
    academicdata = data;
});
*/

export default {
  data () {
    return {
      items: academicdata
    }
  }
}

</script>

<style>
</style>

