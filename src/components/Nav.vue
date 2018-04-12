<template>
<!-- Navigation -->
<div id="nav">

    <md-toolbar class="md-warn">
        <div>
            <img class="avatar" src="http://www.jonaso.de/portfolio/static/img/avatar.jpg" alt="" />
        </div>
      <!--
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      -->
      <h2 class="md-title" style="flex: 1">jonaso</h2>
      <md-button href="#skills">Skills</md-button>
      <md-button href="#cv">Mini-CV</md-button>
      <md-button href="#academic">Academic CV</md-button>
      <md-button href="#portfolio">WebDev</md-button>
    </md-toolbar>

    <!--
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">jonaso</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden active">
                        <a href="#page-top"></a>
                    </li>
    				<li><a class="page-scroll" href="#skills">Skills</a></li>
    				<li><a class="page-scroll" href="#portfolio">Portfolio</a></li>
    				<li><a class="page-scroll" href="#cv">Mini-CV</a></li>
    			</ul>
    		</div>
    	</div>
    </nav>
    -->
</div>
</template>

<script>
const animateHeader = require('imports?$=jquery!../js/vendor/cbpAnimatedHeader.js');

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
.md-title{
    padding-left: 85px;
}
#nav img.avatar{
    width: 50px;
    height: 50px;
    border: 2px solid #666666;
    border-radius: 25px;
    margin:0 15px 0 10px;
    position: absolute;
    top: 5px;
    left: 15px;
}
/*
#nav img.avatar:hover{
    width: 100px;
    height: 100px;
    border: 2px solid #666666;
    border-radius: 50px;
    margin:0 15px 0 10px;
}
*/
</style>

