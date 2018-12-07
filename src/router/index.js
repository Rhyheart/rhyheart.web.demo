import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'home'
    },
    {
      path:'/home',
      name:'home',
      component : resolve => require(['../pages/home'], resolve),
      children:[
        {
          path:'/test',
          name:'test',
          component:resolve=>require(['../pages/test'],resolve)
        },
        {
          path:'/first',
          name:'first',
          component : resolve => require(['../pages/first'],resolve)
        },
        {
          path:'/second',
          name:'second',
          component : resolve => require(['../pages/second'],resolve)
        },
        {
          path:'/third',
          name:'third',
          component : resolve => require(['../pages/third'],resolve)
        }
      ]
    }
  ]
})
