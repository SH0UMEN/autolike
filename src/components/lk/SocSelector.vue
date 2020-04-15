<template>
    <div class="soc-selector">
        <perfect-scrollbar class="soc-selector__container" :options="options">
            <div class="soc-selector__item soc-selector__item_default"
                 :class="{ 'soc-selector__item_selected': tValue.id == 0 }"
                 @click="choosing({ id: 0 })">
                Все
                <div class="soc-selector__item-indicator" :style="{ background: '#0019FF' }"></div>
            </div>
            <div class="soc-selector__item" v-for="item, i in items"
                 :class="{ 'soc-selector__item_selected': tValue.id == i+1 }"
                 @click="choosing(items[i])">
                <img :src="item.picture">
                <div class="soc-selector__item-indicator" :style="{
                    background: (item.gradient) ? `linear-gradient(90deg, ${ item.gradient[0] } 0%, ${ item.gradient[1] } 100%)` : item.color
                }"></div>
            </div>
        </perfect-scrollbar>
    </div>
</template>

<script>
    export default {
        name: "SocSelector",
        data() {
            return {
                options: {
                    useBothWheelAxes: true,
                    suppressScrollY: true
                }
            }
        },
        props: {
            items: {
                type: Array,
                required: true
            },
            value: {
                type: Object,
                required: true
            }
        },
        methods: {
            choosing(item) {
                if(item.id != this.tValue.id) {
                    this.$emit('input', item)
                }
            }
        },
        computed: {
            tValue() {
                return this.value;
            }
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/lk/ui/soc-selector"
</style>