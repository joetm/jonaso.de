<template>
<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <span class="copyright">&copy; {{copyrightyear}} jonaso.de</span>
            </div>
            <div class="col-md-4">
                <ul class="list-inline social-buttons">
					<li><a title="LinkedIn" href="https://linkedin.com/in/jonasopp" target="_blank"><i class="fa fa-linkedin"></i></a></li>
					<li><a title="Twitter" href="https://twitter.com/Duesynapse" target="_blank"><i class="fa fa-twitter"></i></a></li>
					<li><a title="GitHub" href="https://github.com/joetm"><i class="fa fa-github"></i></a></li>
                </ul>
            </div>
            <div class="col-md-4">
					<img data-original="./static/img/no-facebook.gif" src="http://www.jonaso.de/portfolio/static/img/clear.gif" class="lazy img-responsive img-centered" alt="" style="max-height:40px;width:auto;">
            </div>
        </div>
    </div>
</footer>
</template>

<script>
export default {
  data () {
    return {
      copyrightyear: new Date().getFullYear()
    }
  }
}
</script>

<style>
</style>

