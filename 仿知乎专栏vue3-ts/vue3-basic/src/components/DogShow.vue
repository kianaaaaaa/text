<template>
	<img :src="arr.data[0].url" alt="" />
</template>

<script setup>
import axios from 'axios'
import {ref} from "vue";


const arr = await axios.get('https://api.thecatapi.com/v1/images/search')
console.log(arr)


</script>

