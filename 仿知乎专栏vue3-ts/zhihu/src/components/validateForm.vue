<template>
  <form class="validate-from-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitFrom">
      <slot name="submit">
        <button class="btn btn-primary" type="submit">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { defineEmit, onUnmounted, useContext } from 'vue'
import mitt from '@/hooks/mitt.ts'

const ctx = useContext()
const emit = defineEmit(['form_submit'])

const submitFrom = () => {
  emit('form_submit', true)
}
const callback = (test: string) => {
  console.log(test)
}
mitt.on('foo', e => console.log(e))
onUnmounted(() => {
  mitt.off('foo', () => console.log('移除'))
})
</script>
