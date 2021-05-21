<template>
  <nav class="navbar navbar-expand-lg  navbar-dark bg-primary p-2">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand me-4"> 知乎专栏</router-link>
      <form class="d-flex" v-if="!user.isLogin">
        <router-link to="/login" tag="div" class="btn btn-outline-light me-2" type="submit">登录</router-link>
        <router-link to="/login" tag="div" class="btn btn-outline-light me-2" type="submit">注册</router-link>
      </form>
      <form class="d-flex" v-else>
        <Dropdown :name="`你好 ${user.name}`">
          <Dropdown-item disable>设置</Dropdown-item>
          <Dropdown-item>会员中心</Dropdown-item>
          <Dropdown-item>设置</Dropdown-item>
        </Dropdown>
      </form>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import Dropdown from '@/components/Dropdown.vue' // @ is an alias to /src
import DropdownItem from '@/components/DropdownItem.vue'

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



// 点击事件
// const login = () => {
//   list.isLogin = true
// }

</script>

<style scoped>
.image {
  width: 50px;
  height: 100%;
  position: absolute;
  left: 0;
}
</style>
