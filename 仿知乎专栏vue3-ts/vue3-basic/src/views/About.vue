<template>
	<div class="about">
		<h1>This is an about page</h1>
		{{ arr }}
	</div>
</template>
<script setup>
import axios from 'axios'


const arr = await axios.get('https://api.thecatapi.com/v1/images/search')
console.log(arr)
</script>
