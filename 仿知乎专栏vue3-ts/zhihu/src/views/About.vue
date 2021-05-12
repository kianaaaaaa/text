<template>
  <div class="about">
    <h1>{{ name }}</h1>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

// eslint-disable-next-line no-global-assign,no-labels
ref: name = '张三'
</script>
