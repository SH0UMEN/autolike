<template>
    <div class="balance-slide-one">
        <form class="tab__container modal-form">
            <span class="balance-slide-one__balance">
                Баланс: <span class="balance-slide-one__balance-bold">{{ $store.getters.getUser.balance }} бал.</span>
            </span>
            <div class="balance-modal__form-wrapper modal-form-container">
                <number-input v-model="money"
                              class="balance-slide-one__quantity"
                              @blur="$v.money.$touch()"
                              :error="money < 1 ? 'Не менее 1 балла' :
                                          !$v.money.integer ? 'Введите число' : ''">
                    Cумма для пополнения
                </number-input>
            </div>

            <div class="balance-modal__links">
                <a href="#" target="_blank">Оферта</a>
                <a href="#" target="_blank">Политика возврата средств</a>
            </div>

            <div class="balance-slide-one__balance-price">
                <span class="balance-slide-one__balance-price-label">
                    Сумма на пополнение
                </span>
                <div class="balance-slide-one__balance-price-amount">
                    <span class="balance-slide-one__balance-price-res">{{ money }} бал.</span>
                    <span class="balance-slide-one__balance-price-per-one">1 бал. = 0.5 руб.</span>
                </div>
            </div>
        </form>

        <accent-button @click="raiseBalance" type="submit" class="tab__main-button"
                       :disabled="!formIsValid">
            Подтвердить сумму
        </accent-button>
    </div>
</template>

<script>
    import TextInput from "../../../components/common/ui/TextInput"
    import AccentButton from "../../../components/common/ui/AccentButton"
    import SecondaryButton from "../../../components/common/ui/SecondaryButton"
    import NumberInput from "../../../components/common/ui/NumberInput"
    import { required, minValue, integer } from 'vuelidate/lib/validators'

    export default {
        name: "BalanceTab",
        data() {
            return {
                money: 1000
            }
        },
        components: {
            TextInput,
            AccentButton,
            SecondaryButton,
            NumberInput
        },
        computed: {
            formIsValid() {
                return !(this.$v.money.$invalid || this.$v.money.$anyError)
            }
        },
        validations: {
            money: {
                required,
                minValue: minValue(1),
                integer: integer
            }
        },
        methods: {
            raiseBalance() {
                let resMoney = this.money;

                this.$store.dispatch("donation", this.money).then(()=>{
                    this.$router.push({ name: "donation-successful", params: { 'donations': resMoney } })
                })
            }
        }
    }
</script>

<style>

</style>