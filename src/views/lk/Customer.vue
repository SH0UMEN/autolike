<template>
    <div class="lk">
        <lk-header title="Раскрутка" class="lk__header"></lk-header>
        <main>
            <order-list class="lk__order-list"></order-list>
            <order-modal></order-modal>
            <order-success-modal></order-success-modal>
            <balance-modal></balance-modal>
            <main-modal name="logout-modal" :show="$store.getters.isLogoutDialogOpened"
                        @closed="$store.commit('closeLogoutDialog')"
                        class="logout-modal">
                <span class="modal-form-title">
                    Вы уверены что хотите выйти из аккаунта?
                </span>
                <div class="logout-modal__dialog">
                    <secondary-button class="logout-modal__dialog-button" @click="logout" theme="black">Выйти</secondary-button>
                    <secondary-button class="logout-modal__dialog-button" @click="$store.commit('closeLogoutDialog')" theme="black">Нет</secondary-button>
                </div>
            </main-modal>
            <!--<main-modal class="put-money" name="lk-put-money">

            </main-modal>-->
            <lk-footer></lk-footer>
        </main>
    </div>
</template>

<script>
    import LkHeader from "../../components/lk/Header"
    import LkFooter from "../../components/lk/Footer"
    import OrderList from "../../components/lk/OrderList"
    import MainModal from "../../components/common/ui/MainModal"
    import OrderModal from "../../components/lk/modals/OrderModal"
    import OrderSuccessModal from "../../components/lk/modals/OrderSuccessModal"
    import BalanceModal from "../../components/lk/modals/BalanceModal"
    import SecondaryButton from "../../components/common/ui/SecondaryButton"

    export default {
        name: "Customer",
        components: {
            BalanceModal,
            LkFooter,
            OrderList,
            MainModal,
            OrderModal,
            SecondaryButton,
            LkHeader,
            OrderSuccessModal
        },
        methods: {
            logout() {
                this.$store.dispatch('logout').then(()=>{
                    this.$router.push({ name: 'login' })
                })
            }
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/lk/index"
</style>