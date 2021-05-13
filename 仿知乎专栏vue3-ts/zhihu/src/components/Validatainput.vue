<template>
  <input
    v-bind="$attrs"
    class="form-control"
    :class="{'is-invalid': inputRef.error}"
    aria-describedby="emailHelp"
    :value="inputRef.val"
    @blur="validateInput"
    @input="updateValue"
  >
  <text class="invalid-feedback" v-if="inputRef.error">{{ inputRef.message }}</text>
</template>

<script lang="ts" setup>
import { reactive, defineProps, useContext, PropType } from 'vue'

const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
const ctx = useContext()

export interface RuleProp {
  type: 'required' | 'email',
  message: string
}

export type RulesProp = RuleProp[]
const props = defineProps({
  rules: Array as PropType<RulesProp>,
  modelValue: String
})

const inputRef = reactive({
  val: props.modelValue || '',
  error: false,
  message: ''
})

const validateInput = () => {
  if (props.rules) {
    const allPassed = props.rules.every(rule => {
      let passed = true
      inputRef.message = rule.message
      switch (rule.type) {
        case 'required':
          passed = (inputRef.val.trim() !== '')
          break
        case 'email':
          passed = emailReg.test(inputRef.val)
          break
        default:
          break
      }
      return passed
    })
    inputRef.error = !allPassed
    return allPassed
  }
}
const updateValue = (e: KeyboardEvent) => {
  const targetValue = (e.target as HTMLInputElement).value
  inputRef.val = targetValue
  ctx.emit('update:modelValue', targetValue)
}

</script>

<style scoped>

</style>
