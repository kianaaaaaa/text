<template>
  <div class="container">
    <Global-hader :user="currentUser"></Global-hader>

    <router-view class="mb-xl-5 mt-xl-5"/>
    <footer class="text-center py-4 text-secondary bg-light">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { computed, getCurrentInstance } from 'vue'
import GlobalHader, { userProps } from '@/components/GlobalHader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = useStore()
const currentUser = computed(() => store.state.user)

</script>
