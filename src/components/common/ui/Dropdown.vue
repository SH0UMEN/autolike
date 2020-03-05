<template>
    <div class="dropdown" :class="{ 'dropdown_opened': isOpened, 'dropdown_up': direction == 'up' }"
         v-click-outside="closeDropdown">
        <div class="dropdown__label" @click="isOpened = !isOpened">
            <span v-if="type == 'menu'" class="dropdown__title" v-html="label.title"></span>
            <span v-if="type == 'select'" class="dropdown__title" v-html="selectedItem.title"></span>
            <img v-if="type == 'menu' && label.image" class="dropdown__icon" :src="label.image" alt="">
            <img v-if="type == 'select' && selectedItem.image" class="dropdown__icon" :src="selectedItem.image" alt="">

            <svg v-if="iconType == 'arrow'" class="dropdown__arrow" width="10" height="6" viewBox="0 0 10 6" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="black" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>
            <img v-show="iconType == 'burger' && !isOpened" src="/images/landing/burger.svg"
                 class="dropdown__menu-burger">
            <img v-show="iconType == 'burger' && isOpened" src="/images/landing/close.svg"
                 class="dropdown__menu-burger">
        </div>
        <div v-if="type == 'menu'" class="dropdown__items">
            <div class="dropdown__item" v-for="item in items"
                 :class="'dropdown__item_'+item.hoverColor"
                 @click="item.callback ? startCallback(item) : null">
                <router-link v-if="item.type == 'router-link'" :to="item.link">
                    {{ item.title }}
                </router-link>
                <a v-else-if="item.type == 'link'" :href="item.link">{{ item.title }}</a>
                <span v-else>{{ item.title }}</span>
            </div>
            <div class="dropdown__item dropdown__item-contacts" v-if="showContacts">
                <secondary-button tag="a" class="dropdown__contact-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path fill="white" d="M19.8218 14.4726C19.768 14.3826 19.4355 13.66 17.8354 12.1749C16.1602 10.6198 16.3853 10.8723 18.4029 8.18338C19.6317 6.54576 20.123 5.54568 19.9693 5.11815C19.823 4.71062 18.9192 4.81813 18.9192 4.81813L15.914 4.83563C15.914 4.83563 15.6915 4.80563 15.5252 4.90439C15.3639 5.00189 15.2602 5.22691 15.2602 5.22691C15.2602 5.22691 14.7839 6.4945 14.1488 7.57208C12.81 9.846 12.2737 9.96601 12.0549 9.82475C11.5461 9.49598 11.6737 8.50215 11.6737 7.7971C11.6737 5.59319 12.0074 4.67437 11.0224 4.43685C10.6948 4.3581 10.4548 4.30559 9.6185 4.29684C8.54592 4.28559 7.6371 4.30059 7.12331 4.55186C6.78079 4.71937 6.51702 5.09315 6.67828 5.1144C6.87704 5.14065 7.32708 5.23566 7.56584 5.56069C7.87462 5.97947 7.86337 6.92204 7.86337 6.92204C7.86337 6.92204 8.04088 9.51598 7.44959 9.8385C7.04331 10.0598 6.48701 9.60849 5.29317 7.54458C4.68188 6.48825 4.21934 5.31942 4.21934 5.31942C4.21934 5.31942 4.13059 5.1019 3.97183 4.98564C3.77931 4.84438 3.50929 4.79938 3.50929 4.79938L0.651578 4.81688C0.651578 4.81688 0.222796 4.82938 0.0652839 5.01565C-0.0747265 5.18191 0.0540331 5.52443 0.0540331 5.52443C0.0540331 5.52443 2.2917 10.7586 4.82439 13.3975C7.14831 15.8164 9.78601 15.6577 9.78601 15.6577H10.9811C10.9811 15.6577 11.3424 15.6177 11.5261 15.4189C11.6962 15.2364 11.6899 14.8939 11.6899 14.8939C11.6899 14.8939 11.6662 13.29 12.4112 13.0537C13.145 12.8212 14.0876 14.6039 15.0864 15.2902C15.8415 15.8089 16.4153 15.6952 16.4153 15.6952L19.0867 15.6577C19.0867 15.6577 20.4843 15.5714 19.8218 14.4726Z"/>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </secondary-button>
                <secondary-button tag="a" class="dropdown__contact-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="M8.06305 12.2269L7.7653 16.1357C8.19131 16.1357 8.37581 15.9649 8.59707 15.7598L10.5944 13.9783L14.733 16.807C15.492 17.2018 16.0267 16.9939 16.2315 16.1553L18.9481 4.27498L18.9488 4.27428C19.1896 3.22708 18.5431 2.81758 17.8035 3.07448L1.83565 8.78015C0.745877 9.17495 0.762378 9.74195 1.6504 9.99885L5.73275 11.1839L15.2152 5.64627C15.6615 5.37047 16.0672 5.52307 15.7335 5.79887L8.06305 12.2269Z"/>
                    </svg>
                </secondary-button>
                <secondary-button tag="a" class="dropdown__contact-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.0113 11.9298C10.9778 11.8479 10.9509 11.7565 10.9308 11.6556C10.914 11.5517 10.9057 11.454 10.9057 11.3626C10.9057 11.2176 10.9208 11.0853 10.9509 10.9656C10.9811 10.8458 11.0264 10.734 11.0868 10.63C11.1472 10.5228 11.2226 10.422 11.3132 10.3275C11.4038 10.2298 11.5094 10.1337 11.6302 10.0392C11.7577 9.93833 11.8683 9.84537 11.9623 9.7603C12.0595 9.67207 12.1417 9.58542 12.2088 9.50034C12.2759 9.41211 12.3262 9.3223 12.3597 9.23093C12.3933 9.13639 12.4101 9.03241 12.4101 8.91897C12.4101 8.82129 12.3916 8.73149 12.3547 8.64956C12.3178 8.56448 12.2642 8.49201 12.1937 8.43214C12.1266 8.37227 12.0428 8.32501 11.9421 8.29034C11.8449 8.25568 11.7358 8.23835 11.6151 8.23835C11.3535 8.23835 11.0818 8.29034 10.8 8.39433C10.5182 8.49516 10.2516 8.64956 10 8.85753V7.43484C10.2583 7.28989 10.54 7.18118 10.8453 7.10871C11.1505 7.03624 11.4658 7 11.7912 7C12.1031 7 12.3933 7.03309 12.6616 7.09926C12.93 7.16228 13.1631 7.26311 13.361 7.40176C13.5623 7.5404 13.7182 7.71843 13.8289 7.93585C13.943 8.15012 14 8.40851 14 8.71101C14 8.90322 13.9765 9.0781 13.9296 9.23565C13.8826 9.39005 13.8138 9.53657 13.7233 9.67522C13.6327 9.81386 13.5203 9.94778 13.3862 10.077C13.252 10.203 13.0977 10.3338 12.9233 10.4693C12.8059 10.5607 12.7019 10.6457 12.6113 10.7245C12.5241 10.8033 12.4503 10.8821 12.3899 10.9608C12.3329 11.0365 12.2893 11.1184 12.2591 11.2066C12.2289 11.2917 12.2138 11.3894 12.2138 11.4997C12.2138 11.5753 12.2239 11.6525 12.244 11.7313C12.2675 11.81 12.2977 11.8762 12.3346 11.9298H11.0113ZM11.7459 14C11.4776 14 11.2545 13.9244 11.0767 13.7731C10.899 13.6156 10.8101 13.4297 10.8101 13.2154C10.8101 12.9948 10.899 12.8105 11.0767 12.6624C11.2545 12.5143 11.4776 12.4402 11.7459 12.4402C12.0109 12.4402 12.2306 12.5143 12.405 12.6624C12.5795 12.8073 12.6667 12.9917 12.6667 13.2154C12.6667 13.4423 12.5811 13.6298 12.4101 13.7779C12.2356 13.926 12.0143 14 11.7459 14Z" fill="white"/>
                    </svg>
                </secondary-button>
            </div>
        </div>
        <div v-if="type == 'select'" class="dropdown__items">
            <span class="dropdown__item" v-for="item, i in items"
                  v-if="item != selectedItem"
                  @click="selectItem(i)"
                  v-html="item.title"
                  :class="'dropdown__item_'+item.hoverColor">
            </span>
        </div>
    </div>
</template>

<script>
    import vClickOutside from 'v-click-outside'
    import SecondaryButton from './SecondaryButton'

    export default {
        name: "DropdownMenu",
        directives: {
            clickOutside: vClickOutside.directive
        },
        components: {
            SecondaryButton
        },
        props: {
            showContacts: {
                type: Boolean,
                default: false
            },
            iconType: {
                type: String,
                default: "arrow"
            },
            items: {
                required: true,
                type: Array
            },
            label: {
                type: Object
            },
            type: {
                type: String,
                default: "menu"
            },
            direction: {
                type: String,
                default: 'down'
            }
        },
        data() {
            return {
                isOpened: false,
                selectedItem: this.items[0]
            }
        },
        methods: {
            closeDropdown(event) {
                this.isOpened = false;
            },
            selectItem(item) {
                this.selectedItem = this.items[item];
                this.$emit("input", this.selectedItem);
                this.closeDropdown();
            },
            startCallback(item) {
                this.isOpened = false;
                setTimeout(item.callback, 1)
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/dropdown"
</style>