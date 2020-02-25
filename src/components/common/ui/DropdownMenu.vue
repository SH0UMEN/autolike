<template>
    <div class="dropdown-menu" :class="{ 'dropdown-menu_opened': isOpened}" v-click-outside="closeDropdown">
        <div class="dropdown-menu__label" @click="isOpened = !isOpened">
            <span class="dropdown-menu__title">{{ label.title }}</span>
            <img class="dropdown-menu__icon" :src="label.image" alt="">
            <svg class="dropdown-menu__arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="dropdown-menu__items">
            <span class="dropdown-menu__item" v-for="item in items" :class="'dropdown-menu__item_'+item.hoverColor">
                {{ item.title }}
            </span>
        </div>
    </div>
</template>

<script>
    import vClickOutside from 'v-click-outside'

    export default {
        name: "DropdownMenu",
        directives: {
          clickOutside: vClickOutside.directive
        },
        props: {
            items: {
                required: true,
                type: Array
            },
            label: {
                required: true,
                type: Object
            }
        },
        data() {
            return {
                isOpened: false
            }
        },
        methods: {
            closeDropdown (event) {
                this.isOpened = false;
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/dropdown-menu"
</style>