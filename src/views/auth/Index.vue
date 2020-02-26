<template>
    <div class="auth">
        <auth-header></auth-header>
        <main class="auth__main">
            <div class="auth__wrapper">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script>
    import AuthHeader from "../../components/auth/Header"

    export default {
        name: "Index",
        components: {
            AuthHeader
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/auth/index"
</style>