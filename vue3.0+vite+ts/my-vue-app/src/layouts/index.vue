<template>
	
	<div class="box">
		<div class="sidebar">
			<sidebar></sidebar>
		</div>
		<div class="min">
			<navbar></navbar>
			<div>
				<router-view></router-view>
			</div>
		</div>
	</div>
	
	


</template>

<script setup>
import navbar from '@/components/navbar.vue';
import sidebar from '@/components/sidebar.vue'
</script>

<style lang="scss" scoped>
.box {
	width: 100%;
	height:100vh;
	display:flex;
	.sidebar{
		width: 300px;
	}
	.min{
		width: 100%;
	}
}
</style>
