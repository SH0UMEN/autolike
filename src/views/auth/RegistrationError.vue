<template>
    <div class="auth-container verification-error">
        <auth-message title="Верификация не пройдена"
                      icon="/images/alert-circle-thin.svg">
        </auth-message>
        <form class="login__form auth-form" @submit.prevent="resend">
            <text-input v-if="showInput" class="auth-input" name="email" v-model="email">Введите email</text-input>
            <accent-button class="auth-submit" type="submit" :disabled="email.length==0">Отправить письмо ещё раз</accent-button>
            <ul class="auth-errors">
                <li class="auth-error" v-for="error in errors">{{ error }}</li>
            </ul>
        </form>
    </div>
</template>

<script>
    import AuthMessage from '../../components/auth/AuthMessage'
    import AccentButton from '../../components/common/ui/AccentButton'
    import TextInput from "../../components/common/ui/TextInput"
    import axios from "axios"

    export default {
        name: "RegistrationError",
        components: {
            TextInput,
            AuthMessage,
            AccentButton
        },
        data() {
            return {
                showInput: false,
                email: "",
                errors: []
            }
        },
        mounted() {
            let email = this.$route.query.email;

            if(email) {
                this.email = email;
            } else {
                this.showInput = true;
            }
        },
        methods: {
            resend() {
                let data = {
                    email: this.email
                };

                data.email = data.email.replace("%40", "@");

                axios.post(this.$store.getters.getAPIurl+"/verify/send", data).then(()=>{
                    this.$router.push({ name: "confirming" })
                }).catch((err)=>{
                    this.errors = [];

                    for(let e in err.response.data.errors) {
                        for(let i of err.response.data.errors[e]) {
                            this.errors.push(i)
                        }
                    }
                })
            }
        }
    }
</script>

<style lang="sass">
    .verification-error
        .auth-form
            margin-top: 0
            margin-bottom: 0
</style>