import Vue from "vue";
import VueRouter from "vue-router";

//import components
import Home from "@/components/Home.vue";
import Login from "@/components/Auth/Login.vue";
import Registration from "@/components/Auth/Registration.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
