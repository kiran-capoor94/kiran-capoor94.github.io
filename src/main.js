// Import main css
import Buefy from 'buefy'
import '~/assets/sass/index.scss'
import VueTypedJs from 'vue-typed-js'
import VueParticles from 'vue-particles'
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
  })
  Vue.use(VueTypedJs)
  Vue.use(VueParticles)
  Vue.use(Buefy, {
    defaultIconPack: ['fas', 'fab', 'fad'] // Font Awesome Solid
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
