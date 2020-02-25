<template>
    <button v-if="tag == 'button'" @click="$emit('click')" class="accent-button">
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
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/accent-button"
</style>