<template>
  <div class="page">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "../../Common/Style/common";

  .page {
    width: 100%;
    height: 100%;
  }
</style>
