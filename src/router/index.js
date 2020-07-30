import Vue from "vue";
import VueRouter from "vue-router";

//import components
import Home from "@/components/Home.vue";
import Login from "@/components/Auth/Login.vue";
import Registration from "@/components/Auth/Registration.vue";
import Task from "@/components/Task.vue";
// import Task from "@/components/Task.vue";

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
  {
    path: "/task",
    name: "Task",
    component: Task,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
