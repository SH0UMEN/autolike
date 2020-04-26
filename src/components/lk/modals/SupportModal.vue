<template>
    <main-modal class="support-modal"
                :show="$store.state.LK.supportModalShown"
                @closed="$store.commit('closeSupportModal')"
                name="support-modal">
        <div class="modal__container">
            <span class="modal__title">Поддержка</span>
            <p class="modal__paragraph">Подробно опишите вашу проблему и мы свяжемся с вами в течении 24 часов.</p>
            <form class="modal__form">
                <text-input name="email" class="modal__form-input support-modal__email"
                            placeholder="Введите вашу электронную почту"
                            :error="
                                $v.email.$error ? 'Введите корректный email' : ''
                            "
                            @blur="$v.email.$touch"
                            label-placement="left" v-model="email">Электронная почта</text-input>
                <text-input name="message" class="modal__form-input support-modal__message"
                            :error="
                                $v.message.$error ? 'Введите 10-1000 символов' : ''
                            "
                            @blur="$v.message.$touch"
                            placeholder="Опишите вашу проблему"
                            label-placement="left" v-model="message" tag="textarea">Сообщение</text-input>
            </form>
        </div>
        <accent-button @click="send"
                       :disabled="!valid"
                       class="modal__main-button">Отправить</accent-button>
    </main-modal>
</template>

<script>
    import MainModal from "../../common/ui/MainModal"
    import AccentButton from "../../common/ui/AccentButton"
    import TextInput from "../../common/ui/TextInput"
    import axios from "axios"
    import { email, required, minLength, maxLength } from "vuelidate/src/validators"

    export default {
        name: "OrderSuccessModal",
        components: {
            TextInput,
            AccentButton,
            MainModal
        },
        data() {
            return {
                email: "",
                message: ""
            }
        },
        validations: {
            email: {
                required: required,
                email: email,
            },
            message: {
                required: required,
                maxLength: maxLength(1000),
                minLength: minLength(10)
            }
        },
        computed: {
            valid() {
                return !(this.$v.email.$invalid || this.$v.message.$invalid)
            }
        },
        methods: {
            send() {
                if(this.valid) {
                    let param = {
                        email: this.email,
                        message: this.message
                    };

                    axios.post(this.$store.getters.getAPIurl + "/support/create", param).then((res) => {
                        this.$store.commit("closeSupportModal");
                        this.$store.commit("openSuccessModal", "Сообщение отправлено в тех. поддержку")
                    })
                }
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/lk/modals/support-modal"
</style>