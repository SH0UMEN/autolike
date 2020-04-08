<template>
  <div id="app">
    <vue-page-transition class="page-transition" name="fade">
      <router-view/>
    </vue-page-transition>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: "App",
    mounted() {
      // axios.interceptors.response.use((res)=>{
      //   return res;
      // }, (err)=>{
      //   console.log(err);
      //   if(err.response.data.errors && err.response.data.errors.token) {
      //     this.store.dispatch("refresh").then(()=>{
      //       this.store.dispatch("getUserData").then((res)=>{
      //         return Promise.resolve(res);
      //       }).catch((err)=>{
      //         this.$router.push({ name: "auth" });
      //         return Promise.reject(err);
      //       });
      //     }).catch((err)=>{
      //       this.$router.push({ name: "auth" });
      //       return Promise.reject(err);
      //     })
      //   } else {
      //     return Promise.reject(err);
      //   }
      // });
    }
  }
</script>

<style lang="sass">
  @import "assets/sass/common/common-settings"
  @import "assets/sass/common/grid-elements"
</style>
