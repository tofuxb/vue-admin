import Vue from 'vue'
import VueResource from 'vue-resource'
import config from '../config'

Vue.use(VueResource)

Vue.http.options.root = config.host

Vue.http.interceptors.push((request, next) => {
  next(response => {
    if (response.status !== 200) {
      window.app.$message({
        type: 'error',
        message: '服务器出错，请稍后再试'
      })
    }
  })
})

export default Vue.http
