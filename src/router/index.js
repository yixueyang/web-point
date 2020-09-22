import Vue from 'vue'
import Router from 'vue-router'
import firstPointListPage from '@/module/firstPointListPage'
import HelloWorld from '@/module/HelloWorld'
import newFunAndThis from '@/module/newFunAndThis'
import newLearnLess from '@/module/newLearnLess'
import handInputJs from '@/module/handInputJs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstPointListPage',
      component: firstPointListPage
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/newFunAndThis',
      name: 'newFunAndThis',
      component: newFunAndThis
    },
    {
      path: '/newLearnLess',
      name: 'newLearnLess',
      component: newLearnLess
    },
    {
      path: '/handInputJs',
      name: 'handInputJs',
      component: handInputJs
    }
  ]
})
