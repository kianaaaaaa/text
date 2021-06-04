<template>
  <li class="dropdown-item is-disabled" v-if="!disable">
    <slot></slot>
  </li>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  disable: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>

.dropdown-options .is-disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}

</style>
