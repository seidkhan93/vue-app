import "./_reset.scss"
import "./_main.scss"
import "bootstrap/scss/bootstrap-grid.scss"

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
new Vue({
  el: '#app',
  render: h => h(App)
})



