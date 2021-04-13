<template>
		<HelloWorld msg="Hello Vue 3 + Vite" @myclick="mm"/>
</template>

<script setup>
	import HelloWorld from '@/components/HelloWorld.vue'
 let mm =(e)=>{
	 console.log(e)
	}
	
</script>

<style scoped>

</style>
