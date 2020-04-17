<template>
    <div class="binding-modal__slide binding-modal-slide-two">
        <div class="stepper__container binding-modal-slide-two__container">
            <img :src="currentSoc.picture" class="binding-modal-slide-two__picture" alt="">
            <span class="binding-modal-slide__title binding-modal-slide-two__title">Выполните тестовое задание</span>
            <p class="modal__paragraph binding-modal-slide-two__paragraph">Подождите 2-3 секунды после вступления в группу, а затем закройте окно.</p>
        </div>
        <accent-button tag="a" target="_blank" link="https://www.google.com" data-next="1" class="stepper__main-button">Вступить в группу
            <img class="binding-modal-slide-two__picture-mini" :src="currentSoc.pictureMini" alt="">
        </accent-button>
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