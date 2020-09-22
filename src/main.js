// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.css'
//import './assets/less/common.less'
import './assets/js/getNewObject.js'
import './assets/icon/iconfont.css'
import './assets/icon/iconfont.js'
//import './assets/js/interviewTest'
import './assets/js/pureFunction'
import './assets/js/simulateFun'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
