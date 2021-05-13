<template>
  asdsa
</template>

<script lang="ts" setup>
import { useContext } from 'vue'

const { expose } = useContext()

const clear = () => {
  console.log('123123')
}

expose({ clear })
</script>

<style scoped>

</style>
