<template>
	<div id="nav">
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
	</div>
	<router-view/>
	<h1> {{ x }},{{ y }}</h1>
	<h1 v-if="lodDing"> loding!....</h1>
	<img @click="open()" v-if="!lodDing" :src="result[0].url" alt="result"/>
	<model :isOpen="modalIsOpen" @close-modal=close()></model>
</template>

<script lang="ts" setup>
import useMousePosition from "@/hooks/useMousePosition";
import useURLlodaer from "@/hooks/useURLlodaer";
import model from "@/components/Modal";
import {watch, defineComponent, ref} from "vue";

interface DogResult {
	message: string,
	status: string
}

interface CatResult {
	id: string,
	url: string,
	height: number,
	width: number,
}

// const {result, lodDing, loaded} = useURLlodaer<DogResult>('https://dog.ceo/api/breeds/image/random')
const {result, lodDing, loaded} = useURLlodaer<CatResult>('https://api.thecatapi.com/v1/images/search')
watch(result, () => {
	if (result.value) {
		console.log('value', result.value.url)
	}
})
const {x, y} = useMousePosition()

/*弹窗*/
const modalIsOpen = ref(false)
const close = () => {
	modalIsOpen.value = false
}
const open = () => {
	modalIsOpen.value = true
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
