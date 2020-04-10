<template>
    <div class="order-slide order-slide-one">
        <div class="stepper__container">
            <radio-switcher class="order-slide-one__radio" :options="doerTypes" v-model="doerType"></radio-switcher>
        </div>
        <accent-button data-next="1" class="stepper__main-button">Следующий шаг</accent-button>
    </div>
</template>

<script>
    import RadioSwitcher from "../../common/ui/RadioSwitcher"
    import AccentButton from "../../common/ui/AccentButton"

    export default {
        name: "Order1",
        components: {
            RadioSwitcher,
            AccentButton
        },
        data() {
            return {
                doerTypes: [
                    {
                        title: "Реальные люди",
                        type: 0
                    },
                    {
                        title: "Боты",
                        type: 1
                    }
                ],
                doerType: {}
            }
        },
        created() {
            this.doerType = this.doerTypes[0]
        }
    }
</script>

<style lang="sass">

</style>