<template>
    <div class="registration auth-container">
        <span class="registration__title auth-title">Регистрация</span>
        <form class="registration__form auth-form" @submit.prevent="registration">
            <text-input class="auth-input" name="login"
                        v-model="login"
                        placeholder="Придумайте логин"
                        :error="$v.login.$error ? 'Не менее 5 символов' : ''"
                        @blur="$v.login.$touch()">Логин</text-input>
            <text-input class="auth-input" name="email"
                        v-model="email"
                        placeholder="example@gmail.com"
                        :error="$v.email.$error ? 'Некорректный email' : ''"
                        @blur="$v.email.$touch()">Электронная почта</text-input>
            <text-input class="auth-input" name="password"
                        v-model="password"
                        :error="$v.password.$error ? 'Не менее 6 символов' : ''"
                        type="password"
                        @blur="$v.password.$touch()">Пароль</text-input>
            <text-input class="auth-input" name="repeat_password"
                        v-model="repeatPassword"
                        :error="$v.repeatPassword.$error ? 'Пароли не совпадают' : ''"
                        type="password"
                        @blur="$v.repeatPassword.$touch()">Повторите пароль</text-input>
            <accent-button class="auth-submit" type="submit"
                           :disabled="!formIsValid">Зарегистрироваться</accent-button>
            <div class="auth-advice">
                <span>Есть личный кабинет?</span>
                <router-link :to="{ name: 'login' }">Войти</router-link>
            </div>
            <ul class="auth-errors">
                <li class="auth-error" v-for="error in errors">
                    <div v-for="e in error">{{ e }}</div>
                </li>
            </ul>
        </form>
    </div>
</template>

<script>
    import TextInput from "../../components/common/ui/TextInput"
    import AccentButton from "../../components/common/ui/AccentButton"
    import getQueryParameter from "../../helpers/getQueryParameter"
    import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

    export default {
        name: "Registration",
        components: {
            TextInput,
            AccentButton
        },
        data() {
            return {
                login: "",
                email: "",
                password: "",
                repeatPassword: "",
                role: getQueryParameter("role") == "0" ? false : true,
                errors: {}
            }
        },
        validations: {
            login: {
                required,
                minLength: minLength(5)
            },
            email: {
                required,
                email: email
            },
            password: {
                required,
                minLength: minLength(6)
            },
            repeatPassword: {
                required,
                sameAs: sameAs('password')
            }
        },
        computed: {
            formIsValid() {
                return !(this.$v.email.$invalid || this.$v.email.$anyError ||
                    this.$v.login.$invalid || this.$v.login.$anyError ||
                    this.$v.password.$invalid || this.$v.password.$anyError ||
                    this.$v.repeatPassword.$invalid || this.$v.repeatPassword.$anyError)
            }
        },
        methods: {
            registration() {
                if(this.formIsValid) {

                    let params = {
                        name: this.login,
                        password: this.password,
                        password_confirmation: this.repeatPassword,
                        email: this.email,
                        role: this.role
                    };

                    let args = {
                        params: params,
                        url: '/register',
                    }

                    this.$store.dispatch('auth', args).then(() => {
                        this.errors = {}
                        this.$router.push({ name: 'confirming' })
                    }).catch((err)=>{
                        this.errors = err.response.data.errors;
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>