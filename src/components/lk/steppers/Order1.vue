<template>
    <div class="order-slide order-slide-one">
        <div class="stepper__container">
            <radio-switcher class="order-slide-one__radio"
                            :options="doerTypes" v-model="doerType"
                            @input="checkBot"></radio-switcher>

            <div class="order-slide-one__soc-selector-container">
                <div class="order-slide-one__soc-selector-title-container">
                    <span class="order-slide-one__soc-selector-title">Выберите социальную сеть</span>
                </div>

                <soc-selector-mini :bot="isBot" @input="socChanged"
                                   class="order-slide-one__soc-selector"
                                   :items="socs" v-model="currentSoc"></soc-selector-mini>
            </div>

            <radio-list class="order-slide-one__radio-list" :items="cheatingTypes" v-model="selectedCheatingType"></radio-list>
        </div>

        <accent-button @click="submitData" data-next="1" class="stepper__main-button">Следующий шаг</accent-button>
    </div>
</template>

<script>
    import RadioSwitcher from "../../common/ui/RadioSwitcher"
    import AccentButton from "../../common/ui/AccentButton"
    import SocSelectorMini from "../../lk/SocSelectorMini"
    import RadioList from "../../common/ui/RadioList"
    import socials from "../../../helpers/socials"

    export default {
        name: "Order1",
        components: {
            SocSelectorMini,
            RadioSwitcher,
            AccentButton,
            RadioList
        },
        data() {
            return {
                // Вид накрутки
                doerTypes: [
                    {
                        title: "Реальные люди",
                        id: false
                    },
                    {
                        title: "Боты",
                        id: true
                    }
                ],
                doerType: {},

                // Соц. сети
                currentSoc: socials[0],
                socs: socials,
                isBot: false,

                // Тип накрутки
                cheatingTypes: [],
                selectedCheatingType: {}
            }
        },
        created() {
            this.doerType = this.doerTypes[0];
            this.socChanged();
        },
        methods: {
            socChanged() {
                this.cheatingTypes = this.currentSoc.cheatingTypes;
                this.selectedCheatingType = this.cheatingTypes[0]
            },
            checkBot() {
                if(this.doerType.id == 1) {
                    this.isBot = true;
                } else {
                    this.isBot = false;
                }

                this.currentSoc = this.socs[0];
                this.socChanged()
            },
            submitData() {
                let data = {
                    doerType: this.doerType.id,
                    socID: this.currentSoc.id,
                    cheatingType: this.selectedCheatingType.id
                };
                this.$store.commit("commitOrderFirstSlide", data);
            }
        }
    }
</script>