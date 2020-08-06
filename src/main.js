import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import Uimini from "uimini/dist/css/uimini.css";
import router from "./router";
import store from "./store";

import "vue2-animate/dist/vue2-animate.min.css";

Vue.use(Vuelidate, Uimini);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
