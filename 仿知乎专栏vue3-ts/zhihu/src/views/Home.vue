<template>
  <div class="min">
    <Global-hader :user="user"></Global-hader>
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
        <span class="btn btn-danger">submit</span>
      </template>
    </validate-form>
    <Column-list v-if="false" :list='list' class="mt-5"></Column-list>
  </div>

</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHader, { userProps } from '@/components/GlobalHader.vue'
import validateForm from '@/components/validateForm.vue'
import ValidataInput, { RulesProp } from '@/components/Validatainput.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

/*
* 头部栏
* */
const userData: userProps = {
  isLogin: false,
  name: 'kiana'
}

const user = userData

/*
* 登录
* */
const hw = ref(null)
const emailVal = ref('123@test.com')
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
const passwordVal = ref('123')
const passwordRules: RulesProp = [
  {
    type: 'required',
    message: '密码不能为空'
  }
]

/*
*  列表栏
* */
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test专栏1',
    description: '这是test专栏1,有一段非常有意思的简介,请填一下吧!',
    active: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }, {
    id: 2,
    title: 'test专栏2',
    description: '这是test专栏2,有一段非常有意思的简介,请填一下吧!',
    active: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }, {
    id: 3,
    title: 'test专栏3',
    description: '这是test专栏3,有一段非常有意思的简介,请填一下吧!',
    active: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }, {
    id: 4,
    title: 'test专栏4',
    description: '这是test专栏4,有一段非常有意思的简介,请填一下吧!',
    active: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }
]
const list = testData
/*
* 表单验证
* */
const inputRef = ref<any>(null)
const onFromSubmit = (result: Boolean) => {
  console.log(inputRef.value.validateInput())
}
</script>
<style>
.min {
  max-width: 90%;
  margin: 0 auto;
}
</style>
