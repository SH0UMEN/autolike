<template>
    <header class="auth-header">
        <router-link :to="{ name: 'landing-index' }" class="auth-header__logo">Autolike</router-link>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="sass">
    @import "../../assets/sass/auth/header"
</style>