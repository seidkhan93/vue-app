import "./_reset.scss";
import "./_main.scss";
import "bootstrap/scss/bootstrap-grid.scss";

import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './router';

import App from './App.vue';
import Plug from './components/index';

Vue.use(VueRouter);
Vue.use(Plug);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
