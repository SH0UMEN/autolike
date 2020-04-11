<template>
    <div class="order-slide order-slide-three">
        <div class="stepper__container">
            <img :src="currentSoc.picture" class="order-slide-three__soc-image">
            <div class="order-slide-three__order-info">
                {{  }}
            </div>
        </div>
        <accent-button @click="order" :disabled="false" class="stepper__main-button">Оформить заказ</accent-button>
    </div>
</template>

<script>
    import socials from "../../../helpers/socials"
    import AccentButton from "../../common/ui/AccentButton"
    import inflector from "../../../helpers/inflector"

    export default {
        name: "Order3",
        components: {
            AccentButton
        },
        data() {
            return {
                socials: socials,
                quantity: this.$store.state.LK.newOrder.quantity
            }
        },
        methods: {
            order() {
                this.$store.commit("closeOrderModal")
            },
            inflect() {

            }
        },
        computed: {
            currentSoc() {
                if(this.$store.state.LK.newOrder.socID) {
                    return this.socials.find((el) => {
                        return el.id == this.$store.state.LK.newOrder.socID
                    });
                }
                return "";
            },
            currentCheatingType() {
                return this.currentSoc.cheatingTypes.find((el) => {
                    return el.id == this.$store.state.LK.newOrder.cheatingType
                })
            }
        }
    }
</script>

<style>

</style>