<template>
  <input
    v-if="tag !== 'textarea'"
    v-bind="$attrs"
    :class="{'is-invalid': inputRef.error}"
    :value="inputRef.val"
    aria-describedby="emailHelp"
    class="form-control"
    @blur="validateInput"
    @input="updateValue"
  >
  <textarea
   v-else
    v-bind="$attrs"
    :class="{'is-invalid': inputRef.error}"
    :value="inputRef.val"
    aria-describedby="emailHelp"
    class="form-control"
    @blur="validateInput"
    @input="updateValue"
  ></textarea>
  <text v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</text>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, PropType, reactive, useContext } from 'vue'
import mitt from '@/hooks/mitt.ts'

const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
const ctx = useContext()
export type TagType = 'input' | 'textarea'

export interface RuleProp {
  type: 'required' | 'email',
  message: string
}

export type RulesProp = RuleProp[]
const props = defineProps({
  rules: Array as PropType<RulesProp>,
  modelValue: String,
  tag: {
    type: String as PropType<TagType>,
    default: 'input'
  }
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
  return true
}
const updateValue = (e: KeyboardEvent) => {
  const targetValue = (e.target as HTMLInputElement).value
  inputRef.val = targetValue
  ctx.emit('update:modelValue', targetValue)
}

onMounted(() => {
  mitt.emit('foo', validateInput)
})

ctx.expose({
  validateInput
})
</script>

<style scoped>

</style>
