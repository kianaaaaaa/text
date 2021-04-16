<template>
	<div class="Sidebar">

		<el-menu
				:default-active="activeMenu "
				class="el-menu-vertical-demo"
				background-color="#2D3E51"
				text-color="#fff"
				:unique-opened="false"
				@open="handleOpen"
				@close="handleClose">
				<sidebar-item
						v-for="route in routes"
						:key="route.path"
						:item="route"
						:base-path="route.path"
				></sidebar-item>
		</el-menu>
	
	</div>
</template>

<script setup>
	import sidebarItem from 'com/sidebarItem.vue'
	import {routes} from '../router/index'
	import { useRoute } from "vue-router";
	import {reactive,computed} from "vue";
	
	console.log(routes)
	const  handleOpen = (key, keyPath) =>{
			console.log(key, keyPath);
	}
	const  handleClose =	(key, keyPath)=> {
			console.log(key, keyPath);
	}
	const activeMenu = computed(() => {
		const route = useRoute();
		const { meta, path } = route;
		if (meta.activeMenu) {
			return meta.activeMenu;
		}
		return path;
	});
	

</script>

<style lang="scss" scoped>
.Sidebar{
	width: 100%;
	height: 100%;
	background-color: #2D3E51;
	
	
}
</style>
