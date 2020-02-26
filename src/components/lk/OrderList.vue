<template>
    <div class="order-list">
        <div class="order-list__container container">
            <div class="order-list__type-selector">
                <label class="order-list__type-selector-item">
                    <input value="all" v-model="filter.type" type="radio"> <span>Все заказы</span>
                </label>
                <label class="order-list__type-selector-item">
                    <input value="likes" v-model="filter.type" type="radio"> <span>Лайки</span>
                </label>
                <label class="order-list__type-selector-item">
                    <input value="subscribes" v-model="filter.type" type="radio"> <span>Подписки</span>
                </label>
            </div>

            <div class="order-list__filter-panel">
                <dropdown class="order-list__select-status" type="select" @input="changeStatusFilter" :items="selectOptions.items"></dropdown>
                <img class="order-list__filter-icon" src="/images/filter.svg" alt="">
                <span>Сортировать по:</span>
                <div class="order-list__filter-list">
                    <span class="order-list__filter-item"
                          :class="{ 'order-list__filter-item_selected': filter.filterType == 'date' }" @click="changeFilterType('date')">
                        <span>Дате</span>
                        <img class="order-list__triangle" :class="{ 'order-list__triangle_rotated': filter.sortDirection == 'ASC' }" src="/images/triangle.svg" alt="">
                    </span>
                    <span class="order-list__filter-item"
                          :class="{ 'order-list__filter-item_selected': filter.filterType == 'price' }" @click="changeFilterType('price')">
                        <span>Стоимости</span>
                        <img class="order-list__triangle" :class="{ 'order-list__triangle_rotated': filter.sortDirection == 'ASC' }" src="/images/triangle.svg" alt="">
                    </span>
                    <span class="order-list__filter-item"
                          :class="{ 'order-list__filter-item_selected': filter.filterType == 'quantity' }" @click="changeFilterType('quantity')">
                        <span>Кол-ву лайков/подписок</span>
                        <img class="order-list__triangle" :class="{ 'order-list__triangle_rotated': filter.sortDirection == 'ASC' }" src="/images/triangle.svg" alt="">
                    </span>
                </div>
            </div>

            <ul class="order-list__list">
                <li class="order-list__item" v-for="order in orders">
                    <img class="order-list__item-photo" :src="order.photoURL">
                    <div class="order-list__item-info">
                        <div class="order-list__item-info-top">
                            <a href="#" class="order-list__item-title">{{ order.title }}</a>
                            <div class="order-list__item-status">
                                <span class="order-list__item-status-flag"
                                      :class="{ 'order-list__item-status-flag_completed': order.status == 0,
                                                 'order-list__item-status-flag_doing': order.status == 1,
                                                 'order-list__item-status-flag_handling': order.status == 2,
                                                 'order-list__item-status-flag_not-paid': order.status == 3,
                                                 'order-list__item-status-flag_error': order.status == 4}"
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
                        <div class="order-list__item-info-bottom">
                            <span class="order-list__item-quantity" v-html="order.quantity + ' ' + (
                                                                            order.type == 'likes' ? 'лайков' :
                                                                            order.type == 'subscribes' ? 'подписок' : '')">
                            </span>
                            <span class="order-list__item-price">{{ order.price }} руб.</span>
                            <span class="order-list__item-date">{{ order.date }}</span>
                        </div>
                    </div>
                </li>
            </ul>
            <accent-button class="order-list__more" theme="dark">Показать ещё</accent-button>

            <div class="order-list__pagination">
                <div class="order-list__pages">
                    <secondary-button theme="dark">1</secondary-button>
                    <secondary-button theme="dark">2</secondary-button>
                    <secondary-button theme="dark">3</secondary-button>
                    <secondary-button theme="dark">4</secondary-button>
                    <secondary-button theme="dark">5</secondary-button>
                    <secondary-button class="order-list__next-page" theme="dark">
                        Следующая <img src="/images/arrow-left.svg" alt="">
                    </secondary-button>
                </div>
                <div class="order-list__pages-to-view">
                    <dropdown class="order-list__select-pages-to-view" v-model="paginationValue" :items="paginationValues" type="select" direction="up"></dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Dropdown from '../common/ui/Dropdown'
    import AccentButton from '../common/ui/AccentButton'
    import SecondaryButton from '../common/ui/SecondaryButton'

    export default {
        name: "OrderList",
        components: {
            Dropdown,
            AccentButton,
            SecondaryButton
        },
        data() {
            return {
                orders: [],
                paginationValues: [
                    {
                        title: "Показывать по 12",
                        value: 12,
                        hoverColor: "accent"
                    },
                    {
                        title: "Показывать по 24",
                        value: 24,
                        hoverColor: "accent"
                    },
                    {
                        title: "Показывать по 48",
                        value: 48,
                        hoverColor: "accent"
                    }
                ],
                paginationValue: null,
                selectOptions: {
                    items: [
                        {
                            status: -1,
                            title: "Статус заказа",
                            hoverColor: "accent"
                        },
                        {
                            status: 0,
                            title: "Выполнен",
                            hoverColor: "accent"
                        },
                        {
                            status: 1,
                            title: "Выполняется",
                            hoverColor: "accent"
                        },
                        {
                            status: 2,
                            title: "В обработке",
                            hoverColor: "accent"
                        },
                        {
                            status: 3,
                            title: "Не оплачено",
                            hoverColor: "accent"
                        },
                        {
                            status: 4,
                            title: "Ошибка",
                            hoverColor: "accent"
                        }
                    ]
                },
                filter: {
                    type: "all",
                    status: null,
                    filterType: "date",
                    sortDirection: "DESC",
                }
            }
        },
        mounted() {
            this.filter.status = this.selectOptions.items[0];
            this.paginationValue = this.paginationValues[0];
            this.orders = this.$store.getters.getOrders;
        },
        methods: {
            changeStatusFilter(e) {
                this.filter.status = e.target.value;
                console.log(this.filter.status)
            },
            changeFilterType(type) {
                if(this.filter.filterType == type) {
                    if(this.filter.sortDirection == "DESC") {
                        this.filter.sortDirection = "ASC";
                    } else {
                        this.filter.sortDirection = "DESC";
                    }
                } else {
                    this.filter.filterType = type;
                    this.filter.sortDirection = "DESC"
                }
            }
        },
    }
</script>

<style lang="sass">
    @import "../../assets/sass/lk/order-list/order-list"
</style>