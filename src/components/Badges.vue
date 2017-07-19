<template>
  <aside class="badges">
    <div class="container">
        <div class="row">
			<div v-for="badge in badges" class="col-xs-12 col-sm-4 col-md-offset-1 col-md-2">
				<img v-bind:data-original="badge.img" v-bind:title="badge.title" :src="'/static/img/clear.gif'" class="lazy img-responsive img-centered" alt="">
			</div>
        </div>
    </div>
  </aside>
</template>

<script>
var badges = [
	{
		title: 'SAP-certified Associate in Project Management',
		img: '/static/img/badges/sap-capm.jpg'
	},
	{
		title: 'DAkkS-certified Quality Management Representative',
		img: '/static/img/badges/dakks.jpg'
	},
	{
		title: 'Certified ScrumMaster',
		img: '/static/img/badges/scrum.jpg'
	},
	{
		title: 'ITIL V3 Foundation',
		img: '/static/img/badges/itil-v3-foundation.gif'
	},
	{
		title: 'Zend-certified Engineer',
		img: '/static/img/badges/zend.jpg'
	}
];

export default {
  data () {
    return {
      badges: badges
    }
  }
}
</script>

<style>
aside.badges{
	padding:4em 0;
}
aside.badges img{
	opacity:0.4;
}
aside.badges img:hover{
	opacity:1;
}
</style>

