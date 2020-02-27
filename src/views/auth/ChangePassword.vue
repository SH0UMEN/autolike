<template>
    <div class="auth-container">
        <span class="login__title auth-title">Установите новый пароль</span>
        <form class="login__form auth-form" @submit.prevent="checkForm">
            <text-input class="auth-input" name="password"
                        v-model="password"
                        :error="$v.password.$error ? 'Не менее 5 символов' : ''"
                        type="password"
                        @blur="$v.password.$touch()">Новый пароль</text-input>
            <text-input class="auth-input" name="repeat_password"
                        v-model="repeatPassword"
                        :error="$v.repeatPassword.$error ? 'Пароли не совпадают' : ''"
                        type="password"
                        @blur="$v.repeatPassword.$touch()">Повторите пароль</text-input>
            <accent-button class="auth-submit" type="submit"
                           :disabled="!formIsValid">Установить</accent-button>
            <div class="auth-advice">
                <span>Вспопнили пароль?</span>
                <router-link :to="{ name: 'login' }">Войти</router-link>
            </div>
        </form>
    </div>
</template>

<script>
    import TextInput from "../../components/common/ui/TextInput"
    import AccentButton from "../../components/common/ui/AccentButton"
    import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

    export default {
        name: "ChangePassword",
        components: {
            TextInput,
            AccentButton
        },
        data() {
            return {
                password: "",
                repeatPassword: ""
            }
        },
        validations: {
            password: {
                required,
                minLength: minLength(5)
            },
            repeatPassword: {
                required,
                sameAs: sameAs('password')
            }
        },
        computed: {
            formIsValid() {
                return !(this.$v.password.$invalid || this.$v.password.$anyError ||
                         this.$v.repeatPassword.$invalid || this.$v.repeatPassword.$anyError)
            }
        },
        methods: {
            checkForm() {
                if(this.formIsValid) {
                    this.$router.push({ name: 'restore-successful' })
                }
            }
        }
    }
</script>

<style scoped>

</style>