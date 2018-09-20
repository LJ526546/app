import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '*', //错误路由
      redirect : '/' //重定向
    },
    {
      path: '/details/:id',
      name: 'details',
      component: details
    }
  ]
})
