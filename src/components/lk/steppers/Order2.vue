<template>
    <div class="order-slide order-slide-two">
        <div class="stepper__container">
            <text-input class="order-slide-two__input"
                        name="link" v-model="link">Ссылка на аккаунт/видео/пост/группу</text-input>
            <number-input class="order-slide-two__input"
                          v-model="quantity" :h="quantityStep"
                          :value-boundaries="[1000, 150000]">Кол-во накрутки</number-input>
            <number-input v-model="perHour" :h="perHourStep"
                          class="order-slide-two__input"
                          :value-boundaries="[1000, 150000]">Скорость накрутки / час</number-input>
        </div>
        <accent-button data-next="1" class="stepper__main-button">Следующий шаг</accent-button>
    </div>
</template>

<script>
    import TextInput from "../../common/ui/TextInput"
    import NumberInput from "../../common/ui/NumberInput"
    import AccentButton from "../../common/ui/AccentButton"

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
                perHour: 150,
                perHourStep: 50
            }
        }
    }
</script>

<style scoped>

</style>