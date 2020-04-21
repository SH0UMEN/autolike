<template>
    <div class="auth-container">
        <auth-message :title="`Баланс успешно пополнен на ${money} руб.`"
                      icon="/images/success.svg">
        </auth-message>
        <router-link :to="{ name: 'lk-index' }"><accent-button>Перейти в личный кабинет</accent-button></router-link>
    </div>
</template>

<script>
    import AccentButton from "../../components/common/ui/AccentButton"
    import AuthMessage from "../../components/auth/AuthMessage"

    export default {
        name: "DonationSuccessful",
        components: {
            AccentButton,
            AuthMessage,
        },
        data() {
            return {
                money: this.$route.query.donation || 1000
            }
        },
        methods: {

        }
    }
</script>

<style >

</style>