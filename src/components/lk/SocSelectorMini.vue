<template>
    <perfect-scrollbar class="soc-selector-mini">
        <div class="soc-selector-mini__item" v-for="item, i in items"
             :title="(bot && item.noBot) ? 'Facebook, YouTube и TikTok достпуны только при накрутке реальными людьми.' : ''"
             @click="changeValue(i)" :class="{ 'soc-selector-mini__item_success': tValue.id == (i+1),
                                               'soc-selector-mini__item_disabled': bot && item.noBot }">

            <img class="soc-selector-mini__item-picture" :src="item.picture">
            <div class="soc-selector-mini__item-success">
                <img src="/images/check.svg" alt="">
            </div>
        </div>
    </perfect-scrollbar>
</template>

<script>
    export default {
        name: "SocSelectorMini",
        props: {
            items: {
                type: Array,
                required: true
            },
            value: {
                type: Object,
                required: true
            },
            bot: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            tValue() {
                return this.value;
            }
        },
        methods: {
            changeValue(i) {
                if(!this.items[i].noBot || !this.bot) {
                    this.$emit('input', this.items[i])
                }
            }
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/lk/ui/soc-selector-mini"
</style>