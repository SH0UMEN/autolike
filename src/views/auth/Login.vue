<template>
    <div class="login auth-container">
        <span class="login__title auth-title">Личный кабинет</span>
        <form class="login__form auth-form">
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
                           :disabled="$v.email.$invalid || $v.email.$anyError ||
                                      $v.password.$invalid || $v.password.$anyError">Войти</accent-button>
            <div class="auth-advice">
                <span>Нет личного кабинета?</span>
                <router-link :to="{ name: 'registration' }">Зарегистрироваться</router-link>
            </div>
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
                password: ""
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
        }
    }
</script>

<style lang="sass">
</style>