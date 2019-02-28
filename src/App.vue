<template>
  <div id="app">
    <ramda></ramda>
  </div>
</template>

<script>
  import Ramda from './ramda/index.vue'

  export default {
    name: 'app',
    components: {
      Ramda
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
