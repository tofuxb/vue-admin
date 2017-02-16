import 'assets/css/reset.css'

import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App'

// ElementUI Components
import ElementUI from 'components/ElementUI'
ElementUI.install(Vue)

/* eslint-disable no-new */
window.app = new Vue({
  el: '#root',
  template: '<App/>',
  store,
  router,
  components: { App }
})
