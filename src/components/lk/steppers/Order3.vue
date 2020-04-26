<template>
    <div class="order-slide order-slide-three">
        <div class="stepper__container">
            <img :src="currentSoc.pictureGray" class="order-slide-three__soc-image">
            <div class="order-slide-three__order-info">
                <div class="order-slide-three__order-quantity">{{ quantity }} {{ inflection }}</div>
                <div class="order-slide-three__order-doer">
                    <span v-if="$store.state.LK.newOrder.doerType == 1">Боты - {{ $store.state.LK.newOrder.quantityPerHour }}/ч</span>
                    <span v-else>Реальные люди</span>
                </div>
                <div class="order-slide-three__order-link">
                    Ссылка на аккаунт:<br>{{ $store.state.LK.newOrder.link }}
                </div>
            </div>
            <div class="order-slide-three__order-price">
                <div class="order-slide-three__order-price-label" :class="{ 'order-slide-three__order-price-label_error': !correct }">
                    Стоимость заказа <br>
                    <span class="order-slide-three__order-price-error">
                        <img src="/images/alert-triangle.svg" alt=""> Недостаточно средств <br>
                        <button class="modal__link" type="button" @click="toBalance">Пополнить баланс</button>
                    </span>
                </div>
                <div class="order-slide-three__order-price-amount">
                    <span class="order-slide-three__order-price-res">{{ price }} бал.</span>
                    <span class="order-slide-three__order-price-per-one">{{ this.$store.state.LK.prices.all }} бал. / 1 ед.</span>
                </div>
            </div>
        </div>
        <accent-button @click="order" :disabled="!correct" class="stepper__main-button">Оформить заказ</accent-button>
    </div>
</template>

<script>
    import socials from "../../../helpers/socials"
    import AccentButton from "../../common/ui/AccentButton"
    import inflector from "../../../helpers/inflector"

    export default {
        name: "Order3",
        components: {
            AccentButton
        },
        data() {
            return {
                socials: socials,
            }
        },
        methods: {
            toBalance() {
                this.$store.commit("closeOrderModal");
                this.$store.commit("openBalanceModal");
            },
            order() {
                this.$store.dispatch("createOrder").then(()=>{
                    this.$store.commit("closeOrderModal");
                    this.$store.commit("openSuccessModal", "Заказ успешно оформлен");
                    this.$store.dispatch("retryGetOwnOrders");
                });
            },
        },
        computed: {
            correct() {
                return this.$store.getters.getUser.balance >= this.price;
            },
            price() {
                return this.quantity * this.$store.state.LK.prices.all;
            },
            currentSoc() {
                if(this.$store.state.LK.newOrder.socID) {
                    return this.socials.find((el) => {
                        return el.id == this.$store.state.LK.newOrder.socID
                    });
                }
                return false;
            },
            currentCheatingType() {
                if(this.currentSoc) {
                    return this.currentSoc.cheatingTypes.find((el) => {
                        return el.id == this.$store.state.LK.newOrder.cheatingType
                    })
                }
            },
            inflection() {
                if(this.currentCheatingType) {
                    return inflector(this.quantity, this.currentCheatingType.inflectionForms)
                }

                return false;
            },
            quantity() {
                return this.$store.state.LK.newOrder.quantity
            }
        }
    }
</script>

<style>

</style>