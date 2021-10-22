/*
 * @Author: kingford
 * @Date: 2021-10-22 09:48:04
 * @LastEditTime: 2021-10-22 16:45:17
 */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "amfe-flexible";
import { setupVant } from "./hooks/web/vant";

function bootstrap() {
  Vue.config.productionTip = false;
  setupVant(Vue);

  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}

bootstrap();
