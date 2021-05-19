<template>
  <div class="g-container">
    <div class="g-item"></div>
    <div class="g-item"></div>
    <div class="g-item"></div>
    <div class="g-item"></div>
    <div class="g-item"></div>
    <div class="g-item"></div>
    <div class="g-item"></div>
    <div class="g-item"></div>
    <div class="g-item"></div>
    <div class="g-item"></div>
    <div class="g-item"></div>
    <div class="g-item"></div>
  </div>

</template>

<script lang="ts" setup>

</script>

<style  scoped>
.g-container {
  width: 200px;
  height: 200px;
  border: 2px solid #fff;
  display: flex;
  align-items: flex-end;

}

.g-item {
  flex-grow: 1;
  height: 60px;
  background-color: black;
  animation: heightChange 1s infinite ease-in-out alternate;
}

@keyframes heightChange {
  from {
    height: 60px;
  }
  to {
    height: 90px;
  }
}

</style>
