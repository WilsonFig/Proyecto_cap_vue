<template>
  <div class="home">
    <NavBar></NavBar>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    <HelloWorld></HelloWorld>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavBar
  }
}
</script>
