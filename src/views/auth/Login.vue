<template>
    <div class="login auth-container">
        <span class="login__title auth-title">Личный кабинет</span>
        <form class="login__form auth-form">
            <text-input v-model="email" placeholder="example@gmail.com">Электронная почта</text-input>
        </form>
    </div>
</template>

<script>
    import TextInput from "../../components/common/ui/TextInput"

    export default {
        name: "Login",
        components: {
            TextInput
        },
        data() {
            return {
                email: ""
            }
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/auth/login"
</style>