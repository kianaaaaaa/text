<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
		<h2>{{ object.name }} vs {{name}}</h2>

		<button @click="response">响应式</button>
	</div>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

const object = reactive({
	name: '驴',
	age: '30',
	sex: '男'
})
const name = ref('李白')
const response = () => {
	object.name = '靳'
	name.value = '金元甲'
	
}
</script>
