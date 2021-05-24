<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
      <div class="col-3 text-center">
        <el-image :src="column.avatar" :alt="column.title" class="rounded-circle border w-50"></el-image>
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <Details-list :list="list"></Details-list>
  </div>
</template>

<script setup>
import { computed, useContext, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRoute, APIuseRouter } from 'vue-router'
import { testData, testPosts } from '@/dist/testData'
import DetailsList from '@/components/DetailsList.vue'

const router = useRoute()
const store = useStore()
const ctx = useContext()
const currentId = +router.params.id
console.log(currentId)
const list = computed(() => store.getters.getPostsByCid(currentId))
const column = computed(() => store.getters.getColumnById(currentId))

console.log(column.value)


</script>

<style scoped>

</style>
