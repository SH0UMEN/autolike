<template>
    <main-modal class="order-modal"
                :show="$store.getters.orderModalIsShown"
                @close="$store.commit('closeOrderModal')"
                name="lk-order">

        <stepper :steps="steps" title="Оформление заказа">
            <order1></order1>
            <order2></order2>
            <order3></order3>
        </stepper>

        <!--<div class="order-modal">-->
            <!--<div class="order-modal__info" :class="{ 'shown': showInfo }">-->
                <!--<img src="/images/success.svg" alt="">-->
                <!--<span class="order-modal__info-title">Заказ успешно оформлен</span>-->
            <!--</div>-->
            <!--<form @submit.prevent="createOrder" class="order-modal__form modal-form">-->
                <!--<div class="order-modal__form-wrapper modal-form-container">-->
                    <!--<span class="order-modal__title modal-form-title">Оформление заказа</span>-->
                    <!--<radio-switcher class="order-modal__switcher"-->
                                    <!--:value="optionsForSwitcher[0]" @input="setType"-->
                                    <!--:options="optionsForSwitcher">-->
                    <!--</radio-switcher>-->
                    <!--<text-input class="order-modal__text-input"-->
                                <!--:placeholder="resultData.type == 'likes' ? 'https://www.instagram.com/p/***********/' : 'https://www.instagram.com/***********/'"-->
                                <!--name="instagram"-->
                                <!--v-model="instagram"-->
                                <!--:error="$v.instagram.$error ? 'Некорректная ссылка' : ''"-->
                                <!--@blur="$v.instagram.$touch()">-->
                        <!--Ссылка на {{ resultData.type == 'likes' ? 'ваш пост' : 'пользователя'}} в Instagram-->
                    <!--</text-input>-->

                    <!--<div class="order-modal__quantity">-->
                        <!--<number-input v-model="quantity"-->
                                      <!--:h="likesQuantityStep"-->
                                      <!--class="order-modal__quantity-input"-->
                                      <!--:error="quantity < $v.quantity.$params.between.min ? 'Cлишком маленькое кол-во' :-->
                                            <!--quantity > $v.quantity.$params.between.max ? 'Cлишком большое кол-во' :-->
                                            <!--!$v.quantity.integer ? 'Введите число' :-->
                                            <!--quantity % likesQuantityStep != 0 ? `Число не кратно ${likesQuantityStep}` : ''">Количество</number-input>-->
                        <!--&lt;!&ndash;<text-input class="order-modal__quantity-input"-->
                                    <!--name="quantity" type="number"-->
                                    <!--@blur="$v.quantity.$touch()"-->
                                    <!--v-model="quantity"-->
                                    <!--:error="quantity < $v.quantity.$params.between.min ? 'Cлишком маленькое кол-во' :-->
                                            <!--quantity > $v.quantity.$params.between.max ? 'Cлишком большое кол-во' :-->
                                            <!--quantity % likesQuantityStep != 0 ? `Число не кратно ${likesQuantityStep}` : ''">Количество</text-input>&ndash;&gt;-->
                        <!--<span class="order-modal__quantity-min"-->
                              <!--:class="{ 'order-modal__quantity-min_triggered': quantity < $v.quantity.$params.between.min }">-->
                            <!--Минимум 1000-->
                        <!--</span>-->
                        <!--<span class="order-modal__quantity-max"-->
                              <!--:class="{ 'order-modal__quantity-max_triggered': quantity > $v.quantity.$params.between.max }">-->
                            <!--Максимум 150 000-->
                        <!--</span>-->
                    <!--</div>-->

                    <!--<div class="order-modal__price-block" v-if="$v.quantity.integer">-->
                        <!--<span class="order-modal__price-label" :class="{ 'order-modal__price-label_error': orderPrice > $store.getters.getUser.balance }">-->
                            <!--<img src="/images/alert-triangle.svg" alt="">-->
                            <!--Стоимость заказа-->
                        <!--</span>-->
                        <!--<span class="order-modal__price">{{ orderPrice }} руб.</span>-->
                        <!--<div v-if="orderPrice > $store.getters.getUser.balance" class="order-modal__price-error">-->
                            <!--<span class="order-modal__price-error-text">Вам не хватает {{ orderPrice - $store.getters.getUser.balance  }} руб</span>-->
                            <!--<button class="order-modal__price-error-link" @click="toBalance">Пополнить баланс</button>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->

                <!--<accent-button v-if="!showInfo"-->
                               <!--type="submit"-->
                               <!--class="modal-form-submit"-->
                               <!--:disabled="!formIsValid">-->
                    <!--<span>Оформить заказ</span>-->
                <!--</accent-button>-->
                <!--<accent-button v-else-->
                               <!--@click="closeWindow"-->
                               <!--class="modal-form-submit">-->
                    <!--<span>Закрыть</span>-->
                <!--</accent-button>-->
            <!--</form>-->
        <!--</div>-->
    </main-modal>
</template>

<script>
    import Stepper from "../../../components/common/ui/Stepper"
    import MainModal from "../../../components/common/ui/MainModal"
    import Order1 from "../../../components/lk/steppers/Order1"
    import Order2 from "../../../components/lk/steppers/Order2"
    import Order3 from "../../../components/lk/steppers/Order3"

    export default {
        name: "OrderModal",
        components: {
            Stepper,
            Order1,
            Order2,
            Order3,
            MainModal
        },
        data() {
            return {
                steps: ['1 шаг', "2 шаг", "Завершение"],
            }
        },
        methods: {
            // createOrder() {
            //     let props = {
            //         order_type: this.resultData.type,
            //         social_type: "instagram",
            //         url: this.instagram,
            //         count: this.quantity,
            //         price: this.quantity*this.priceForOne
            //     };
            //     this.$store.dispatch("createOrder", props).then(()=>{
            //         this.showInfo = true;
            //     })
            // },
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/lk/modals/order-modal"
</style>