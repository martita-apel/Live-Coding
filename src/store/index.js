import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

function baseCourse() {
  return {
    id: null,
    data: {
      name: "",
      image: "",
      description: "",
      examples: {
        title: "",
        subtitle: "",
        description: "",
        mp3: "",
      },
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
    GET_COURSES(state, courses) {
      state.courses = courses;
    },
    SET_COURSE(state, course) {
      state.course = course;
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
    getCourses({ commit }) {
      axios
        .get(
          "https://us-central1-live-coding-c73f8.cloudfunctions.net/courses/courses",
          { headers: { "Content-type": "application/json" } }
        )
        .then((response) => {
          console.log(response.data);
          commit("GET_COURSES", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    findCourse({ commit }, id) {
      axios
        .get(
          `https://us-central1-live-coding-c73f8.cloudfunctions.net/courses/course/${id}`
        )
        .then((response) => {
          commit("SET_COURSE", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
});
