<template>
    <label class="text-input">
        <span class="text-input__label">
            <slot></slot>
        </span>
        <input type="text">
    </label>
</template>

<script>
    export default {
        name: "TextInput",
        props: {
            type: {
                type: String,
                default: 'text',
            },
            placeholder: {
                type: String
            },
            value: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                tValue: this.value,
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/text-input"
</style>