<template>
    <div class="social-panel" :class="{ 'social-panel_closed': !opened }">
        <perfect-scrollbar class="social-panel__inner">
            <div class="social-panel__title-wrapper">
                <span class="title social-panel__title">Ваши соц. сети</span>
                <button type="button" class="social-panel__trigger" @click="tOpened = !tOpened">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33366 8H12.667" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.00033 12.6666L12.667 7.99992L8.00033 3.33325" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div class="social-panel__list">
                <div class="social-panel__social" v-for="soc in socials">
                    <div class="social-panel__social-left">
                        <img class="social-panel__social-picture" :src="soc.picture" alt="">
                        <span class="social-panel__social-title">{{ soc.title }}</span>
                    </div>
                    <div class="social-panel__social-right">
                        <button class="inline-button" @click="$store.commit('openBindingSocialModal', soc.id)">Привязать</button>
                    </div>
                </div>
            </div>
        </perfect-scrollbar>
    </div>
</template>

<script>
    import socials from "../../../helpers/socials"

    export default {
        name: "SocialPanel",
        props: {
            opened: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                socials: socials
            }
        },
        computed: {
            tOpened: {
                get() {
                    return this.opened
                },
                set(val) {
                    this.$emit('triggered', val)
                }
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/lk/doer/social-panel"
</style>