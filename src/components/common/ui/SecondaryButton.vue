<template>
    <button v-if="tag == 'button'" @click="$emit('click')" class="secondary-button"
            :class="'secondary-button_'+theme">
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
            theme: {
                default: 'accent',
                type: String
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../../../assets/sass/common/ui/secondary-button"
</style>