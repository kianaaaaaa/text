<template>
  <div class="dropdown">
    <a class="btn  btn-outline-light dropdown-toggle me-2" href="#" @click="open">欢迎 kiana</a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
      <li><a class="dropdown-item" href="#">新建文章</a></li>
      <li><a class="dropdown-item" href="#">设置</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps(['name'])

const isOpen = ref(false)
const open = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>

</style>
