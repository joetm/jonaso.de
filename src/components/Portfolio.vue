<template>
  <section id="portfolio" class="bg-light-gray">
  <div class="container">
    <div class="row">
        <div class="col-lg-12 text-center">
            <h2 class="wow flipInX">Web Development Portfolio</h2>
			<h3>Coma-surf to my portfolio.</h3>
        </div>
    </div>
    <div class="row">

		<div v-for="item in portfolioItems" class="col-md-4 col-sm-6 portfolio-item wow flipInY">
			<a v-if="item.id" v-bind:href="'#'+item.id" class="portfolio-link" data-toggle="modal" style="background-color:#E0E0E0">
				<div class="portfolio-hover">
					<div class="portfolio-hover-content">
						<i class="fa fa-plus fa-3x"></i>
					</div>
				</div>
				<img v-bind:data-original="item.img" src="http://www.jonaso.de/portfolio/static/img/clear.gif" class="lazy img-responsive" alt="">
			</a>
			<div v-else class="portfolio-link" style="background-color:#E0E0E0">
				<img v-bind:data-original="item.img" src="http://www.jonaso.de/portfolio/static/img/clear.gif" class="lazy img-responsive" alt="">
			</div>
			<div class="portfolio-caption">
				<h4>{{ item.title }}</h4>
				<p class="text-muted" v-html="item.subtitle"></p>
			</div>
		</div>

	</div><!--row-->

    <div class="row text-center">
		<a class="btn btn-xl" id="komasurfer-link" style="color: #606060;" href="#">Full Portfolio</a>
	</div>

  </div><!--container-->


    <!-- MODALS -->
     <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Skills Planner</h2>
                            <hr class="star-primary">
                            <img data-original="./static/img/projects/skillsplanner_full.png" src="http://www.jonaso.de/portfolio/static/img/clear.gif" class="lazy img-responsive img-centered" alt="" style="background-image:url(http://www.jonaso.de/portfolio/static/img/projects/thumbnail-bg-100.jpg);background-repeat:no-repeat;background-size:cover">
                            <p>
                                Linked Data Platform with aim of alleviating the skills shortage in the UK's construction industry.
                                The &#163;1.3 million project is partly funded by Innovate UK.
                                I am responsible for the development and implementation of the backend infrastructure.
                                The platform consists of a number of tools, written in Python, that interface with the CKAN Open Data store.
                            </p>
                            <ul class="list-inline item-details">
                                <li>
                                    Link:
                                    <a href="http://www.skillsplanner.net/">
                                        <strong>
                                            skillsplanner.net
                                        </strong>
                                    </a>
                                </li>
                                <li>
                                    Date:
                                    <strong>
                                        Oct. 2015 - April 2016
                                    </strong>
                                </li>
                                <!--
                                <li>
                                    Role:
                                    <strong>
                                        Developer / Data Scientist
                                    </strong>
                                </li>
                                -->
                            </ul>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--
     <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Minimalism Social Network v1</h2>
                            <hr class="star-primary">
                            <img data-original="./static/img/projects/minimalism-v1-full.jpg" src="http://www.jonaso.de/portfolio/static/img/clear.gif" class="lazy img-responsive img-centered" alt="">
                            <p>
                                First prototype of the Minimalist Social Network implemented with PHP and jQuery.
                            </p>
                            <ul class="list-inline item-details">
                                <li>
                                    Link:
                                    <a href="http://komasurfer.com/portfolio/projects/minimalism/prototype-v1/things">
                                        <strong>
                                            Web Demonstration
                                        </strong>
                                    </a>
                                </li>
                                <li>
                                    Date:
                                    <strong>
                                        Apr. - May 2013
                                    </strong>
                                </li>
                            </ul>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    -->

    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Minimalist Social Network v2</h2>
                            <hr class="star-primary">
                            <img data-original="./static/img/projects/minimalism-v2.jpg" src="http://www.jonaso.de/portfolio/static/img/clear.gif" class="lazy img-responsive img-centered" alt="">
                            <p>
                                A second prototype of the social network for minimalists, implemented as a single page javascript application with AngularJS.
                            </p>
                            <ul class="list-inline item-details">
                                <li>Link:
                                    <a href="http://komasurfer.com/portfolio/projects/minimalism/prototype-v2/">
                                        <strong>
                                            Web Demonstration
                                        </strong>
                                    </a>
                                </li>
                                <li>
                                    Date:
                                    <strong>
                                        Oct. - Dec. 2014
                                    </strong>
                                </li>
                                <!--
                                <li>
                                    <strong>
                                        MSc Computer Science student
                                    </strong>
                                </li>
                                -->
                            </ul>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Drive Now Visualization</h2>
                            <hr class="star-primary">
                            <img data-original="./static/img/projects/drivenow.jpg" src="http://www.jonaso.de/portfolio/static/img/clear.gif" class="lazy img-responsive img-centered" alt="">
                            <p>Under the working title "Who called the clean-up crew", I created a visualisation of DriveNow cars in Berlin. The data was scraped from DriveNow. The visualisation shows 1) the location of the cars at a certain time, 2) the car cleanliness states, 3) the movements of single cars during the recorded timeframe, and 4) the movements of cars during which a clean-up event occurred.</p>
                            <ul class="list-inline item-details">
                                <li>Date:
                                    <strong>November - December 2016</strong>
                                </li>
                                <li>Technologies:
                                    <strong>
                                    D3, Crossfilter, React, Leaflet, Material UI
                                    </strong>
                                </li>
                            </ul>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Alstom IT Service Catalogue</h2>
                            <hr class="star-primary">
                            <img data-original="./static/img/projects/sc.jpg" src="http://www.jonaso.de/portfolio/static/img/clear.gif" class="lazy img-responsive img-centered" alt="">
                            <p>
                                I was responsible for implementing the IT service catalogue in Excel.
                                I maintained and updated the service catalogue through four releases.
                                The service catalogue was used as input for the IT end-user portal. I was a beta tester for this portal.
                                My responsibilities also included drafting communications to the 90,000 employees and translating all IT service-related communications into German.
                            </p>
                            <ul class="list-inline item-details">
                                <li>Position:
                                    <strong>
                                        IT Business Analyst
                                    </strong>
                                </li>
                                <li>
                                    Company:
                                    <a href="http://www.alstom.com/" target="_blank">
                                        <strong>
                                            Alstom IS&amp;T
                                        </strong>
                                    </a>
                                </li>
                                <!--
                                <li>Role:
                                    <strong>
                                        Assistant to the Service Catalogue Manager
                                    </strong>
                                </li>
                                -->
                            </ul>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Service Request Design</h2>
                            <hr class="star-primary">
                            <img data-original="./static/img/projects/srd.jpg" src="http://www.jonaso.de/portfolio/static/img/clear.gif" class="lazy img-responsive img-centered" alt="">
                            <p>
                                I interviewed the service owners, elicitating their requirements for new services, and transformed these requirements into a service definition and a service request definition.
                            </p>
                            <ul class="list-inline item-details">
                                <li>Company:
                                    <a href="http://www.alstom.com/" target="_blank">
                                        <strong>
                                            Alstom IS&amp;T
                                        </strong>
                                    </a>
                                </li>
                                <li>Date:
                                    <strong>
                                        Aug 2013 - July 2014
                                    </strong>
                                </li>
                                <li>Role:
                                    <strong>
                                        Service Designer
                                    </strong>
                                </li>
                            </ul>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Ontology</h2>
                            <hr class="star-primary">
                            <img data-original="./static/res/dreams.png" src="http://www.jonaso.de/portfolio/static/img/clear.gif" class="lazy img-responsive img-centered" alt="">
                            <p>Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in v. Cu eum dicam feugiat noluisse.</p>
                            <ul class="list-inline item-details">
                                <li>Client:
                                    <strong><a href="http://startbootstrap.com/">Start Bootstrap</a>
                                    </strong>
                                </li>
                                <li>Date:
                                    <strong><a href="http://startbootstrap.com/">April 2014</a>
                                    </strong>
                                </li>
                                <li>Service:
                                    <strong><a href="http://startbootstrap.com/">Web Development</a>
                                    </strong>
                                </li>
                            </ul>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


  </section>
</template>

<script>

var portfolioItems = [
	{
		id: 'portfolioModal1',
		title: 'Skills Planner',
		subtitle: 'Linked Data Platform',
		img: './static/img/projects/skillsplanner.png'
	},
	{
		id: 'portfolioModal3',
		title: 'Drive Now Cars',
		subtitle: 'Visualization',
		img: './static/img/projects/drivenow-thumbnail.jpg'
	},
	{
		id: false,
		title: 'GFBio TerminologyService',
		subtitle: 'Website Redesign',
		img: './static/img/projects/gfbio-ts-thumbnail.jpg'
	},

	//{
	//	id: false,
	//	title: 'Minimalist SNS',
	//	subtitle: 'Prototype v1',
	//	img: './static/img/projects/minimalism-v1.jpg'
	//},
	{
		id: false,
		title: 'CKAN extensions',
		subtitle: 'Open Data',
		img: './static/img/projects/ckan-extensions-thumbnail.jpg'
	},
	{
		id: 'portfolioModal2',
		title: 'Minimalist SNS',
		subtitle: 'Prototype v2',
		img: './static/img/projects/minimalism-v2-thumbnail.jpg'
	},
	{
		id: false,
		title: 'BuxomCMS',
		subtitle: 'Content Management System',
		img: './static/img/projects/buxomcms-thumbnail.jpg'
	},

	{
		id: 'portfolioModal4',
		title: 'IT Service Catalogue',
		subtitle: 'Advanced Excel',
		img: './static/img/projects/sc-thumbnail.jpg'
	},
	{
		id: 'portfolioModal5',
		title: 'Service Request Design',
		subtitle: 'BMC Remedy ITSM',
		img: './static/img/projects/srd-thumbnail.jpg'
	},
	{
		id: false,
		title: 'Ontology Design',
		subtitle: 'OWL and Prot&eacute;g&eacute;',
		img: './static/img/projects/ontology-thumbnail.jpg'
	}
];

export default {
  data () {
    return {
      portfolioItems: portfolioItems
    }
  }
}
</script>

<style>
</style>

