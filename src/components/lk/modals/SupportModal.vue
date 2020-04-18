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
                            label-placement="left" v-model="email">Электронная почта</text-input>
                <text-input name="message" class="modal__form-input support-modal__message"
                            placeholder="Опишите вашу проблему"
                            label-placement="left" v-model="message" tag="textarea">Сообщение</text-input>
            </form>
        </div>
        <accent-button @click="send"
                       class="modal__main-button">Отправить</accent-button>
    </main-modal>
</template>

<script>
    import MainModal from "../../common/ui/MainModal"
    import AccentButton from "../../common/ui/AccentButton"
    import TextInput from "../../common/ui/TextInput"

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
        methods: {
            send() {

            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/lk/modals/support-modal"
</style>