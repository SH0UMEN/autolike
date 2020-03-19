<template>
    <li class="order-item" @click="$emit('click', order.id)">
        <div class="order-item__photo">
            <span class="order-item__status-mini"
                  :class="{ 'order-item__status-mini_completed': order.status == 0,
                            'order-item__status-mini_doing': order.status == 1,
                            'order-item__status-mini_handling': order.status == 2,
                            'order-item__status-mini_not-paid': order.status == 3,
                            'order-item__status-mini_error': order.status == 4}">
            </span>
            <img :src="order.photoURL ? order.photoURL: '/images/photo1.png'">
        </div>
        <div class="order-item__info">
            <div class="order-item__info-top">
                <a :href="order.url" class="order-item__title">{{ order.url }}</a>
                <div class="order-item__status">
                                <span class="order-item__status-flag"
                                      :class="{ 'order-item__status-flag_completed': order.status == 'Выполнено',
                                                 'order-item__status-flag_doing': order.status == 'В работе',
                                                 'order-item__status-flag_handling': order.status == 'Новый',
                                                 'order-item__status-flag_not-paid': order.status == 3,
                                                 'order-item__status-flag_error': order.status == 'Ошибка'}"
                                      v-html="order.status">
                                </span>
                    <a v-if="order.status == 'Выполнено'" href="#">Что делать?</a>
                    <a v-if="order.status == 'Ошибка'" href="#">Оплатить</a>
                </div>
            </div>
            <div class="order-item__info-bottom">
                            <span class="order-item__quantity" v-html="order.count + ' ' + (
                                                                            order.order_type == 'likes' ? 'лайков' :
                                                                            order.order_type == 'subscribes' ? 'подписок' : '')">
                            </span>
                <span class="order-item__price">{{ formatPrice(order.price) }} руб.</span>
                <span class="order-item__date">{{ order.created_at | moment("H:mm, MM.DD.YYYY") }}</span>
            </div>
            <div class="order-item__info-more">
                <img class="order-item__info-more-icon" src="/images/more.svg">
            </div>
        </div>
    </li>
</template>

<script>
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
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/lk/order-list/order-view"
</style>