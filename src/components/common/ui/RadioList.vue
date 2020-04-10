<template>
    <div class="radio-list">
        <label v-for="item in items" class="radio-list__item">
            <input type="radio" class="radio-list__input" :value="item" v-model="tValue">
            <span class="radio-list__checkbox">
                <img src="/images/check.svg" alt="">
            </span>
            <span class="radio-list__item-title">{{ item.title }}</span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "RadioList",
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
        computed: {
            tValue: {
                get: function() { return this.value },
                set: function(newValue) {
                    this.$emit("input", newValue);
                }
            },
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/radio-list"
</style>