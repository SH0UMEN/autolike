<template>
    <main-modal class="order-modal"
                :show="$store.getters.orderModalIsShown"
                @closed="$store.commit('closeOrderModal')" name="lk-order">
        <div class="order-modal">
            <form @submit.prevent class="order-modal__form modal-form">
                <div class="order-modal__form-wrapper modal-form-container">
                    <span class="order-modal__title modal-form-title">Оформление заказа</span>
                    <radio-switcher class="order-modal__switcher"
                                    :value="optionsForSwitcher[0]" @input="setType"
                                    :options="optionsForSwitcher">
                    </radio-switcher>
                    <text-input class="order-modal__text-input"
                                placeholder="https://www.instagram.com/p/***********/">Ссылка на ваш пост в Instagram</text-input>
                </div>

                <accent-button class="modal-form-submit" :disabled="true">Оформить заказ</accent-button>

            </form>
        </div>
    </main-modal>
</template>

<script>
    import RadioSwitcher from "../../../components/common/ui/RadioSwitcher"
    import MainModal from "../../../components/common/ui/MainModal"
    import TextInput from "../../../components/common/ui/TextInput"
    import AccentButton from "../../../components/common/ui/AccentButton"

    export default {
        name: "OrderModal",
        components: {
            RadioSwitcher,
            MainModal,
            TextInput,
            AccentButton
        },
        data() {
            return {
                resultData: {
                    type: "likes",
                },
                optionsForSwitcher: [
                    {
                        title: 'Лайки',
                        value: 'likes'
                    },
                    {
                        title: 'Подписки',
                        value: 'subscribes'
                    }
                ]
            }
        },
        methods: {
            setType(event) {
                this.resultData.type = event.value;
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/lk/modals/order-modal"
</style>