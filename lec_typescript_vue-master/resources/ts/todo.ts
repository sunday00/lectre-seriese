import Vue from "vue";
import App from "./todo/views/Master.vue";
import router from "./todo/router";
import store from "./todo/store";

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
