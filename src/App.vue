<template>
  <div class="container">
    <demo :title="msg"></demo>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import demo from './components/demo.vue'
const msg = ref('Hello Vue 3 + Vite')


</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
/* .logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}
 
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
} */
</style>
 
 