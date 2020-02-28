<template>
    <div class="dropdown" :class="{ 'dropdown_opened': isOpened, 'dropdown_up': direction == 'up' }" v-click-outside="closeDropdown">
        <div class="dropdown__label" @click="isOpened = !isOpened">
            <span v-if="type == 'menu'" class="dropdown__title">{{ label.title }}</span>
            <span v-if="type == 'select'" class="dropdown__title">{{ selectedItem.title}}</span>
            <img v-if="type == 'menu' && label.image" class="dropdown__icon" :src="label.image" alt="">
            <img v-if="type == 'select' && selectedItem.image" class="dropdown__icon" :src="selectedItem.image" alt="">
            <svg class="dropdown__arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div v-if="type == 'menu'" class="dropdown__items">
            <span class="dropdown__item" v-for="item in items" :class="'dropdown__item_'+item.hoverColor">
                {{ item.title }}
            </span>
        </div>
        <div v-if="type == 'select'" class="dropdown__items">
            <span class="dropdown__item" v-for="item, i in items" v-if="item != selectedItem" @click="selectItem(i)" :class="'dropdown__item_'+item.hoverColor">
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
            closeDropdown (event) {
                this.isOpened = false;
            },
            selectItem(item) {
                this.selectedItem = this.items[item];
                this.$emit("input", this.selectedItem);
                this.closeDropdown();
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/dropdown"
</style>