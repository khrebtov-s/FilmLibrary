import Vue from "vue";
import App from "./App.vue";
import Uimini from "uimini/dist/css/uimini.css";
import router from "./router";

Vue.use(Uimini);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
