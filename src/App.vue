<template>
  <div id="app">
    <vue-page-transition class="page-transition" name="fade">
      <router-view/>
    </vue-page-transition>
  </div>
</template>

<script>
  export default {
    name: "App",
  }
</script>

<style lang="sass">
  @import "assets/sass/common/common-settings"
  @import "assets/sass/common/grid-elements"
</style>
