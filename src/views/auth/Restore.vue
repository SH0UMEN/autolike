<template>
    <div class="restore auth-container">
        <span class="restore__title auth-title">Восстановление пароля</span>
        <p class="auth-description">Введите электронную почту, указанную при регистрации личного кабинета.</p>
        <form class="restore__form auth-form" @submit.prevent="sendMail">
            <text-input class="auth-input" name="email"
                        v-model="email"
                        placeholder="example@gmail.com"
                        :error="$v.email.$error ? 'Некорректный email' : ''"
                        @blur="$v.email.$touch()">Электронная почта</text-input>
            <div class="message-error" v-if="errors">
                {{ errors }}
            </div>
            <accent-button class="auth-submit" type="submit"
                           :disabled="$v.email.$invalid || $v.email.$anyError">
                Отправить
            </accent-button>
            <div class="auth-advice">
                <span>Вспомнили пароль?</span>
                <router-link :to="{ name: 'login' }">Войти</router-link>
            </div>
        </form>
    </div>
</template>

<script>
    import TextInput from "../../components/common/ui/TextInput"
    import AccentButton from "../../components/common/ui/AccentButton"
    import { required, email } from 'vuelidate/lib/validators'

    export default {
        name: "Restore",
        components: {
            TextInput,
            AccentButton
        },
        data() {
            return {
                email: "",
                errors: false
            }
        },
        validations: {
            email: {
                required,
                email: email
            },
        },
        methods: {
            sendMail() {
                if(!(this.$v.email.$invalid || this.$v.email.$anyError)) {
                    this.$store.dispatch('requestChangePassword', this.email).then((res) => {
                        this.errors = false;
                        this.$router.push({ name: 'restore-confirming' })
                    }).catch(()=>{
                        this.errors = "Аккаунт с данным Email не зарегистрирован"
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>