import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import route2 from "./vuex"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/ex1/home",
    name: "Home",
    component: Home
  },
  {
    path: "/ex1/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/About.vue")
  },
  {
    path: "/ex1/message",
    name: "Message",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/Message.vue")
  }
].concat(route2);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
