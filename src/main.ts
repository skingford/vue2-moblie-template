/*
 * @Author: kingford
 * @Date: 2021-10-22 09:48:04
 * @LastEditTime: 2021-10-27 16:41:27
 */
import 'tailwindcss/tailwind.css';
import './styles/index.scss';

import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'amfe-flexible';
import { setupVant } from './hooks/web/vant';
import { Toast } from 'vant';

// 兼容ie
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '@/router/guard';

function bootstrap() {
  Vue.config.productionTip = false;
  setupVant(Vue);

  Vue.prototype.$toast = Toast;

  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
}

bootstrap();
