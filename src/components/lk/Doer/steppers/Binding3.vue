<template>
    <div class="binding-modal__slide binding-modal-slide-two">
        <div class="stepper__container binding-modal-slide-two__container">
            <img src="/images/success.svg" class="binding-modal-slide-two__picture" alt="">
            <span class="binding-modal-slide__title binding-modal-slide-two__title">Аккаунт отправлен на модерацию</span>
            <p class="modal__paragraph binding-modal-slide-two__paragraph">Ее состояние вы сможете отслеживать на панели “Ваши соц. сети”.</p>
        </div>
        <accent-button @click="$store.commit('closeBindingSocialModal')" class="stepper__main-button">Закрыть</accent-button>
    </div>
</template>

<script>
    import socials from "../../../../helpers/socials"
    import AccentButton from "../../../common/ui/AccentButton"
    import TextInput from "../../../common/ui/TextInput"

    export default {
        name: "Binding2",
        components: {
            AccentButton,
            TextInput
        },
        computed: {
            currentSoc() {
                return socials.find((el)=>{
                    return el.id == this.$store.getters.getCurrentSocID
                })
            }
        }
    }
</script>

<style>

</style>