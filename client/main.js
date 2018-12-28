import "_reset.scss"
import "_main.scss"
import "../node_modules/bootstrap/scss/bootstrap-grid"

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
new Vue({
  el: '#app',
  render: h => h(App)
})



