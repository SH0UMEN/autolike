<template>
    <main-modal class="order-modal"
                :show="$store.getters.orderModalIsShown"
                @closed="closed" name="lk-order">
        <div class="order-modal">
            <div class="order-modal__info" :class="{ 'shown': showInfo }">
                <img src="/images/success.svg" alt="">
                <span class="order-modal__info-title">Заказ успешно оформлен</span>
            </div>
            <form @submit.prevent="createOrder" class="order-modal__form modal-form">
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
                        <number-input v-model="quantity"
                                      :h="likesQuantityStep"
                                      class="order-modal__quantity-input"
                                      :error="quantity < $v.quantity.$params.between.min ? 'Cлишком маленькое кол-во' :
                                            quantity > $v.quantity.$params.between.max ? 'Cлишком большое кол-во' :
                                            !$v.quantity.integer ? 'Введите число' :
                                            quantity % likesQuantityStep != 0 ? `Число не кратно ${likesQuantityStep}` : ''">Количество</number-input>
                        <!--<text-input class="order-modal__quantity-input"
                                    name="quantity" type="number"
                                    @blur="$v.quantity.$touch()"
                                    v-model="quantity"
                                    :error="quantity < $v.quantity.$params.between.min ? 'Cлишком маленькое кол-во' :
                                            quantity > $v.quantity.$params.between.max ? 'Cлишком большое кол-во' :
                                            quantity % likesQuantityStep != 0 ? `Число не кратно ${likesQuantityStep}` : ''">Количество</text-input>-->
                        <span class="order-modal__quantity-min"
                              :class="{ 'order-modal__quantity-min_triggered': quantity < $v.quantity.$params.between.min }">
                            Минимум 1000
                        </span>
                        <span class="order-modal__quantity-max"
                              :class="{ 'order-modal__quantity-max_triggered': quantity > $v.quantity.$params.between.max }">
                            Максимум 150 000
                        </span>
                    </div>

                    <div class="order-modal__price-block" v-if="$v.quantity.integer">
                        <span class="order-modal__price-label" :class="{ 'order-modal__price-label_error': orderPrice > $store.getters.getUser.balance }">
                            <img src="/images/alert-triangle.svg" alt="">
                            Стоимость заказа
                        </span>
                        <span class="order-modal__price">{{ orderPrice }} руб.</span>
                        <div v-if="orderPrice > $store.getters.getUser.balance" class="order-modal__price-error">
                            <span class="order-modal__price-error-text">Вам не хватает {{ orderPrice - $store.getters.getUser.balance  }} руб</span>
                            <button class="order-modal__price-error-link" @click="toBalance">Пополнить баланс</button>
                        </div>
                    </div>
                </div>

                <accent-button v-if="!showInfo"
                               type="submit"
                               class="modal-form-submit"
                               :disabled="!formIsValid">
                    <span>Оформить заказ</span>
                </accent-button>
                <accent-button v-else
                               @click="closeWindow"
                               class="modal-form-submit">
                    <span>Закрыть</span>
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
    import NumberInput from "../../../components/common/ui/NumberInput"
    import { required, between, url, integer } from 'vuelidate/lib/validators'

    export default {
        name: "OrderModal",
        components: {
            RadioSwitcher,
            MainModal,
            TextInput,
            AccentButton,
            SecondaryButton,
            NumberInput
        },
        data() {
            return {
                quantity: 1000,
                instagram: "",
                priceForOne: 10,
                likesQuantityStep: 500,
                subscribesQuantityStep: 500,
                showInfo: false,
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
                between: between(1000, 150000),
                integer: integer

            },
            instagram: {
                required,
            }
        },
        computed: {
            orderPrice() {
                return this.quantity*this.priceForOne;
            },
            formIsValid() {
                return !(this.$v.quantity.$invalid  || this.$v.quantity.$anyError ||
                         this.$v.instagram.$invalid || this.$v.instagram.$anyError);
            }
        },
        methods: {
            closed() {
                this.$store.commit('closeOrderModal')
                this.showInfo = false;
            },
            setType(event) {
                this.resultData.type = event.value;
            },
            toBalance() {
                this.$store.commit('closeOrderModal');
                this.$store.commit('openBalanceModal');
            },
            createOrder() {
                let props = {
                    order_type: this.resultData.type,
                    social_type: "instagram",
                    url: this.instagram,
                    count: this.quantity,
                    price: this.orderPrice()
                };
                this.$store.dispatch("createOrder", props).then(()=>{
                    this.showInfo = true;
                })
            },
            closeWindow() {
                if(this.showInfo) {
                    this.quantity = 1000;
                    this.instagram = "";
                    this.resultData = {
                        type: "likes"
                    }
                    this.showInfo = false;
                    this.$store.commit('closeOrderModal');
                }
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/lk/modals/order-modal"
</style>