<template>
    <div>
        <lk-header></lk-header>
        <main>
            <order-list></order-list>
        </main>
    </div>
</template>

<script>
    import LkHeader from "../../components/lk/Header"
    import OrderList from "../../components/lk/OrderList"

    export default {
        name: "Index",
        components: {
            LkHeader,
            OrderList
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/lk/index"
</style>