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
                        <span class="social-panel__social-title" v-if="soc.status == 1">{{ soc.data}}</span>
                        <span class="social-panel__social-title social-panel__social-title_error" v-else-if="soc.status == 3">{{ soc.data}}</span>
                        <span class="social-panel__social-title social-panel__social-title_warning" v-else-if="soc.status == 4">{{ soc.data}}</span>
                        <span class="social-panel__social-title" v-else>{{ soc.title }}</span>

                        <div class="social-panel__social-status social-panel__social-status_binded" v-if="soc.status == 1">
                            <img src="/images/check.svg" alt="" class="social-panel__social-status-icon">
                        </div>
                        <div class="social-panel__social-status" v-else-if="soc.status == 2">
                            <img src="/images/clock-gray.svg" alt="" class="social-panel__social-status-icon">
                        </div>
                        <div class="social-panel__social-status" v-else-if="soc.status == 3">
                            <img src="/images/alert-circle.svg" alt="" class="social-panel__social-status-icon">
                        </div>
                        <div class="social-panel__social-status" v-else-if="soc.status == 4">
                            <img src="/images/alert-circle-orange.svg" alt="" class="social-panel__social-status-icon">
                        </div>
                    </div>
                    <div class="social-panel__social-right">
                        <button class="inline-button" v-if="soc.status == 1" @click="$store.commit('openBindingSocialModal', soc.id)">Отвязать</button>
                        <button class="inline-button" v-else-if="soc.status == 2" @click="$store.commit('openBindingSocialModal', soc.id)">Остановить проверку</button>
                        <button class="inline-button" v-else-if="soc.status == 3" @click="$store.commit('openBindingSocialModal', soc.id)">Привязать еще раз</button>
                        <button class="inline-button" v-else-if="soc.status == 4" @click="$store.commit('openBindingSocialModal', soc.id)">Продолжить привязку</button>
                        <button class="inline-button" v-else @click="$store.commit('openBindingSocialModal', soc.id)">Привязать</button>
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
                sourceSocials: socials
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
            },
            bindedSocials() {
                return this.$store.getters.getSocials;
            },
            socials() {
                let res = [];

                for(let soc in this.sourceSocials) {
                    let soc = this.sourceSocials[soc];
                    let binded = Object.assign({}, this.bindedSocials.find((el)=>{
                        return el.type == soc.id;
                    }));

                    if(binded) {
                        res.push(Object.assign(binded, soc));
                    } else {
                        res.push(soc)
                    }
                }

                return res;
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/lk/doer/social-panel"
</style>