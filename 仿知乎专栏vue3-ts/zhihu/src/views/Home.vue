<template>
  <div class="min">
    <Global-hader :user="user"></Global-hader>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">用户名</label>
        <Validata-input :rules="emailRules"></Validata-input>
      </div>
<!--      <div class="mb-3">-->
<!--        <label for="exampleInputEmail1" class="form-label">用户名</label>-->
<!--        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"-->
<!--               @blur="vaildataEmail" v-model="emailRef.val">-->
<!--        <div class="form-text " v-if="emailRef.error">{{ emailRef.massage }}</div>-->
<!--      </div>-->
<!--      <div class="mb-3">-->
<!--        <label for="exampleInputPassword1" class="form-label">密码</label>-->
<!--        <input type="password" class="form-control" id="exampleInputPassword1">-->
<!--      </div>-->
<!--      <div class="mb-3 form-check">-->
<!--        <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
<!--        <label class="form-check-label" for="exampleCheck1">对我进行检查</label>-->
<!--      </div>-->
      <button type="submit" class="btn btn-primary">提交</button>
    </form>
    <Column-list :list='list' class="mt-5" v-if="false"></Column-list>

  </div>

</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHader, { userProps } from '@/components/GlobalHader.vue'
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
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
const emailRef = reactive({
  val: '',
  error: false,
  massage: ''
})
const vaildataEmail = () => {
  if (emailRef.val.trim() === '') {
    console.log(emailRef.val)
    emailRef.error = true
    emailRef.massage = '邮箱不能为空'
  } else if (!emailReg.test(emailRef.val)) {
    emailRef.error = true
    emailRef.massage = '邮箱格式错误'
  } else {
    emailRef.error = false
    emailRef.massage = ''
  }
}
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

console.log()
</script>
<style>
.min {
  max-width: 90%;
  margin: 0 auto;
}
</style>
