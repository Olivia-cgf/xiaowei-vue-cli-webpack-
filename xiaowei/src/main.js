// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueResource from 'vue-resource';
import App from './App';
import Selftimer from './components/Selftimer/selftimer';
import Winning from './components/Winning/winning';
import activity from './components/activity/activity';
import seek from './components/login/seekpassword';
import my from './components/my/my'; // 个人页面
import activityDetail from './components/activity/activityDetail';
import recentDetail from './components/activity/recentDetail';
import morePic from './components/morePic/morePic';
import uploader from 'vue-simple-uploader';
// 底部页面
import aboutus from './components/footer/aboutus';
import contact from './components/footer/contact';
import copyright from './components/footer/copyright';
import joinus from './components/footer/joinus';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);
// vue文件上传
Vue.use(uploader);
// vue-swiper的使用
Vue.use(VueAwesomeSwiper);
// 定义路由
const routes = [
  {path: '/', redirect: '/Selftimer', component: Selftimer},
  {path: '/Selftimer', component: Selftimer},
  {path: '/morePic', component: morePic},
  {path: '/activity', component: activity},
  {path: '/activity/activity_detail', component: activityDetail},
  {path: '/activity/recentDetail', component: recentDetail},
  {path: '/Winning', component: Winning},
  {path: '/seekpassword', component: seek},
  {path: '/my', component: my},
  {path: '/aboutus', component: aboutus},
  {path: '/copyright', component: copyright},
  {path: '/contact', component: contact},
  {path: '/joinus', component: joinus}
];

// 定义路由当前
const router = new VueRouter({
    linkActiveClass: 'active',
    routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
