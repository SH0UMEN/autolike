<template>
    <customer></customer>
</template>

<script>
    import LandingHeader from "../../components/landing/Header"
    import Customer from "../../components/landing/Customer"

    export default {
        name: "Landing",
        components: {
            LandingHeader,
            Customer
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/landing/index"
</style>