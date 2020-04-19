import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "ihaie", name: "solenoid" },
    categories: ["food", "programming", "job", "sub culture"]
  },
  mutations: {},
  actions: {},
  modules: {}
});
