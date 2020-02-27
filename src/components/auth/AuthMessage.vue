<template>
    <div class="auth-message">
        <img class="auth-message__icon" :src="icon">
        <span class="auth-message__title">{{ title }}</span>
        <p v-if="info" class="auth-message__info">
            {{ info }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "AuthMessage",
        props: {
            title: {
                required: true,
                type: String
            },
            info: {
                default: "",
                type: String
            },
            icon: {
                required: true,
                type: String
            }
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/auth/auth-message"
</style>