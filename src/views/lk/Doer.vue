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
                        <soc-selector class="lk-doer__soc-selector" v-model="currentSoc" @input="fetchTasks" :items="socials"></soc-selector>
                    </div>
                    <div class="lk-doer__task-list">
                        <div class="lk-doer__task-placeholder" v-if="$store.getters.getSocials.length == 0">
                            <img class="lk-doer__task-placeholder-picture" src="/images/alert-circle-gray.svg" alt="">
                            <p class="lk-doer__task-placeholder-text">Пожалуйста, привяжите свои социальные сети, чтобы получать задания. <br>
                                Чем больше социальных сетей - тем больше заданий вы получите.</p>
                        </div>
                        <div class="lk-doer__task-placeholder" v-else-if="activities.length == 0">
                            <p class="lk-doer__task-placeholder-text">Доступных заданий нет</p>
                        </div>
                        <div class="lk-doer__task" v-for="activity, i in activities" @click="openTaskModal(i)">
                            <div class="lk-doer__task-left">
                                <img :src="socials.find((el) => el.id == activity.parentID).pictureMini" alt="" class="lk-doer__task-picture">
                                <span class="lk-doer__task-title">
                                    {{ activity.action }}
                                </span>
                            </div>
                            <div class="lk-doer__task-right">
                                <span class="lk-doer__task-reward">{{ activity.price }} {{ inflect(activity.price, ["балл", "балла", "баллов"]) }}</span>
                                <secondary-button @click.stop="cancelTask(activity.id)" class="lk-doer__task-reject" theme="dark">
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
        <pw-change-info-modal></pw-change-info-modal>
        <task-modal :task="activities[currentTask] || {}"></task-modal>
        <support-modal></support-modal>

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
    import TaskModal from "../../components/lk/Doer/modals/TaskModal"
    import PwChangeInfoModal from "../../components/lk/modals/PwChangeInfoModal"
    import SupportModal from "../../components/lk/modals/SupportModal"
    import inflector from "../../helpers/inflector"
    import axios from "axios"

    export default {
        name: "Doer",
        components: {
            BindingSocialModal,
            SecondaryButton,
            MainModal,
            SocialPanel,
            SupportModal,
            SocSelector,
            LkHeader,
            BalanceModal,
            PwChangeInfoModal,
            TaskModal
        },
        data() {
            return {
                socialPanelOpened: true,
                socials: socials,
                currentSoc: { id: 0 },
                offsetLeft: 0,
                currentWidth: 0,
                currentTask: 0,
            }
        },
        methods: {
            cancelTask(id) {
                this.$store.dispatch("cancelTask", id).then((res)=>{
                    this.fetchTasks(this.currentSoc);
                });
            },
            fetchTasks(soc) {
                this.currentTask = 0;
                this.$store.dispatch("fetchTasks", soc.id == 0 ? {} : { type: soc.id });
            },
            logout() {
                this.$store.dispatch('logout').then(()=>{
                    this.$router.push({ name: 'login' })
                })
            },
            setLeftOffset() {
                let offset = document.querySelector('.lk-header__container').offsetLeft;
                this.offsetLeft = offset+"px";
            },
            inflect(n, forms) {
                return inflector(n, forms);
            },
            openTaskModal(i) {
                this.currentTask = i;
                this.$store.commit("openTaskModal");
            }
        },
        mounted() {
            this.setLeftOffset();
            this.currentWidth = window.innerWidth;

            this.$store.dispatch("getBindedSocials");

            window.addEventListener("resize", ()=>{
                this.setLeftOffset();
                this.currentWidth = window.innerWidth;
            });
        },
        computed: {
            blockScroll() {
                return this.currentWidth <= 767 && this.socialPanelOpened
            },
            bindedSocials() {
                return this.$store.getters.getSocials;
            },
            tasks() {
                return this.$store.getters.getTasks;
            },
            activities() {
                let res = [];

                for(let task of this.tasks) {
                    let soc = this.socials.find((el)=>{
                        return el.id == task.social_type;
                    })

                    let order = soc.cheatingTypes.find((el)=>{
                        return el.id == task.order_type;
                    })

                    let mergedTask = {};
                    Object.assign(mergedTask, order);
                    Object.assign(mergedTask, task);
                    res.push(mergedTask)
                }

                return res;
            }
        },
    }
</script>

<style lang="sass">
    @import "../../assets/sass/lk/doer/doer"
</style>