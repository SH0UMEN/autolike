<template>
    <div class="auth-container">
        <auth-message title="Новый пароль успешно установлен"
                      icon="/images/success.svg">
        </auth-message>
        <router-link :to="{ name: 'auth' }">
            <access-button>Войти в личный кабинет</access-button>
        </router-link>
    </div>
</template>

<script>
    import AuthMessage from '../../components/auth/AuthMessage'
    import AccessButton from '../../components/common/ui/AccentButton'

    export default {
        name: "RestoreSuccessful",
        components: {
            AccessButton,
            AuthMessage
        }
    }
</script>

<style scoped>

</style>