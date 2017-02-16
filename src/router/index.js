import Vue from 'vue'
import Router from 'vue-router'
import Account from '../account'

import MainView from 'views/Main'
import NotFoundView from 'views/404'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: MainView,
      meta: { auth: true },
      children: []
    }, {
      path: '*',
      component: NotFoundView
    }
  ],
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth) && !Account.isLogin()) {
    Account.login()
  } else {
    next()
  }
})

export default router
