import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'red',
  accent: 'amber',
  warn: 'black',
  background: 'white'
})

new Vue({
  el: 'app',
  components: { App }
})
