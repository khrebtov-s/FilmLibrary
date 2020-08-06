import Vue from "vue";
import Vuex from "vuex";

import task from "./task";
import tags from "./tags";
import user from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    task,
    tags,
    user,
  },
});
