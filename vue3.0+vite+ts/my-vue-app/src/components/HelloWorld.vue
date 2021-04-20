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
 <input type="text" @input="first" >
 {{text}}
</template>

<script setup>
import { useContext,defineProps,defineEmit,ref,inject } from 'vue'
import topbar from '@/components/topbar.vue'

defineProps({
  msg: String
})

const text = ref('99999999')
const state = ref({
	count:0
})
const ctx = useContext()
const emit = defineEmit(['myclick',"update:title"]);


fetch("/api/users")
		.then(response =>JSON.stringify(response))
		.then(json => console.log(json));
// 派发事件


const emitclick = () => {
	emit('myclick','事件派发');
}
const first = (e)=>{
   text.value = e.target.value
}
let NAME = inject("aa")
    console.log(NAME) // 蛙



ctx.expose({ //返回
	a:'123'
})

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
