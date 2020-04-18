<template>
    <div class="lk-doer" v-scroll-lock="blockScroll">
        <lk-header title="Работа" class="lk-doer__header"></lk-header>
        <main class="lk-doer__main">
            <div class="lk-doer__container" :class="{ 'lk-doer__container_fullscreen': !socialPanelOpened }">
                <social-panel ref="social-panel"
                              :opened="socialPanelOpened"
                              :style="{ left: offsetLeft }"
                              @triggered="socialPanelOpened = $event"></social-panel>
                <div class="lk-doer__tasks">
                    <div class="lk-doer__socials">
                        <span class="title lk-doer__socials-title">Ваши задания</span>
                        <soc-selector class="lk-doer__soc-selector" v-model="currentSoc" :items="socials"></soc-selector>
                    </div>
                    <div class="lk-doer__task-list">
                        <div class="lk-doer__task" v-for="activity in activities">
                            <div class="lk-doer__task-left">
                                <img :src="socials.find((el) => el.id == activity.parentID).pictureMini" alt="" class="lk-doer__task-picture">
                                <span class="lk-doer__task-title">
                                    {{ activity.action }}
                                </span>
                            </div>
                            <div class="lk-doer__task-right">
                                <span class="lk-doer__task-reward">12 баллов</span>
                                <secondary-button class="lk-doer__task-reject" theme="dark">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 12L20 20" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M20 12L12 20" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </secondary-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <binding-social-modal></binding-social-modal>
        <balance-modal></balance-modal>

        <main-modal name="logout-modal" :show="$store.getters.isLogoutDialogOpened"
                    @closed="$store.commit('closeLogoutDialog')"
                    class="logout-modal">
                <span class="modal__title">
                    Вы уверены что хотите выйти из аккаунта?
                </span>
            <div class="logout-modal__dialog">
                <secondary-button class="logout-modal__dialog-button" @click="logout" theme="black">Выйти</secondary-button>
                <secondary-button class="logout-modal__dialog-button" @click="$store.commit('closeLogoutDialog')" theme="black">Нет</secondary-button>
            </div>
        </main-modal>
    </div>
</template>

<script>
    import SocSelector from "../../components/lk/SocSelector"
    import MainModal from "../../components/common/ui/MainModal"
    import LkHeader from "../../components/lk/Doer/Header"
    import SecondaryButton from "../../components/common/ui/SecondaryButton"
    import SocialPanel from "../../components/lk/Doer/SocialPanel"
    import socials from "../../helpers/socials"
    import BindingSocialModal from "../../components/lk/Doer/modals/BindingSocialModal"
    import BalanceModal from "../../components/lk/Doer/modals/BalanceModal"

    export default {
        name: "Doer",
        components: {
            BindingSocialModal,
            SecondaryButton,
            MainModal,
            SocialPanel,
            SocSelector,
            LkHeader,
            BalanceModal
        },
        data() {
            return {
                socialPanelOpened: true,
                socials: socials,
                currentSoc: { id: 0 },
                offsetLeft: 0,
                currentWidth: 0
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout').then(()=>{
                    this.$router.push({ name: 'login' })
                })
            },
            setLeftOffset() {
                let offset = document.querySelector('.lk-header__container').offsetLeft;
                this.offsetLeft = offset+"px";
            }
        },
        mounted() {
            this.setLeftOffset();
            this.currentWidth = window.innerWidth;

            window.addEventListener("resize", ()=>{
                this.setLeftOffset();
                this.currentWidth = window.innerWidth;
            });
        },
        computed: {
            blockScroll() {
                return this.currentWidth <= 767 && this.socialPanelOpened
            },
            activities() {
                let res = [];

                for(let soc of this.socials) {
                    for(let activity of soc.cheatingTypes) {
                        res.push(activity)
                    }
                }

                return res;
            }
        },
    }
</script>

<style lang="sass">
    @import "../../assets/sass/lk/doer/doer"
</style>