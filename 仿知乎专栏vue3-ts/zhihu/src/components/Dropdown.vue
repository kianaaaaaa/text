<template>
  <div class="dropdown" ref="dropdownRef">
    <a class="btn  btn-outline-light dropdown-toggle me-2" href="#" @click="open">{{ name }}</a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
import useClikcOutside from '@/hooks/useClikcOutside.ts'

const props = defineProps(['name'])
const isOpen = ref(false)
const dropdownRef = ref<null | HTMLElement>(null)

const open = () => {
  isOpen.value = !isOpen.value
}

const isClikcOutside = useClikcOutside(dropdownRef)
watch(isClikcOutside, () => {
  if (isOpen.value && isClikcOutside.value) {
    isOpen.value = false
  }
})

</script>

<style scoped>

</style>
