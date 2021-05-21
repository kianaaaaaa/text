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
type ValidateFunc = () => boolean;

let funcArr: ValidateFunc[] = []

const callback = (func: ValidateFunc) => {
  funcArr.push(func)
}
  const submitFrom = () => {
  const result = funcArr.map(func => func()).every(res => res)
  emit('form_submit', result)
}
mitt.on('foo', (e) =>callback(e))
onUnmounted(() => {
  mitt.off('foo', (e) =>callback(e))
  funcArr = []
})
</script>
