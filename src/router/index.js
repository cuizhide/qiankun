/*
 * @Date: 2022-02-21 11:43:12
 * @LastEditors: cuizhide
 * @LastEditTime: 2022-02-21 11:47:40
 * @description:
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: "/",
      redirect: "/vue-router",
    },
    {
      path: "/vue-router",
      name: "vueRouter",
      component: () =>
        import(
          /* webpackChunkName: "introduce" */ "../components/HelloWorld.vue"
        ),
    },
  ],
});

export default router;
