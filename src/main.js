import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import msToMm from './filters/ms-to-mm'

//test fontAwesome

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faUserSecret)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

// Definimos que la instancia de Vue, utiliza VueRouter
Vue.use(VueRouter)
Vue.use(msToMm)

// Definimos la instancia de VueRouter y le agregamos las rutas

const router = new VueRouter({ routes, mode: 'history' })

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
