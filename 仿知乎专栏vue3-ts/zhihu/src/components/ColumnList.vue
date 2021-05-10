<template>
  <el-row :gutter="20">
    <el-col :span="8" v-for="column in list" :key="column.id" class="el-row--flex">
      <el-card :body-style="{ padding: '10px' }">
        <img :src="column.active" :alt="column.title" class="img">
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
import { defineProps, PropType } from 'vue'

export interface ColumnProps {
  id: number,
  title: string,
  active: string,
  description: string
}

defineProps({
  list: {
    type: Array as PropType<ColumnProps[]>,
    require: true
  }
})
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
  margin-bottom: 20px;
}

.image {
  width: 100%;
  display: block;
}
</style>
