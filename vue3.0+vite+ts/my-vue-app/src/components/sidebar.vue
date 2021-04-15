<template>
	<div class="Sidebar">

		<el-menu
				default-active="2"
				class="el-menu-vertical-demo"
				background-color="#2D3E51"
				text-color="#fff"
				:unique-opened="false"
				@open="handleOpen"
				@close="handleClose">
			
			<el-submenu index="1" v-for=" item in routes[0].children">
				<template #title>
					<i :class=" item.meta.icon"></i>
					<span>{{ item.meta.title }}</span>
				</template>
				<el-menu-item-group v-for=" e in item.children">
					<el-menu-item index="1-1">{{e.meta.title}}</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			
		</el-menu>
	
	</div>
</template>

<script setup>
	import {routes} from '../router/index'
	import {reactive} from "vue";
	
	console.log(routes)
	const  handleOpen = (key, keyPath) =>{
			console.log(key, keyPath);
	}
	const  handleClose =	(key, keyPath)=> {
			console.log(key, keyPath);
	}
	

</script>

<style lang="scss" scoped>
.Sidebar{
	width: 100%;
	height: 100%;
	background-color: #2D3E51;
	
	
}
</style>
