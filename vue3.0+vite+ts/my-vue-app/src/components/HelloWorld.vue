<template>
  <h1>{{ msg }}</h1>
	<p @click="$store.commit('add')">{{$store.state.couter}}</p>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>
	<topbar />
  <button @click="state.count++">count is: {{ state.count }}</button>
  <button @click="emitclick">派发事件</button>
  
</template>

<script setup>
import { useContext,defineProps,defineEmit,ref } from 'vue'
import topbar from '@/components/topbar.vue'

defineProps({
  msg: String
})
const ctx = useContext()

fetch("/api/users")
		.then(response =>JSON.stringify(response))
		.then(json => console.log(json));
// 派发事件
const emit = defineEmit(['myclick']);
const emitclick = () => {
	emit('myclick','事件派发');
}

const state = ref({
	count:0
})

ctx.expose({
	a:'123'
})

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
