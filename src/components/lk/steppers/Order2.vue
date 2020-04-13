<template>
    <div class="order-slide order-slide-two">
        <div class="stepper__container">
            <text-input class="order-slide-two__input"
                        name="link" v-model="link"
                        @blur="$v.link.$touch()"
                        :error="$v.link.$error ? 'Поле не заполнено' : ''">
                Ссылка на аккаунт/видео/пост/группу
            </text-input>
            <number-input class="order-slide-two__input"
                          v-model="quantity" :h="quantityStep"
                          :error="!$v.quantity.minValue ? 'Слишком маленькое кол-во' :
                                  !$v.quantity.maxValue ? 'Слишком большое кол-во' :
                                  quantity % quantityStep != 0 ? 'Число не кратно '+quantityStep : ''"
                          :min-error="!$v.quantity.minValue"
                          :max-error="!$v.quantity.maxValue"
                          @blur="$v.quantity.$touch()"
                          :value-boundaries="[1000, 150000]">Кол-во накрутки</number-input>
            <number-input v-if="$store.state.LK.newOrder.doerType == 1"
                          v-model="quantityPerHour" :h="quantityPerHourStep"
                          class="order-slide-two__input"
                          :error="!$v.quantityPerHour.minValue ? 'Слишком маленькое кол-во' :
                                  !$v.quantityPerHour.maxValue ? 'Слишком большое кол-во' :
                                  quantityPerHour % quantityPerHourStep != 0 ? 'Число не кратно '+ quantityPerHourStep : ''"
                          :min-error="!$v.quantityPerHour.minValue"
                          :max-error="!$v.quantityPerHour.maxValue"
                          @blur="$v.quantityPerHour.$touch()"
                          :value-boundaries="[1000, 150000]">Скорость накрутки / час</number-input>
        </div>
        <accent-button :disabled="!isValid" data-next="1"
                       class="stepper__main-button" @click="submitData">Следующий шаг</accent-button>
    </div>
</template>

<script>
    import TextInput from "../../common/ui/TextInput"
    import NumberInput from "../../common/ui/NumberInput"
    import AccentButton from "../../common/ui/AccentButton"
    import { minValue, maxValue, required } from "vuelidate/lib/validators"

    export default {
        name: "Order2",
        components: {
            TextInput,
            NumberInput,
            AccentButton
        },
        data() {
            return {
                link: "",
                quantity: 1000,
                quantityStep: 500,
                quantityPerHour: 1000,
                quantityPerHourStep: 100
            }
        },
        validations: {
            quantity: {
                minValue: minValue(1000),
                maxValue: maxValue(150000)
            },
            quantityPerHour: {
                minValue: minValue(1000),
                maxValue: maxValue(150000)
            },
            link: {
                required: required
            }
        },
        computed: {
            isValid() {
                return !(this.$v.quantity.$invalid || this.$v.quantityPerHour.$invalid ||
                         this.$v.link.$invalid ||
                         this.quantity % this.quantityStep != 0 ||
                         this.quantityPerHour % this.quantityPerHourStep != 0)
            }
        },
        methods: {
            submitData() {
                let data = {
                    quantity: this.quantity,
                    quantityPerHour: this.quantityPerHour,
                    link: this.link
                }

                this.$store.commit("commitOrderSecondSlide", data);
            }
        }
    }
</script>

<style scoped>

</style>