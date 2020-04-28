import Vue from "vue";
import Vuex from "vuex";
import * as user from "@/store/modules/user.js";
import * as event from "@/store/modules/event.js";

Vue.use(Vuex);

export default new Vuex.Store({
  // コンポーネント間で共有したい状態
  state: {
    categories: ["food", "programming", "job", "sub culture"]
  },
  // 状態を更新するためのちいさなメソッド群
  mutations: {},
  // ビジネスロジックを書くところ
  actions: {},
  // Vuex Modulesの設定
  modules: {
    user,
    event
  }
});
