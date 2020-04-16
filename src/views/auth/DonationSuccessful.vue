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
    import getQueryParameter from "../../helpers/getQueryParameter"

    export default {
        name: "DonationSuccessful",
        components: {
            AccentButton,
            AuthMessage,
        },
        data() {
            return {
                money: getQueryParameter('donation') || 1000
            }
        },
        methods: {

        }
    }
</script>

<style >

</style>