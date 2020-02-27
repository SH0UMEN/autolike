<template>
    <div class="auth-container">
        <auth-message title="Регистрация успешно завершена"
                      icon="/images/success.svg">
        </auth-message>
        <router-link :to="{ name: 'lk-index' }"><accent-button>Перейти в личный кабинет</accent-button></router-link>
    </div>
</template>

<script>
    import AuthMessage from '../../components/auth/AuthMessage'
    import AccentButton from '../../components/common/ui/AccentButton'

    export default {
        name: "RegistationSuccessful",
        components: {
            AuthMessage,
            AccentButton
        }
    }
</script>

<style scoped>

</style>