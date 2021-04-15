<template>
		<HelloWorld msg="Hello Vue 3 + Vite" @myclick="mm"/>
	<el-row>
		<el-button>默认按钮</el-button>
		<el-button type="primary">主要按钮</el-button>
		<el-button type="success">成功按钮</el-button>
		<el-button type="info">信息按钮</el-button>
		<el-button type="warning">警告按钮</el-button>
		<el-button type="danger">危险按钮</el-button>
	</el-row>
</template>

<script setup>
	import HelloWorld from '@/components/HelloWorld.vue'
	import {createApp } from 'vue'
 let mm =(e)=>{
	 console.log(e)
	}

</script>

<style scoped>

</style>
