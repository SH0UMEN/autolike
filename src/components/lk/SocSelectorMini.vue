<template>
    <div class="soc-selector-mini">
        <div class="soc-selector-mini__item" v-for="item, i in items">
            <img :src="item.picture">

            <div v-if="" class="soc-selector-mini__item-success">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SocSelectorMini",
        props: {
            items: {
                type: Array,
                default: ()=>[]
            },
            value: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                tValue: this.value
            }
        },
        computed: {
            tValue() {
                return this.value;
            }
        }
    }
</script>

<style scoped>

</style>