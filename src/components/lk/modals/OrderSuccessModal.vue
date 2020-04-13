<template>
    <main-modal class="order-success-modal"
                :show="$store.state.LK.orderSuccessModalShown"
                @closed="$store.commit('closeOrderSuccessModal')"
                name="lk-order-success">
        hello
    </main-modal>
</template>

<script>
    import MainModal from "../../common/ui/MainModal"

    export default {
        name: "OrderSuccessModal",
        components: {
            MainModal
        }
    }
</script>

<style scoped>

</style>