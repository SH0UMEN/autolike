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
                                placeholder="https://www.instagram.com/p/***********/"
                                name="instagram"
                                v-model="instagram"
                                :error="$v.instagram.$error ? 'Некорректная ссылка' : ''"
                                @blur="$v.instagram.$touch()">
                        Ссылка на ваш пост в Instagram
                    </text-input>

                    <div class="order-modal__quantity">
                        <secondary-button class="order-modal__quantity-control">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33337 8H12.6667" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </secondary-button>
                        <text-input class="order-modal__quantity-input"
                                    name="quantity" type="number"
                                    @blur="$v.quantity.$touch()"
                                    v-model="quantity"
                                    :error="quantity < $v.quantity.$params.between.min ? 'Cлишком маленькое кол-во' :
                                            quantity > $v.quantity.$params.between.max ? 'Cлишком большое кол-во' :
                                            quantity % likesQuantityStep != 0 ? `Число не кратно ${likesQuantityStep}` : ''">Количество</text-input>
                        <secondary-button class="order-modal__quantity-control">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 3.3335V12.6668" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.33325 8H12.6666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </secondary-button>
                        <span class="order-modal__quantity-min"
                              :class="{ 'order-modal__quantity-min_triggered': quantity < $v.quantity.$params.between.min }">
                            Минимум 1000
                        </span>
                        <span class="order-modal__quantity-max"
                              :class="{ 'order-modal__quantity-max_triggered': quantity > $v.quantity.$params.between.max }">
                            Максимум 150 000
                        </span>
                    </div>
                </div>

                <accent-button class="modal-form-submit"
                               :disabled="$v.quantity.$invalid || $v.quantity.$anyError ||
                                          $v.instagram.$invalid || $v.instagram.$anyError">Оформить заказ
                </accent-button>
            </form>
        </div>
    </main-modal>
</template>

<script>
    import RadioSwitcher from "../../../components/common/ui/RadioSwitcher"
    import MainModal from "../../../components/common/ui/MainModal"
    import TextInput from "../../../components/common/ui/TextInput"
    import AccentButton from "../../../components/common/ui/AccentButton"
    import SecondaryButton from "../../../components/common/ui/SecondaryButton"
    import { required, between, url } from 'vuelidate/lib/validators'

    export default {
        name: "OrderModal",
        components: {
            RadioSwitcher,
            MainModal,
            TextInput,
            AccentButton,
            SecondaryButton
        },
        data() {
            return {
                quantity: 1000,
                instagram: "",
                likesQuantityStep: 500,
                subscribesQuantityStep: 500,
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
        validations: {
            quantity: {
                required,
                between: between(1000, 150000)
            },
            instagram: {
                required,
                url
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