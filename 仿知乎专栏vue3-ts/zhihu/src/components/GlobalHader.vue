<template>
  <nav class="navbar navbar-expand-lg  navbar-dark bg-primary p-2">
    <div class="container-fluid">
      <router-link class="navbar-brand me-4" to="/"> 知乎专栏</router-link>
      <form v-if="!user.isLogin" class="d-flex">
        <router-link class="btn btn-outline-light me-2" tag="div" to="/login" type="submit">登录</router-link>
        <router-link class="btn btn-outline-light me-2" tag="div" to="/login" type="submit">注册</router-link>
      </form>
      <form v-else class="d-flex">
        <Dropdown :name="`你好 ${user.name}`">
          <router-link style=" text-decoration:none; " tag="div" to="/createPost">
            <Dropdown-item> 新建文章</Dropdown-item>
          </router-link>
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

defineProps({
  user: {
    type: Object as PropType<userProps>,
    require: true
  }
})
</script>

<style scoped>
.image {
  width: 50px;
  height: 100%;
  position: absolute;
  left: 0;
}
</style>
