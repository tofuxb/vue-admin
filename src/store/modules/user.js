const state = {
  isLogined: true,
  info: {
    nick: 'Tofuxb',
    avatar: 'http://cn.vuejs.org/images/logo.png',
    email: 'tofuxb@gmail.com'
  }
}

const mutations = {
  SET_USER (state, user) {
    state.isLogined = true
    state.info = user
  }
}

export default {
  state,
  mutations
}
