<template>
  <section id="causes" class="bg-light-gray">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="wow fadeIn">Causes</h2>
                <h3>Things I care about.</h3>
            </div>
        </div>
        <div class="row">
            <div v-for="cause in causes" class="col-sm-4">
                <div class="team-member wow zoomIn">
                    <img v-bind:data-original="cause.img" src="http://www.jonaso.de/portfolio/static/img/clear.gif" class="lazy img-responsive img-circle custom-img" alt="">
                    <h4>{{ cause.title }}</h4>
                    <p class="text-muted">{{ cause.subtitle }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

var causes = [
    {
        title: 'Travel',
        subtitle: 'Discovering the world.',
        img: './static/img/flickr-aigle_dore-5825408292.jpg'
    },
    //{
    //  title: 'Minimalism',
    //  subtitle: 'An optimised life.',
    //  img: './static/img/x.jpg'
    //},
    {
        title: 'Poverty Alleviation',
        subtitle: 'Fair conditions.',
        img: './static/img/IMG_20140618_172940.jpg'
    },
    {
        title: 'Human Slavery',
        subtitle: 'It\'s prevalent.',
        img: './static/img/nfs-cc.jpg'
    }
];

export default {
  data () {
    return {
      causes: causes
    }
  }
}
</script>

<style>
#causes img.custom-img{
    max-width:200px;
    max-height:200px;
}
</style>

