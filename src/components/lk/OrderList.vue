<template>
    <div class="order-list">
        <div class="order-list__container container">
            <accent-button class="order-list__order-button">Оформить заказ</accent-button>
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
                <dropdown class="order-list__select-filter" type="select"
                          @input="changeStatusFilter"
                          :items="filter.filterOptions">
                </dropdown>
                <dropdown class="order-list__select-status" type="select"
                          @input="changeStatusFilter"
                          :items="selectOptions.items">
                </dropdown>
                <img class="order-list__filter-icon" src="/images/filter.svg" alt="">
                <span class="order-list__filter-marker">Сортировать по:</span>
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
                <order-view class="order-list__list-item"
                            v-for="order in orders" :order="order"
                            @click="orderMoreOpen($event)"
                            :key="order.id"></order-view>
            </ul>

            <accent-button class="order-list__more" theme="dark">Показать ещё</accent-button>

            <div class="order-list__pagination">
                <div class="order-list__pages">
                    <secondary-button class="order-list__prev-page" theme="dark">
                        <img src="/images/arrow-left.svg" alt=""> <span>Предыдущая</span>
                    </secondary-button>
                    <secondary-button class="order-list__page-select" theme="dark">1</secondary-button>
                    <secondary-button class="order-list__page-select" theme="dark">2</secondary-button>
                    <secondary-button class="order-list__page-select" theme="dark">3</secondary-button>
                    <secondary-button class="order-list__page-select" theme="dark">4</secondary-button>
                    <secondary-button class="order-list__page-select" theme="dark">5</secondary-button>
                    <secondary-button class="order-list__next-page" theme="dark">
                        <span>Следующая</span> <img src="/images/arrow-left.svg" alt="">
                    </secondary-button>
                </div>
                <div class="order-list__pages-to-view">
                    <dropdown class="order-list__select-pages-to-view" v-model="paginationValue" :items="paginationValues" type="select" direction="up"></dropdown>
                </div>
            </div>
        </div>
        <main-modal name="order-more" :show="orderMoreShown"
                    @closed="orderMoreClosed" class="order-list__order-more-modal">
            <div class="order-list__order-more-top" v-if="currentOrder">
                <span class="order-list__order-more-status"
                      :class="{ 'order-list__order-more-status_completed': currentOrder.status == 0,
                                 'order-list__order-more-status_doing': currentOrder.status == 1,
                                 'order-list__order-more-status_handling': currentOrder.status == 2,
                                 'order-list__order-more-status_not-paid': currentOrder.status == 3,
                                 'order-list__order-more-status_error': currentOrder.status == 4}"
                      v-html="currentOrder.status == 0 ? 'Выполнен':
                              currentOrder.status == 1 ? 'Выполняется':
                              currentOrder.status == 2 ? 'В обработке':
                              currentOrder.status == 3 ? 'Не оплачено':
                              currentOrder.status == 4 ? 'Ошибка' : ''">
                </span>
                <span class="order-list__order-more-date">{{ currentOrder.date }}</span>
            </div>
            <order-view class="order-list__order-more-info"
                        :order="currentOrder"></order-view>
        </main-modal>
    </div>
</template>

<script>
    import Dropdown from '../common/ui/Dropdown'
    import AccentButton from '../common/ui/AccentButton'
    import SecondaryButton from '../common/ui/SecondaryButton'
    import OrderView from '../lk/OrderView'
    import MainModal from '../common/ui/MainModal'

    export default {
        name: "OrderList",
        components: {
            Dropdown,
            AccentButton,
            SecondaryButton,
            OrderView,
            MainModal
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
                    filterOptions: [
                        {
                            filterType: "date",
                            sortDirection: "DESC",
                            title: "Дате (по убыванию)",
                            hoverColor: "accent",
                            image: "/images/filter.svg"
                        },
                        {
                            filterType: "date",
                            sortDirection: "ASC",
                            title: "Дате (по возрастанию)",
                            hoverColor: "accent",
                            image: "/images/filter.svg"
                        },
                        {
                            filterType: "price",
                            sortDirection: "DESC",
                            title: "Цене (по убыванию)",
                            hoverColor: "accent",
                            image: "/images/filter.svg"
                        },
                        {
                            filterType: "price",
                            sortDirection: "ASC",
                            title: "Цене (по возрастанию)",
                            hoverColor: "accent",
                            image: "/images/filter.svg"
                        },
                        {
                            filterType: "quantity",
                            sortDirection: "DESC",
                            title: "Кол-ву лайков/подписок (по убыванию)",
                            hoverColor: "accent",
                            image: "/images/filter.svg"
                        },
                        {
                            filterType: "quantity",
                            sortDirection: "ASC",
                            title: "Кол-ву лайков/подписок (по возрастанию)",
                            hoverColor: "accent",
                            image: "/images/filter.svg"
                        },
                    ]
                },
                currentOrder: null,
                orderMoreShown: false,
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
            },
            orderMoreOpen(id) {
                if(window.innerWidth <= 540) {
                    this.currentOrder = this.$store.getters.getOrderByID(id);
                    this.orderMoreShown = true;
                }
            },
            orderMoreClosed() {
                this.orderMoreShown = false;
            }
        },
    }
</script>

<style lang="sass">
    @import "../../assets/sass/lk/order-list/order-list"
</style>