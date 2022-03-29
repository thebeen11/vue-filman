import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./filter"

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import GlobalComponents from "./components/index"


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(GlobalComponents)
Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
