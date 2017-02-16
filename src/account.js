import Cookies from 'js-cookie'
import Config from './config'

const login = function () {
  window.location.href = Config.host + '/uc/login?useruri=' + encodeURIComponent(window.location.href)
}

const logout = function () {
  window.location.href = Config.host + '/logout'
}

const isLogin = function () {
  return true || Cookies.get('_islogined') === 'true'
}

export default {
  login,
  logout,
  isLogin
}
