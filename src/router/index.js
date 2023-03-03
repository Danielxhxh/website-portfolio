import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/404.vue"),
    },
  ],
});