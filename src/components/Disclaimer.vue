<template>
<aside id="disclaimer">
	<div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 text-center">
                <p class="large text-muted">Picture credits</p>
				<p class="text-muted" v-for="d in disclaimers">
					<a v-bind:href="d.url" target="blank" class="normtext">{{d.txt}}</a>. {{d.license}}.</p>
				</p>
                <p class="text-muted">All others - &copy; jonaso.de</p>
            </div>
        </div>
  </div>
</aside>
</template>

<script>
var disclaimers = [
	{url: 'https://www.flickr.com/photos/maholyoak/5902646054', txt: 'Linkoping, Sweden, 2009_12-40.jpg', license: 'CC BY-NC. Marcel Holyoak on Flickr.'},
	{url: 'https://www.flickr.com/photos/aigle_dore/5825408292/', txt: 'Travel', license: 'CC-BY. Moyan Brenn on Flickr.'},
	{url: 'http://commons.wikimedia.org/wiki/File:GMAW.welding.af.ncs.jpg#/media/File:GMAW.welding.af.ncs.jpg', txt: 'GMAW.welding.af.ncs', license: 'Public Domain. William M. Plate Jr. on Wikipedia.'},
	{url: 'http://commons.wikimedia.org/wiki/File:Matterhorn_august_2009.JPG#/media/File:Matterhorn_august_2009.JPG', txt: 'Matterhorn august 2009', license: 'Public Domain. Simplon2010 on Wikipedia.'},
  {url: 'http://commons.wikimedia.org/wiki/File:Toronto_-_ON_-_Skyline_bei_Nacht.jpg#/media/File:Toronto_-_ON_-_Skyline_bei_Nacht.jpg', txt: 'Toronto - ON - Skyline bei Nacht', license: 'CC BY-SA 3.0. Wladyslaw on Wikimedia Commons.'},
  {url: 'https://www.flickr.com/photos/mbiddulph/4133021867/', txt: "That's no moon...", license: 'CC BY-SA 2.0. Matt Biddulph on Flickr.'}
];

export default {
  data () {
    return {
      disclaimers: disclaimers
    }
  }
}
</script>

<style>
aside#disclaimer{
	padding:2em 0 0 0;
}
</style>

