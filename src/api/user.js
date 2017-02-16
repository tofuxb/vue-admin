import Ajax from 'src/common/ajax'

export default {
  getUserInfo () {
    return Ajax.get('userinfo')
  }
}
