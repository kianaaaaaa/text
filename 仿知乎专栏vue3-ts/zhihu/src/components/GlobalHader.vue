<template>
  <nav class="navbar navbar-expand-lg  navbar-dark bg-primary p-2">
    <div class="container-fluid">
      <a class="navbar-brand me-4" href="#"> 知乎专栏</a>
      <form class="d-flex" v-if="!list.isLogin">
        <div class="btn btn-outline-light me-2" type="submit" @click="login">登录</div>
        <div class="btn btn-outline-light me-2" type="submit">注册</div>
      </form>
      <form class="d-flex" v-else>
        <Dropdown :name="list.name"></Dropdown>
      </form>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { reactive, defineProps, PropType } from 'vue'
import Dropdown from '@/components/Dropdown.vue' // @ is an alias to /src

export interface userProps {
  id?: number,
  name?: string,
  isLogin: boolean,
}

const props = defineProps({
  user: {
    type: Object as PropType<userProps>,
    require: true
  }
})
// 获取props传值 复杂类型数据 reactive | 基本数据 ref
const list = reactive(props.user)
// 点击事件
const login = () => {
  list.isLogin = true
}

</script>

<style scoped>
.image {
  width: 50px;
  height: 100%;
  position: absolute;
  left: 0;
}
</style>
