<template>
    <div class="lk-doer">
        <lk-header title="Работа" class="lk-doer__header"></lk-header>
        <main class="lk-doer__main">
            <div class="lk-doer__container" :class="{ 'lk-doer__container_fullscreen': !socialPanelOpened }">
                <social-panel :opened="socialPanelOpened" @triggered="socialPanelOpened = $event"></social-panel>
                <div class="lk-doer__tasks">
                    <div class="lk-doer__socials">
                        <span class="title lk-doer__socials-title">Ваши задания</span>
                        <soc-selector class="lk-doer__soc-selector" v-model="currentSoc" :items="socials"></soc-selector>
                    </div>
                    <div class="lk-doer__task-list">
                        <div class="lk-doer__task" v-for="activity in activities">
                            <img :src="socials.find((el) => el.id == activity.parentID).pictureMini" alt="" class="lk-doer__task-picture">
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <binding-social-modal></binding-social-modal>

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

    export default {
        name: "Doer",
        components: {
            BindingSocialModal,
            SecondaryButton,
            MainModal,
            SocialPanel,
            SocSelector,
            LkHeader,
        },
        data() {
            return {
                socialPanelOpened: true,
                socials: socials,
                currentSoc: { id: 0 },
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout').then(()=>{
                    this.$router.push({ name: 'login' })
                })
            },
        },
        computed: {
            activities() {
                let res = [];

                for(let soc of this.socials) {
                    for(let activity of soc.cheatingTypes) {
                        res.push(activity)
                    }
                }

                return res;
            }
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/lk/doer/doer"
</style>