import Vue from "vue";
import App from "./views/Master.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
