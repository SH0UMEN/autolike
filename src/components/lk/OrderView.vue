<template>
    <li class="order-item">
        <div class="order-item__photo">
            <span class="order-item__status-mini"
                  :class="{ 'order-item__status-mini_completed': order.status == 0,
                            'order-item__status-mini_doing': order.status == 1,
                            'order-item__status-mini_handling': order.status == 2,
                            'order-item__status-mini_not-paid': order.status == 3,
                            'order-item__status-mini_error': order.status == 4}">
            </span>
            <img :src="order.photoURL">
        </div>
        <div class="order-item__info">
            <div class="order-item__info-top">
                <a href="#" class="order-item__title">{{ order.title }}</a>
                <div class="order-item__status">
                                <span class="order-item__status-flag"
                                      :class="{ 'order-item__status-flag_completed': order.status == 0,
                                                 'order-item__status-flag_doing': order.status == 1,
                                                 'order-item__status-flag_handling': order.status == 2,
                                                 'order-item__status-flag_not-paid': order.status == 3,
                                                 'order-item__status-flag_error': order.status == 4}"
                                      v-html="order.status == 0 ? 'Выполнен':
                                              order.status == 1 ? 'Выполняется':
                                              order.status == 2 ? 'В обработке':
                                              order.status == 3 ? 'Не оплачено':
                                              order.status == 4 ? 'Ошибка' : ''">
                                </span>
                    <a v-if="order.status == 4" href="#">Что делать?</a>
                    <a v-if="order.status == 3" href="#">Оплатить</a>
                </div>
            </div>
            <div class="order-item__info-bottom">
                            <span class="order-item__quantity" v-html="order.quantity + ' ' + (
                                                                            order.type == 'likes' ? 'лайков' :
                                                                            order.type == 'subscribes' ? 'подписок' : '')">
                            </span>
                <span class="order-item__price">{{ order.price }} руб.</span>
                <span class="order-item__date">{{ order.date }}</span>
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
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/lk/order-list/order-view"
</style>