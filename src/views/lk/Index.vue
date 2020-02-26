<template>
    <div class="lk">
        <lk-header class="lk__header"></lk-header>
        <main>
            <order-list class="lk__order-list"></order-list>
        </main>
        <lk-footer></lk-footer>
    </div>
</template>

<script>
    import LkHeader from "../../components/lk/Header"
    import LkFooter from "../../components/lk/Footer"
    import OrderList from "../../components/lk/OrderList"

    export default {
        name: "Index",
        components: {
            LkHeader,
            LkFooter,
            OrderList
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/lk/index"
</style>