import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueRouter from 'vue-router';
import {routes} from './routes';
Vue.use(VueRouter);
Vue.config.productionTip = false


const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
