<template>
    <main-modal class="balance-modal"
                :show="$store.getters.balanceModalIsShown"
                @closed="$store.commit('closeBalanceModal')" name="balance-modal">
        <tab title="Пополнение баланса" :tabs="['Оформить вывод', 'История выводов']">
            <balance-tab></balance-tab>
            <balance-history :history="history"></balance-history>
        </tab>
    </main-modal>
</template>

<script>
    import MainModal from "../../../../components/common/ui/MainModal"
    import Tab from "../../../../components/common/ui/Tab"
    import BalanceTab from "../tabs/BalanceTab"
    import BalanceHistory from "../../tabs/BalanceHistory"
    import axios from "axios"

    export default {
        name: "BalanceModal",
        components: {
            BalanceHistory,
            Tab,
            BalanceTab,
            MainModal,
        },
        data() {
            return {
                history: []
            }
        },
        mounted() {
            this.$store.dispatch("getTransactionRequests").then((res) => {
                this.history = res.data.list;
            })
        }
    }
</script>

<style>

</style>