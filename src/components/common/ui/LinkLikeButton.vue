<template>
    <button v-if="tag == 'button'" @click="$emit('click')" class="link-like-button" :class="{ 'link-like-button_underline': underline}">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "LinkLikeButton",
        props: {
            tag: {
                default: "button",
                type: String
            },
            underline: {
                default: false,
                type: Boolean
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/link-like-button"
</style>