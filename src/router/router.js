import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home"),
    name: "home",
  },
  {
    path: "/gallery/:page",
    component: () => import("@/views/Gallery"),
    name: "gallery",
  },
  {
    path: "/blog/:page",
    component: () => import("@/views/Blog"),
    name: "blog",
  },
];

export const router = new VueRouter({
  routes,
  mode: "history",
});
