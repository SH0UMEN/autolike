<template>
    <div class="auth">
        <auth-header></auth-header>
        <main class="auth__main">
            <vue-page-transition class="auth__wrapper page-transition" name="fade">
                <router-view></router-view>
            </vue-page-transition>
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