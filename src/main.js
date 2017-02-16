import 'assets/css/reset.css'

import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App'

// ElementUI Components
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

console.log(store)

/* eslint-disable no-new */
window.app = new Vue({
  el: '#root',
  template: '<App/>',
  store,
  router,
  components: { App }
})
