/*
 * @Date: 2022-02-21 11:23:08
 * @LastEditors: cuizhide
 * @LastEditTime: 2022-02-21 12:50:50
 * @description:
 */
import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router/index";

import { registerMicroApps, start } from "qiankun";

const app = createApp(App);

app.use(ElementPlus);

app.use(router);

registerMicroApps([
  {
    name: "react app", // app name registered
    entry: "//localhost:8080",
    container: "#vuex-test",
    activeRule: "/vuex-test",
  },
  // {
  //   name: 'vue app',
  //   entry: { scripts: ['//localhost:7100/main.js'] },
  //   container: '#yourContainer2',
  //   activeRule: '/yourActiveRule2',
  // },
]);

start();

app.mount("#app");
