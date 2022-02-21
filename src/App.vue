<!--
 * @Date: 2022-02-21 11:23:08
 * @LastEditors: cuizhide
 * @LastEditTime: 2022-02-21 12:51:53
 * @description: 
-->
<template>
  <el-menu
    :default-active="activeIndex"
    :router="true"
    class="el-menu-demo"
    mode="horizontal"
  >
    <el-menu-item index="/vue-router">vue-router</el-menu-item>
    <el-menu-item index="/vuex-test">vuex-test</el-menu-item>
    <!-- <el-menu-item index="3">Orders</el-menu-item> -->
  </el-menu>

  <router-view></router-view>
  <div id="vuex-test"></div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "App",
  components: {},
  setup(props) {
    const activeIndex = ref("/vue-router");

    return {
      activeIndex,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
