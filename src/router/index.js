import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  mode: 'history',
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
        // welcome pages
        {
          path: '/welcome',
          name: 'welcome',
          component: resolve => require(['../pages/common/welcome'], resolve)
        },
        // default pages
        {
          path: '/default/first',
          name: 'default-first',
          component: resolve => require(['../pages/default/first'], resolve)
        },
        {
          path: '/default/second',
          name: 'default-second',
          component: resolve => require(['../pages/default/second'], resolve)
        },
        {
          path: '/default/third',
          name: 'default-third',
          component: resolve => require(['../pages/default/third'], resolve)
        },
        // test pages
        {
          path: '/test/first',
          name: 'test-first',
          component: resolve => require(['../pages/test/first'], resolve)
        },
        {
          path: '/test/second',
          name: 'test-second',
          component: resolve => require(['../pages/test/second'], resolve)
        },
        {
          path: '/test/third',
          name: 'test-third',
          component: resolve => require(['../pages/test/third'], resolve)
        },
        // demo pages
        {
          path: '/demo/first',
          name: 'demo-first',
          component: resolve => require(['../pages/demo/first'], resolve)
        },
        {
          path: '/demo/second',
          name: 'demo-second',
          component: resolve => require(['../pages/demo/second'], resolve)
        },
        {
          path: '/demo/third',
          name: 'demo-third',
          component: resolve => require(['../pages/demo/third'], resolve)
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../pages/common/login'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['../pages/common/register'], resolve)
    },
    {
      path: '/404',
      name: '404',
      component: resolve => require(['../pages/common/404'], resolve)
    },
    {
      path: '/500',
      name: '500',
      component: resolve => require(['../pages/common/500'], resolve)
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name ? next({
      name: from.name
    }) : next('/404')
  } else {
    next()
  }
})

export default router
