<template>
    <button v-if="tag == 'button'"
            @click="$emit('click')"
            class="accent-button"
            :class="'accent-button_'+theme"
            :type="type == 'submit' ? type : 'button'"
            :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "AccentButton",
        props: {
            tag: {
                default: "button",
                type: String
            },
            type: {
                default: '',
                type: String
            },
            theme: {
                default: "accent",
                type: String
            },
            disabled: {
                default: false,
                type: Boolean
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/accent-button"
</style>