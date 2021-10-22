/*
 * @Author: kingford
 * @Date: 2021-10-22 09:48:04
 * @LastEditTime: 2021-10-22 15:54:00
 */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { setupVant } from "./hooks/web/vant";
Vue.config.productionTip = false;

function bootstrap() {
  setupVant(Vue);

  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}

bootstrap();
