<template>
  <el-row :gutter="20">
    <el-col :span="8" v-for="column in list" :key="column.id" class="el-row--flex">
      <el-card :body-style="{ padding: '0' }">
        <img :src="column.active" :alt="column.title" class="image">
        <div style="padding: 14px;">
          <span>{{ column.title }}</span>
          <div class="bottom">
            <time class="time">{{ column.description }}</time>
            <el-button type="text" class="button">进入专栏</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { computed, defineProps, PropType } from 'vue'

export interface ColumnProps {
  id: number,
  title: string,
  active: string,
  description: string
}

const props = defineProps({
  list: {
    type: Array as PropType<ColumnProps[]>,
    require: true
  }
})

const activeMenu = computed(() => {
  return props.list.map(item => {
    if (!item.active) {
      item.active = require('@/assets/logo.png')
    }
    return item
  })
})
console.log(activeMenu.value)
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.el-row--flex {
  min-width: 200px;
  height: 200px;
}

.image {
  width: 100px;
  border-radius: 50px;
  margin: 0 auto;
  display: block;
}
</style>
