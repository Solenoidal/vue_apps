/*
ルーターの制御を行うファイル
ルーターの情報(パス､名前､コンポーネント､エイリアス等)を格納し､
App.vueで使うようにエクスポートしています
*/
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import EventCreate from "../views/EventCreate.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/real-world-app",
    name: "event-list",
    component: EventList
  },
  {
    path: "/real-world-app/event/:id",
    name: "event-show",
    component: EventShow,
    props: true
  },
  {
    path: "/real-world-app/create",
    name: "event-create",
    component: EventCreate
  },
  {
    // using route parameter
    path: "/user/:username",
    name: "user",
    component: User,
    props: true
  }
];

const router = new VueRouter({
  /* history uses history.pushstate API */
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
