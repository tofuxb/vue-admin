import Vue from 'vue'
import VueResource from 'vue-resource'
import config from '../config'
import { Message } from 'element-ui'

Vue.use(VueResource)

Vue.http.options.root = config.host

Vue.http.interceptors.push((request, next) => {
  next(response => {
    if (response.status !== 200) {
      Message({
        type: 'error',
        message: '服务器出错，请稍后再试'
      })
    }
  })
})

export default Vue.http
