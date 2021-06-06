<template>
  <div class="row">
    <div v-for="column in list" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :alt="column.title" :src="column.avatar.url" class="rounded-circle border border-light my-3">
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <div class="btn btn-outline-primary" @click="go(column)">进入专栏</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, PropType } from 'vue'
import { ColumnProps } from '@/store/index'
import { useRouter } from 'vue-router'

const route = useRouter()
const props = defineProps({
  list: {
    type: Array as PropType<ColumnProps[]>,
    require: true
  }
})
const activeMenu = computed(() => {
  return props.list.map(item => {
    if (!item.avatar) {
      item.active = require('@/assets/logo.png')
    }
    return item
  })
})
const go = (column: { id: any; title: any; active: any; description: string }) => {
  route.push({
    path: `/column/${column.id}`
  })
}

</script>

<style scoped>
.card-body img {
  width: 50px;
  height: 50px;
}
</style>
