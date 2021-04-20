<template>
  <div>
    {{title}}

    <HelloWorld ref="foo" msg="Hello Vue 3 + Vite" @myclick="mm" />
    <el-row>
      <el-button @click="getfoo">默认按钮</el-button>
      <el-button type="primary" @click="addTiele">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>

</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import { ref, provide } from "vue";

const foo = ref(null);
const title = ref("2012");

provide("aa", title.value); // 传入一个响应式数据

let mm = (e) => {
  console.log(e);
};
const getfoo = () => {
  console.log(HelloWorld);
};
const addTiele = () => {
  title.value++;
};
</script>

<style scoped>
</style>
