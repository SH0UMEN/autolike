<template>
    <main-modal :show="$store.getters.taskModalShown"
                @closed="$store.commit('closeTaskModal')"
                name="task-modal">
        <div class="modal__container">
            <span class="modal__title">Ваше задание</span>
            <img :src="soc.pictureGray" class="task-modal__picture">
            <span class="task-modal__reward">Вы получите {{ task.price }} {{ inflect(task.price, ["Балл", "Балла", "Баллов"]) }}</span>
            <p class="modal__paragraph">Подождите 2-3 секунды после вступления в группу, а затем закройте окно.</p>
        </div>
        <accent-button tag="a" target="_blank" :link="task.url" class="modal__main-button task-modal__main-button">
            {{ task.action }} <img :src="soc.pictureMini">
        </accent-button>
    </main-modal>
</template>

<script>
    import socials from "../../../../helpers/socials"
    import inflector from "../../../../helpers/inflector"
    import MainModal from "../../../common/ui/MainModal"
    import AccentButton from "../../../common/ui/AccentButton"

    export default {
        name: "TaskModal",
        components: {
            AccentButton,
            MainModal
        },
        props: {
            task: {
                type: Object,
                default: ()=>{}
            }
        },
        methods: {
            inflect(n, forms) {
                return inflector(n, forms)
            }
        },
        data() {
            return {

            }
        },
        computed: {
            soc() {
                let res = socials.find((el)=>{
                    return el.id == this.task.social_type;
                });

                return res ? res : {};
            },
        }
    }
</script>

<style lang="sass">
    @import "../../../../assets/sass/lk/doer/task-modal"
</style>