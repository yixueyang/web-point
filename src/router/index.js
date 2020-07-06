import Vue from 'vue'
import Router from 'vue-router'
import firstPointListPage from '@/components/firstPointListPage'
import HelloWorld from '@/components/HelloWorld'
import newFunAndThis from '@/components/newFunAndThis'

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
    }
  ]
})
