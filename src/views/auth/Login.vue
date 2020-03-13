<template>
    <div class="login auth-container">
        <span class="login__title auth-title">Личный кабинет</span>
        <form class="login__form auth-form" @submit.prevent="login">
            <text-input class="auth-input" name="email"
                        :error="$v.email.$error ? 'Некорректный email' : ''"
                        v-model="email"
                        placeholder="example@gmail.com"
                        @blur="$v.email.$touch()">Электронная почта</text-input>
            <text-input class="auth-input" name="password"
                        :error="$v.password.$error ? 'Минимум 5 символов' : ''"
                        v-model="password"
                        @blur="$v.password.$touch()"
                        type="password">Пароль</text-input>
            <div class="auth-advice">
                <span>Забыли пароль?</span>
                <router-link :to="{ name: 'restore' }">Восстановить</router-link>
            </div>
            <accent-button class="auth-submit" type="submit"
                           :disabled="!formIsValid">Войти</accent-button>
            <div class="auth-advice">
                <span>Нет личного кабинета?</span>
                <router-link :to="{ name: 'registration' }">Зарегистрироваться</router-link>
            </div>
            <ul class="auth-errors">
                <li class="auth-error" v-for="error in errors">{{ error }}</li>
            </ul>
        </form>
    </div>
</template>

<script>
    import TextInput from "../../components/common/ui/TextInput"
    import AccentButton from "../../components/common/ui/AccentButton"
    import { required, minLength, email } from 'vuelidate/lib/validators'

    export default {
        name: "Login",
        components: {
            TextInput,
            AccentButton
        },
        data() {
            return {
                email: "",
                password: "",
                errors: []
            }
        },
        validations: {
            email: {
                required,
                email: email
            },
            password: {
                required,
                minLength: minLength(5)
            }
        },
        computed: {
            formIsValid() {
                return !(this.$v.email.$invalid || this.$v.email.$anyError ||
                    this.$v.password.$invalid || this.$v.password.$anyError)
            }
        },
        methods: {
            login() {
                if(this.formIsValid) {
                    let params = {
                        email: this.email,
                        password: this.password
                    };

                    let args = {
                        params: params,
                        url: '/login'
                    }

                    this.$store.dispatch('auth', args).then(() => {
                        this.errors = [];
                        this.$router.push('/lk')
                    }).catch(()=>{
                        this.errors = ["Неправильный email или пароль"]
                    })
                }
            }
        }
    }
</script>

<style lang="sass">
</style>