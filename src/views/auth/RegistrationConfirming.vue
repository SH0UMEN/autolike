<template>
    <div class="auth-container">
        <auth-message title="Сообщение отправлено"
                      icon="/images/mail.svg"
                      info="Для подтверждения регистрации, пройдите по ссылке в письме на вашей эл. почте.">
        </auth-message>
        <div class="auth-advice">
            <span>Есть личный кабинет?</span>
            <router-link :to="{ name: 'login' }">Войти</router-link>
        </div>
    </div>
</template>

<script>
    import AuthMessage from '../../components/auth/AuthMessage'

    export default {
        name: "RegistrationConfirming",
        components: {
            AuthMessage,
        }
    }
</script>

<style scoped>

</style>