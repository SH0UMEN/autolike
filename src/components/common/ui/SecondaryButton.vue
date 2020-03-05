<template>
    <button v-if="tag == 'button'" @click="$emit('click')" class="secondary-button"
            :class="'secondary-button_'+theme">
        <slot></slot>
    </button>
    <a :class="'secondary-button_'+theme" v-else-if="tag == 'a'"
       @click="$emit('click')"
       :href="to" class="secondary-button">
        <slot></slot>
    </a>
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
            },
            to: {
                default: "#",
                type: String
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../../../assets/sass/common/ui/secondary-button"
</style>