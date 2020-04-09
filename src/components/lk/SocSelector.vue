<template>
    <div class="soc-selector">
        <perfect-scrollbar class="soc-selector__container" :options="options">
            <div class="soc-selector__item soc-selector__item_default"
                 :class="{ 'soc-selector__item_selected': tValue == 0 }"
                 @click="$emit('input', 0)">
                Все
                <div class="soc-selector__item-indicator" :style="{ background: '#0019FF' }"></div>
            </div>
            <div class="soc-selector__item" v-for="item, i in items"
                 :class="{ 'soc-selector__item_selected': i+1 == tValue }"
                 @click="$emit('input', i+1)">
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
                type: Number,
                required: true
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