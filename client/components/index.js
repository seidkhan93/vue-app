import Date from './Date.vue';
import Analytics from './Analytics.vue';
import Link from './Link.vue';
import Title from './Title.vue';
import Navbar from './Navbar.vue';
import Article from './Article.vue';

export default function install(Vue, options) {
  Vue.component('Date', Date);
  Vue.component('Analytics', Analytics);
  Vue.component('Link', Link);
  Vue.component('Title', Title);
  Vue.component('Navbar', Navbar);
  Vue.component('Article', Article);
}
