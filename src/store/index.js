import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function baseCourse() {
  return {
    id: null,
    data: {
      name: "",
      image: "",
      description: "",
      examples: [],
    },
  };
}

export default new Vuex.Store({
  state: {
    currentUser: null,
    courses: [],
    course: baseCourse(),
  },
  mutations: {
    UPDATE_CURR_USER(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    updateUser({ commit }, user) {
      return new Promise((resolve, reject) => {
        try {
          commit("UPDATE_CURR_USER", user);
          resolve(user);
        } catch (e) {
          reject(e);
        }
      });
    },
  },
});
