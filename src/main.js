import Vue from 'vue'
import App from './App.vue'
import './css/global.less'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css'
import './assets/function'
import router from './router/router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
