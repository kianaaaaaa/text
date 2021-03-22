<template>
	<div id="app">
		<router-link to="/" tag="el-link" type="primary">返回主页</router-link>
		<span>饿了么组件</span>
		<el-time-select
				v-model="value"
				:picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
				placeholder="选择时间">
		</el-time-select>
	</div>
</template>

<script>
export default {
	name: "index",
	data() {
		return {
			msg: "这是第一个组件",
			value:''
		}
	}
}
</script>

<style scoped>

</style>
