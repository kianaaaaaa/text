<template>
  <div class="post-list">
    <article class="card mb-3 shadow-sm"  v-for="item in list" :key="item.id">
      <div class="card-body">
        <h4>{{ item.title }}</h4>
        <div class="row my-3 align-items-center">
          <div class="col-4">
            <img :src="item.image" :alt="item.title" class="rounded-lg w-100">
          </div>
          <p :class="{'col-8': true}" class="text-muted">{{ item.content }}</p>
        </div>
        <span class="text-muted">{{ item.createdAt }}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, reactive } from 'vue'

const props = defineProps(['list'])

const list = reactive(props.list)


</script>

<style scoped>

</style>
