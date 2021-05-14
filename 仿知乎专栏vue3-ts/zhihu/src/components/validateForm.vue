<template>
  <form class="validate-from-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitFrom">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref, useContext, defineEmit } from 'vue'

const ctx = useContext()
const emit = defineEmit(['form_submit'])

const submitFrom = () => {
  emit('form_submit', true)
}

</script>

<style scoped>

</style>
