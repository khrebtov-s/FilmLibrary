import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import Uimini from "uimini/dist/css/uimini.css";
import router from "./router";
import store from "./store";

import firebase from "firebase/app";
// import "firebase/app";
import "firebase/auth";
import "firebase/messaging";
import "firebase/storage";

import "vue2-animate/dist/vue2-animate.min.css";

Vue.use(Vuelidate, Uimini);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyDtvL6FI8ouFYGzlMbSkJcrQGfvspz7EfA",
      authDomain: "film-library-b82fa.firebaseapp.com",
      databaseURL: "https://film-library-b82fa.firebaseio.com",
      projectId: "film-library-b82fa",
      storageBucket: "film-library-b82fa.appspot.com",
      messagingSenderId: "520748787985",
      appId: "1:520748787985:web:25b9f229509658d40b04b0",
      measurementId: "G-CR891EYDG9",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // Checking if the user is in the system
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        store.dispatch("loggedUser", user);
      }
    });
  },
  render: (h) => h(App),
}).$mount("#app");
