import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home/home'
import taskList from '@/components/taskList/home'
import dataCount from '@/components/dataCount/home'
import reoprt from '@/components/reoprt/home'
import login from '@/components/login/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/taskList',
      name: 'list',
      component: taskList
    },
    {
      path: '/dataCount',
      name: 'data',
      component: dataCount
    }
    ,
    {
      path: '/reoprt',
      name: 'reoprt',
      component: reoprt
    }
  ]
})

