<template>
    <div class="landing">
        <landing-header></landing-header>
        <doer2></doer2>
    </div>
</template>

<script>
    import LandingHeader from "../../components/landing/Header"
    import Doer2 from "../../components/landing/Doer2"

    export default {
        name: "Landing",
        components: {
            LandingHeader,
            Doer2
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/landing/index"
</style>