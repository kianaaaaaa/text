<template>
	<div>
		<HelloWorld ref="foo" msg="Hello Vue 3 + Vite" @myclick="mm"/>
		<el-row>
			<el-button @click="getfoo">默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</el-row>
	</div>

</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import {ref} from 'vue'

const foo = ref(null)

let mm = (e) => {
	console.log(e)
}
const getfoo = () => {
	console.log(HelloWorld)
}
</script>

<style scoped>

</style>
