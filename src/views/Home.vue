<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <img src="../assets/test.jpeg" alt="img" :style="{width:'100px'}">
    <h1>70216002 黄乐怡</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
