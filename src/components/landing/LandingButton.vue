<template>
    <button v-if="tag == 'button'" class="landing-button" @click="$emit('click')"
            :class="[ 'landing-button_'+theme, 'landing-button_'+radius ]">
        <slot></slot>
    </button>
    <a v-else-if="tag == 'a'" target="_blank" :href="to" class="landing-button" @click="$emit('click')"
            :class="[ 'landing-button_'+theme, 'landing-button_'+radius ]">
        <slot></slot>
    </a>
    <router-link v-else-if="tag == 'router-link'" :to="to" class="landing-button" @click="$emit('click')"
            :class="[ 'landing-button_'+theme, 'landing-button_'+radius ]">
        <slot></slot>
    </router-link>
</template>

<script>
    export default {
        name: "LandingButton",
        props: {
            tag: {
                default: 'button',
                type: String
            },
            theme: {
                default: 'default',
                type: String
            },
            radius: {
                default: 'rounded',
                type: String
            },
            to: {
                default: '/',
                type: String
            }
        },
    }
</script>

<style lang="sass">
    @import "../../assets/sass/landing/landing-button"
</style>