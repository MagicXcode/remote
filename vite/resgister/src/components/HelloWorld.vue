<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div>
    <button @click="count++">count is: {{ count }}</button>
  </div>
</template>

<style scoped>
button {
  background-color: #eee;
  border: none;
  padding: 0.5em 1em;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2em;
}
div{
  height:100vh;
}
</style>
