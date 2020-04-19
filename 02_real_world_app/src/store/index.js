import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "ihaie", name: "solenoid" },
    categories: ["food", "programming", "job", "sub culture"],
    todos: [
      { id: 1, title: "Buy a Python Book", done: false },
      { id: 2, title: "Running", done: true },
      { id: 3, title: "Clean my room", done: false }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    catLength: state => state.categories.length,
    doneTodos: state => state.todos.filter(todo => todo.done),
    activeTodosCount: state => state.todos.filter(todo => !todo.done).length
  }
});
