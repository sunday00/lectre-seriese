import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ItemList from '@todo/views/Item-list.vue'
// import route2 from "./vuex"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/todo/main",
    name: "Home",
    component: () =>
      import("../views/Home.vue")
  },
  {
    path: "/todo/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  },
  {
    path: "/todo/todo/:status?",
    name: "Todo",
    component: () =>
      import("../views/Todo.vue"),
    children: [
      { path: "/", name: 'Item-list', component: ItemList }
    ]
  },
]
// .concat(route2);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
