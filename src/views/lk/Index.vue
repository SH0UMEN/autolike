<template>
    <div class="lk">
        <lk-header class="lk__header"></lk-header>
        <main>
            <order-list class="lk__order-list"></order-list>
            <order-modal></order-modal>
            <!--<main-modal class="put-money" name="lk-put-money">

            </main-modal>-->
        </main>
        <lk-footer></lk-footer>
    </div>
</template>

<script>
    import LkHeader from "../../components/lk/Header"
    import LkFooter from "../../components/lk/Footer"
    import OrderList from "../../components/lk/OrderList"
    import MainModal from "../../components/common/ui/MainModal"
    import OrderModal from "../../components/lk/modals/OrderModal"

    export default {
        name: "Index",
        components: {
            LkHeader,
            LkFooter,
            OrderList,
            MainModal,
            OrderModal
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/lk/index"
</style>