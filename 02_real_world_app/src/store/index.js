import Vue from "vue";
import Vuex from "vuex";
import EventService from "../services/EventService";

Vue.use(Vuex);

export default new Vuex.Store({
  // コンポーネント間で共有したい状態
  state: {
    user: { id: "ihaie", name: "solenoid" },
    categories: ["food", "programming", "job", "sub culture"],
    todos: [
      { id: 1, title: "Buy a Python Book", done: false },
      { id: 2, title: "Running", done: true },
      { id: 3, title: "Clean my room", done: false }
    ],
    events: [],
    events_length: 0
  },
  // 状態を更新するためのちいさなメソッド群
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events, length) {
      state.events = events;
      state.events_length = length;
    }
  },
  // ビジネスロジックを書くところ
  actions: {
    async createEvent({ commit }, event) {
      await EventService.postEvent(event);
      commit("ADD_EVENT", event);
    },
    async fetchEvents({ commit }, { perPage, page }) {
      try {
        const res = await EventService.getEvents(perPage, page);
        commit("SET_EVENTS", res.data, res.headers["x-total-count"]);
      } catch (error) {
        console.error(error.message);
      }
    }
  },
  modules: {},
  // 状態を取得するためのメソッド
  /*
  これによりコンポーネントはメソッドを呼び出すだけで状態の加工処理まで書かなくて良くなる
  受け取った状態の加工をコンポーネントにやらせると同じロジックを複数のコンポーネントで書くことになるし､
  加工ロジックに修正が来たときにすべてのコンポーネントで書き直すことになるので､
  状態管理の責任をVuexに一任することでバグが生じにくくなるし､保守もしやすくなる｡
  */
  getters: {
    catLength: state => state.categories.length,
    doneTodos: state => state.todos.filter(todo => todo.done),
    activeTodosCount: state => state.todos.filter(todo => !todo.done).length
  }
});
