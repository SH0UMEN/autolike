<template>
    <div class="binding-modal__slide binding-modal-slide-one">
        <div class="stepper__container binding-modal-slide-one__container">
            <img :src="currentSoc.pictureGray" class="binding-modal-slide-one__picture" alt="">
            <span class="binding-modal-slide__title binding-modal-slide-one__title">{{ currentSoc.title }}</span>
            <text-input autocomplete="off"
                        v-model="login" name="login"
                        :error="$v.login.$error ? 'Заполните поле' : ''"
                        @blur="$v.login.$touch()"
                        placeholder="Введите логин"
                        class="binding-modal-slide-one__input">Логин</text-input>
            <p class="modal__paragraph binding-modal-slide-one__paragraph">Мы не распостраняем информацию своих пользователей третьим лицам.</p>
        </div>
        <accent-button :disabled="!$v.login.required" @click="setData" data-next="1" class="stepper__main-button">Следующий шаг</accent-button>
    </div>
</template>

<script>
    import socials from "../../../../helpers/socials"
    import AccentButton from "../../../common/ui/AccentButton"
    import TextInput from "../../../common/ui/TextInput"
    import { required } from "vuelidate/lib/validators"

    export default {
        name: "Binding1",
        components: {
            AccentButton,
            TextInput
        },
        data() {
            return {
                login: ""
            }
        },
        validations: {
            login: {
                required: required
            }
        },
        methods: {
            setData() {
                this.$store.commit("setSocData", this.login);
            }
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