import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../pages/common/home'], resolve),
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          component: resolve => require(['../pages/common/welcome'], resolve)
        },
        {
          path: '/first',
          name: 'first',
          component: resolve => require(['../pages/default/first'], resolve)
        },
        {
          path: '/second',
          name: 'second',
          component: resolve => require(['../pages/default/second'], resolve)
        },
        {
          path: '/third',
          name: 'third',
          component: resolve => require(['../pages/default/third'], resolve)
        }
      ]
    }
  ]
})
