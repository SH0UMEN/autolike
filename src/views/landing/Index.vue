<template>
    <div class="landing">
        <landing-header></landing-header>
        <doer></doer>
    </div>
</template>

<script>
    import LandingHeader from "../../components/landing/Header"
    import Doer from "../../components/landing/Doer"

    export default {
        name: "Landing",
        components: {
            LandingHeader,
            Doer
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/landing/index"
</style>