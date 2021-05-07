<template>
  <el-submenu :index=" index.toString()" v-for=" (item,index) in props.item.children">
    <template #title>
      <i :class=" item.meta.icon"></i>
      <span>{{ item.meta.title }}</span>
    </template>
    <el-menu-item-group v-for="(e,i) in item.children" :key="e.path">
      <el-menu-item :index="index + '-'+ i" @click="goTo(e)">{{e.meta.title}}</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const props = defineProps({
  item: Object,
  basePath: String,
});
const goTo = (to) => {
  console.log(to);
  router.push({ name: "yis", path: to.path });
};
</script>

<style scoped>
</style>
