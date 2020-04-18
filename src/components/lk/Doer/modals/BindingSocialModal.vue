<template>
    <main-modal class="binding-modal"
                :show="$store.state.LK.bindingModalShown"
                @closed="$store.commit('closeBindingSocialModal')"
                name="binding-modal">
        <stepper title="Привязать аккаунт" :steps="steps">
            <binding-1></binding-1>
            <binding-2></binding-2>
            <binding-3></binding-3>
        </stepper>
    </main-modal>
</template>

<script>
    import MainModal from "../../../common/ui/MainModal"
    import Stepper from "../../../common/ui/Stepper"
    import Binding1 from "../steppers/Binding1"
    import Binding2 from "../steppers/Binding2"
    import Binding3 from "../steppers/Binding3"

    export default {
        name: "OrderSuccessModal",
        components: {
            MainModal,
            Stepper,
            Binding1,
            Binding2,
            Binding3
        },
        data() {
            return {
                steps: [
                    {
                        title: '1 шаг'
                    },
                    {
                        title: '2 шаг'
                    },
                    {
                        title: 'Завершение'
                    }
                ]
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../../assets/sass/lk/doer/binding-modal"
</style>