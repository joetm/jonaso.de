<template>
  <section id="cv">
  <div class="container">
    <div class="row">
        <div class="col-lg-12 text-center">
            <h2 class="wow zoomIn">Mini-CV</h2>
			<h3>Shaping your informed decision.</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <ul class="timeline">
				<li v-for="item in items" v-bind:class="item.li_class">
					<div class="timeline-image">
						<!--v-bind:data-original="item.img" src="./static/img/clear.gif"-->
						<img v-bind:src="item.img" class="lazy img-circle img-responsive" alt="">
					</div>
					<div class="timeline-panel">
						<div class="timeline-heading">
							<h4>{{item.dates}}</h4>
							<h4 class="subheading">{{item.title}}</h4>
							<div class="organisation">
                                <a href="#" class="orglink" v-html="item.organisation"></a>
                            </div>
						</div>
						<div v-bind:class="'timeline-body wow ' + item.timeline_body_alternation">
							<p class="text-muted" v-html="item.description"></p>
						</div>
					</div>
				</li>
			</ul>
        </div>
    </div>
  </div>
  </section>
</template>

<script>

var minicvdata = require("../data/mini-cv.json");

// switch between left and right
for (let i = 0, s = minicvdata.length; i < s; i++) {
	if (i % 2 !== 0) {
		minicvdata[i].li_class = ' timeline-inverted';
		minicvdata[i].timeline_body_alternation = 'slideInRight';
	} else {
		minicvdata[i].li_class = '';
		minicvdata[i].timeline_body_alternation = 'slideInLeft';
	}
};

export default {
  data () {
    return {
      items: minicvdata
    }
  }
}
</script>

<style>
.timeline>li .timeline-image h4 {
	margin-top:6px;
}
.timeline .timeline-heading .subheading {
	margin-bottom:0;
}
.timeline .timeline-heading .organisation {
	margin-bottom: 10.5px;
}

@media (max-width: 768px) {
	.timeline>li .timeline-image h4 {
		margin-top:6px;
	}
}
@media (min-width: 768px) {
	.timeline>li .timeline-image h4 {
		margin-top:8px;
	}
}
@media (min-width: 992px) {
	.timeline>li .timeline-image h4 {
		margin-top:18px;
	}
}
@media (min-width: 1200px) {
	.timeline>li .timeline-image h4 {
		margin-top:28px;
	}
}
</style>

