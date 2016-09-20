<template>
<!-- Navigation -->
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand page-scroll" href="#page-top">jonaso</a>
        </div>
        <!-- nav links -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li class="hidden active">
                    <a href="#page-top"></a>
                </li>
				<li><a class="page-scroll" href="#skills">Skills</a></li>
				<li><a class="page-scroll" href="#portfolio">Portfolio</a></li>
				<li><a class="page-scroll" href="#cv">Mini-CV</a></li>
				<li><a class="page-scroll" href="#contact">Contact</a></li>
			</ul>
		</div>
	</div>
</nav>
</template>

<script>
var animateHeader = require('imports?$=jquery!../js/vendor/cbpAnimatedHeader.js');

$(function () {

	animateHeader();

});

export default {
}
</script>

<style>
.navbar{
	opacity:0.9;
}
</style>

