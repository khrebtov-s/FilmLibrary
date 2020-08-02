export default {
  state: {
    tasks: [
      {
        id: "1",
        title: "GrowthBusters: Hooked on Growth",
        description:
          "I directed this documentary challenging the myths linking growth with prosperity and fulfillment. It explores how our beliefs about economic, consumption and population growth prevent rational responses to evidence we’ve outgrown the planet. I’m biased, but this film belongs on the list because of its honesty about overpopulation and exploration of the topic’s taboo. GrowthBusters includes interviews with a host leading thinkers like Paul Ehrlich, William Rees and Herman Daly. It also chronicles my own David vs. Goliath adventures in growthbusting: “My mission is to make it okay to be against growth.”",
        whatWatch: "Film",
        completed: false,
        editing: false,
      },
      {
        id: "2",
        title: "Game of thrones",
        description: "Best serials",
        whatWatch: "Serial",
        completed: true,
        editing: false,
      },
    ],
  },
  mutations: {
    newTask(state, payload) {
      state.tasks.push(payload);
    },
  },
  actions: {
    newTask({ commit }, payload) {
      payload.id = Math.random();
      commit("newTask", payload);
    },
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
    taskCompleted(state) {
      return state.tasks.filter((task) => {
        return task.completed;
      });
    },
    taskNotCompleted(state) {
      return state.tasks.filter((task) => {
        return task.completed === false;
      });
    },
  },
};
