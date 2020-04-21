<template>
    <div class="order-list">
        <div class="order-list__container container">
            <div class="order-list__soc-selector-container">
                <accent-button class="order-list__order-button"
                               @click="$store.commit('openOrderModal')">Оформить заказ</accent-button>

                <span class="order-list__soc-selector-title">
                    Ваши заказы
                </span>

                <soc-selector @input="changeSoc" class="order-list__soc-selector" :value="selectedSoc" :items="socs"></soc-selector>
            </div>

            <div class="order-list__filter-panel">
                <dropdown class="order-list__select-filter" type="select"
                          @input="changeFilter"
                          :items="filter.filterOptions">
                </dropdown>

                <dropdown class="order-list__select-status" type="select"
                          @input="changeStatusFilter"
                          :items="selectOptions.items">
                </dropdown>

                <dropdown class="order-list__select-doer" type="select"
                          @input="changeDoerFilter"
                          :items="doerTypes">
                </dropdown>

                <dropdown class="order-list__select-type" type="select"
                          @input="changeOrderFilter"
                          @item-changed="changeOrderFilterWithoutReload"
                          :disabled="orderTypeDisabled"
                          :disabled-message="'Чтобы воспользоваться этой функцией, вначале выберите социальную сеть из списка выше'"
                          :items="orderTypes">
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
                          :class="{ 'order-list__filter-item_selected': filter.filterType == 'count' }" @click="changeFilterType('count')">
                        <span>Объему накрутки</span>
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

            <accent-button class="order-list__more" v-if="currentPaginationIndex < paginationLimits.length - 1 &&
                                                    orders.length == filter.paginationLimit.value"
                           theme="dark" @click="raiseShownOrders">Показать ещё</accent-button>

            <div class="order-list__pagination">
                <paginate
                    v-model="currentPage"
                    :page-count="pageCount"
                    :click-handler="changePage"
                    :prev-text="`<img src='/images/arrow-left.svg' alt=''> <span>Предыдущая</span>`"
                    :prev-class="'pagination-button order-list__prev-page pagination-button_dark'"
                    :next-class="'pagination-button order-list__next-page pagination-button_dark'"
                    :next-text="`<span>Следующая</span> <img src='/images/arrow-left.svg' alt=''>`"
                    :page-class="'pagination-button order-list__page-select pagination-button_dark'"
                    :container-class="'order-list__pages'"
                    :active-class="'order-list__page-select_current'">
                </paginate>
                <div class="order-list__pages-to-view">
                    <dropdown class="order-list__select-pages-to-view" v-model="filter.paginationLimit"
                              :items="paginationLimits" type="select" @input="changePaginationIndex" direction="up"></dropdown>
                </div>
            </div>
        </div>
        <main-modal name="order-more" :show="orderMoreShown"
                    @closed="orderMoreClosed" class="order-list__order-more-modal">
            <div class="order-list__order-more-top" v-if="currentOrder">
                <span class="order-list__order-more-status"
                      :class="{ 'order-list__order-more-status_completed': currentOrder.status == 3,
                                 'order-list__order-more-status_doing': currentOrder.status == 2,
                                 'order-list__order-more-status_handling': currentOrder.status == 1,
                                 'order-list__order-more-status_not-paid': currentOrder.status == 5,
                                 'order-list__order-more-status_error': currentOrder.status == 4}"
                      v-html="currentOrder.status == 3 ? 'Выполнен':
                              currentOrder.status == 2 ? 'Выполняется':
                              currentOrder.status == 1 ? 'В обработке':
                              currentOrder.status == 5 ? 'Не оплачено':
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
    import SocSelector from "./SocSelector"
    import Dropdown from '../common/ui/Dropdown'
    import AccentButton from '../common/ui/AccentButton'
    import SecondaryButton from '../common/ui/SecondaryButton'
    import OrderView from '../lk/OrderView'
    import MainModal from '../common/ui/MainModal'
    import socials from '../../helpers/socials'

    export default {
        name: "OrderList",
        components: {
            SocSelector,
            Dropdown,
            AccentButton,
            SecondaryButton,
            OrderView,
            MainModal
        },
        data() {
            return {
                currentPage: 1,
                socs: socials,
                selectedSoc: { id: 0 },
                currentPaginationIndex: 0,
                paginationLimits: [
                    {
                        title: "Показывать по 12",
                        value: 12,
                        hoverColor: "accent",
                        index: 0
                    },
                    {
                        title: "Показывать по 24",
                        value: 24,
                        hoverColor: "accent",
                        index: 1
                    },
                    {
                        title: "Показывать по 48",
                        value: 48,
                        hoverColor: "accent",
                        index: 2
                    }
                ],

                // Вид накрутки
                doerTypes: [
                    {
                        title: "Вид накрутки",
                        type: 'all',
                        hoverColor: "accent"
                    },
                    {
                        title: "Реальные люди",
                        type: 0,
                        hoverColor: "accent"
                    },
                    {
                        title: "Боты",
                        type: 1,
                        hoverColor: "accent"
                    }
                ],
                doerType: 'all',

                // Вид накрутки
                orderTypeDefault: [{
                    title: "Вид активности",
                    id: 'all',
                    hoverColor: "accent"
                }],
                orderTypes: [
                    {
                        title: "Вид активности",
                        id: 'all',
                        hoverColor: "accent"
                    },
                ],
                orderType: null,


                selectOptions: {
                    items: [
                        {
                            status: 0,
                            name: "all",
                            title: "Все статусы",
                            hoverColor: "accent"
                        },
                        {
                            status: 3,
                            name: "Выполнено",
                            title: "Выполнен",
                            hoverColor: "accent"
                        },
                        {
                            status: 2,
                            name: "В работе",
                            title: "Выполняется",
                            hoverColor: "accent"
                        },
                        {
                            status: 1,
                            name: "Новый",
                            title: "В обработке",
                            hoverColor: "accent"
                        },
                        {
                            status: 5,
                            name: "Пока пусто",
                            title: "Не оплачено",
                            hoverColor: "accent"
                        },
                        {
                            status: 4,
                            name: "Ошибка",
                            title: "Ошибка",
                            hoverColor: "accent"
                        }
                    ]
                },

                filter: {
                    status: null,
                    filterType: "date",
                    sortDirection: "DESC",
                    paginationLimit: {},
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
                            filterType: "count",
                            sortDirection: "DESC",
                            title: "Объему накрутки (по убыванию)",
                            hoverColor: "accent",
                            image: "/images/filter.svg"
                        },
                        {
                            filterType: "count",
                            sortDirection: "ASC",
                            title: "Объему накрутки (по возрастанию)",
                            hoverColor: "accent",
                            image: "/images/filter.svg"
                        },
                    ]
                },
                currentOrder: null,
                orderMoreShown: false,
            }
        },
        computed: {
            orders() {
                return this.$store.state.LK.orders;
            },
            orderTypeDisabled() {
                return this.selectedSoc.id == 0;
            },
            pageCount() {
                return this.$store.state.LK.pageCount;
            }
        },
        watch: {
            filter: {
                handler(val) {
                    this.currentPage = 1
                    this.updateOrders()
                },
                deep: true
            }
        },
        mounted() {
            this.filter.paginationLimit = this.paginationLimits[0];
            this.filter.status = this.selectOptions.items[0];
            this.orderType = this.orderTypes[0];
        },
        methods: {
            changePaginationIndex(val) {
                this.currentPaginationIndex = val.index
            },
            raiseShownOrders() {
                if(this.currentPaginationIndex < this.paginationLimits.length - 1) {
                    this.currentPaginationIndex++;
                    this.filter.paginationLimit = this.paginationLimits[this.currentPaginationIndex];
                }
            },
            changePage(number) {
                if (number) {
                    this.currentPage = number
                    this.updateOrders()
                } else {
                    this.currentPage = this.currentPage + 1
                    this.updateOrders(true)
                }
            },
            changeSoc(soc) {
                this.orderTypes = this.orderTypeDefault.concat(soc.cheatingTypes ? soc.cheatingTypes : []);

                for(let type of this.orderTypes) {
                    type.hoverColor = "accent"
                }

                this.selectedSoc = soc;

                this.$nextTick(()=>{
                    this.updateOrders(false);
                })
            },
            updateOrders(next = false) {
                let params = {};
                params.page = this.currentPage;
                params.limit = this.filter.paginationLimit.value;
                params.filter_by_order_type = this.orderType.id;
                params.sort_by = this.filter.filterType;
                params.sort_type = this.filter.sortDirection;
                params.bot = this.doerType.type;

                if(this.filter.status.status != 0) {
                    params.filter_by_status = this.filter.status.status;
                }

                if(this.selectedSoc.id != 0) {
                    params.filter_by_social_type = this.selectedSoc.id;
                }

                let settings = {};
                settings.params = params;
                settings.next = next;

                this.$store.dispatch('getOwnOrders', settings)
            },
            changeStatusFilter(status) {
                this.filter.status = status;
            },
            changeDoerFilter(doer) {
                this.doerType = doer
                this.updateOrders(false);
            },
            changeOrderFilter(type) {
                this.orderType = type;
                this.updateOrders(false);
            },
            changeOrderFilterWithoutReload(type) {
                this.orderType = type;
            },
            changeFilter(filter) {
                this.filter.sortDirection = filter.sortDirection;
                this.filter.filterType = filter.filterType;
                this.updateOrders(false);
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

                this.updateOrders(false);
            },
            orderMoreOpen(id) {
                if(window.innerWidth <= 767) {
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