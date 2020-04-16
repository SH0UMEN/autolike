<template>
    <li class="order-item" @click="$emit('click', order.id)">
        <div class="order-item__photo">
            <span class="order-item__status-mini"
                  :class="{ 'order-item__status-mini_completed': order.status == 3,
                             'order-item__status-mini_doing': order.status == 2,
                             'order-item__status-mini_handling': order.status == 1,
                             'order-item__status-mini_not-paid': order.status == 5,
                             'order-item__status-mini_error': order.status == 4}">
            </span>
            <img class="order-item__picture" :src="currentSoc.pictureMini">
        </div>
        <div class="order-item__info">
            <div class="order-item__info-top">
                <a :href="order.url" class="order-item__title">{{ order.url }}</a>
                <div class="order-item__status">
                                <span class="order-item__status-flag"
                                      :class="{ 'order-item__status-flag_completed': order.status == 3,
                                                 'order-item__status-flag_doing': order.status == 2,
                                                 'order-item__status-flag_handling': order.status == 1,
                                                 'order-item__status-flag_not-paid': order.status == 5,
                                                 'order-item__status-flag_error': order.status == 4}">
                                    {{
                                        order.status == 3 ? 'Выполнен' :
                                        order.status == 1 ? 'В обработке' :
                                        order.status == 2 ? 'Выполняется' :
                                        order.status == 5 ? 'Не оплачено' :
                                        order.status == 4 ? 'Ошибка' : ''
                                    }}
                                </span>
                    <a v-if="order.status == 'Выполнено'" href="#">Что делать?</a>
                    <a v-if="order.status == 'Ошибка'" href="#">Оплатить</a>
                </div>
            </div>
            <div class="order-item__info-bottom">
                <img class="order-item__soc-image" :src="currentSoc.pictureMini" alt="">
                <span class="order-item__quantity">
                    <span class="order-item__quantity-value">{{ order.count }}</span><span class="order-item__quantity-inflection">{{ inflection }}</span>
                </span>
                <span class="order-item__price">{{ formatPrice(order.price) }} бал.</span>
                <span class="order-item__doer">{{ order.is_bot ? 'Боты' : 'Реальные люди' }}</span>
                <span class="order-item__date">{{ order.created_at | moment("H:mm, MM.DD.YYYY") }}</span>
            </div>
            <!--<div class="order-item__info-more">-->
                <!--<img class="order-item__info-more-icon" src="/images/more.svg">-->
            <!--</div>-->
        </div>
    </li>
</template>

<script>
    import inflector from "../../helpers/inflector"
    import socials from "../../helpers/socials"

    export default {
        name: "OrderView",
        props: {
            order: {
                type: Object,
                required: true
            }
        },
        methods: {
            formatPrice(price) {
                return Number(price)
            },
        },
        computed: {
            currentSoc() {
                return socials.find((e) => {
                    return e.id == parseInt(this.order.social_type);
                })
            },
            currentCheatingType() {
                return this.currentSoc.cheatingTypes.find((e)=>{
                    return e.id == this.order.order_type;
                })
            },
            inflection() {
                return inflector(this.order.count, this.currentCheatingType.inflectionForms)
            }
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/lk/order-list/order-view"
</style>