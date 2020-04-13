<template>
    <main-modal class="balance-modal"
                :show="$store.getters.balanceModalIsShown"
                @closed="$store.commit('closeBalanceModal')" name="lk-balance">
        <tab title="Пополнение баланса" :tabs="['Пополнить баланс', 'История пополнений']">
            <balance-tab></balance-tab>
            <balance-history></balance-history>
        </tab>
    </main-modal>
</template>

<script>
    import MainModal from "../../../components/common/ui/MainModal"
    import Tab from "../../../components/common/ui/Tab"
    import BalanceTab from "../tabs/BalanceTab"
    import BalanceHistory from "../tabs/BalanceHistory"

    export default {
        name: "BalanceModal",
        components: {
            BalanceHistory,
            Tab,
            BalanceTab,
            MainModal,
        },
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/lk/modals/balance-modal"
</style>