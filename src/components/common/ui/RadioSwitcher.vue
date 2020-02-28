<template>
    <div class="radio-switcher">
        <label class="radio-switcher__option" v-for="option in options">
            <input class="radio-switcher__input" type="radio" :value="option" v-model="tValue">
            <span class="radio-switcher__title">{{ option.title }}</span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "RadioSwitcher",
        props: {
            options: {
                type: Array,
                required: true
            },
            value: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                tValue: null
            }
        },
        mounted() {
            this.tValue = this.value
        },
        watch: {
            tValue() {
                this.$emit('input', this.tValue);
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/radio-switcher"
</style>