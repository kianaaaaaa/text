<template>
	<teleport to="#teleport-target">
		<div id="content" v-if="isOpen">
			<slot><h2>this is modal</h2></slot>
			<button @click="buttonClick">close</button>
		</div>
	</teleport>
</template>

<script lang="ts" setup>
import {useContext, defineProps, defineEmit} from "vue";
const ctx = useContext()
const props = defineProps({
	isOpen: Boolean,
});
const emit = defineEmit(["close-modal"])

const buttonClick = () => {
	emit("close-modal")
}

</script>

<style scoped>

#content {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,.5);
}
</style>
