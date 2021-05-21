<template>
  <div>
    <validate-form ref="validateRef" @form_submit="onFromSubmit">
      <div class="mb-3">
        <label class="form-label" for="exampleInputEmail1" @click="dianji">用户名</label>
        <Validata-input ref="inputRef" v-model="emailVal" :rules="emailRules" placeholder="请输入邮箱"
                        type="email"></Validata-input>
      </div>
      <div class="mb-3">
        <label class="form-label" for="exampleInputPassword1">密码</label>
        <Validata-input v-model="passwordVal" :rules="passwordRules" placeholder="请输入密码"
                        type="password"></Validata-input>
      </div>
      <template #submit>
        <span class="btn btn-primary">登录</span>
      </template>
    </validate-form>
  </div>

</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ValidataInput, { RulesProp } from '@/components/Validatainput.vue'
import validateForm from '@/components/validateForm.vue'

const router = useRouter()
const store = useStore()
/*
* 登录
* */
const hw = ref(null)
const emailVal = ref('')
const emailRules: RulesProp = [
  {
    type: 'required',
    message: '电子邮箱地址不能为空'
  },
  {
    type: 'email',
    message: '请输入正确的邮箱格式'
  }
]
const passwordVal = ref('')
const passwordRules: RulesProp = [
  {
    type: 'required',
    message: '密码不能为空'
  }
]
/*
* 表单验证
* */
const inputRef = ref<any>(null)
const onFromSubmit = (result: Boolean) => {
  console.log(result)
  if (result) {
    router.push('/')
    store.commit('login')
  }
}
</script>

<style scoped>

</style>
