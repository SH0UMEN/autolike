<template>
    <div class="balance-slide-one get-money">
        <form class="tab__container modal-form">
            <span class="balance-slide-one__balance">
                Баланс: <span class="balance-slide-one__balance-bold">{{ $store.getters.getUser.balance }} бал.</span>
            </span>

            <div class="get-money__payment-systems">
                <label class="get-money__payment-system">
                    <input type="radio" v-model="paymentSystemID" :value="1" class="get-money__payment-input">
                    <img src="/images/ya-money.svg" alt="" class="get-money__payment-picture">
                </label>
                <label class="get-money__payment-system">
                    <input type="radio" v-model="paymentSystemID" :value="3" class="get-money__payment-input">
                    <img src="/images/qiwi.svg" alt="" class="get-money__payment-picture">
                </label>
                <label class="get-money__payment-system">
                    <input type="radio" v-model="paymentSystemID" :value="2" class="get-money__payment-input">
                    <img src="/images/webmoney.svg" alt="" class="get-money__payment-picture">
                </label>
            </div>

            <div class="balance-modal__form-wrapper modal-form-container">
                <text-input name="account" v-model="account">
                    {{
                    paymentSystemID == 1 ? 'Номер Яндекс-кошелька':
                    paymentSystemID == 3 ? 'Номер Qiwi-кошелька' : 'Номер WebMoney-кошелька'
                    }}
                </text-input>
                <number-input v-model="money"
                              class="get-money__quantity"
                              @blur="$v.money.$touch()"
                              :error="money < 1 ? 'Не менее 100 баллов' :
                                          !$v.money.integer ? 'Введите число' : ''">
                    Cумма на вывод
                </number-input>
            </div>

            <div class="balance-modal__links get-money__min">
                <span>Минимальная сумма вывода: 100 бал.</span>
            </div>

            <div class="get-money__errors">
                <span v-for="error in errors" class="get-money__error">
                    {{ error }}
                </span>
            </div>

            <div class="balance-slide-one__balance-price get-money__balance-price">
                <span class="balance-slide-one__balance-price-label">
                    Сумма на вывод
                </span>
                <div class="balance-slide-one__balance-price-amount">
                    <span class="balance-slide-one__balance-price-res">{{ money }} бал.</span>
                    <span class="balance-slide-one__balance-price-per-one">1 бал. = 0.5 руб.</span>
                </div>
            </div>
        </form>

        <accent-button type="submit" class="tab__main-button"
                       :disabled="!formIsValid" @click="doRequest">
            Подтвердить сумму
        </accent-button>
    </div>
</template>

<script>
    import TextInput from "../../../../components/common/ui/TextInput"
    import AccentButton from "../../../../components/common/ui/AccentButton"
    import SecondaryButton from "../../../../components/common/ui/SecondaryButton"
    import NumberInput from "../../../../components/common/ui/NumberInput"
    import {required, minValue, integer} from "vuelidate/lib/validators"

    export default {
        name: "BalanceTab",
        data() {
            return {
                money: 1000,
                paymentSystemID: 1,
                account: "",
                errors: []
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
                return !(this.$v.money.$invalid || this.$v.money.$anyError ||
                    this.$v.account.$invalid || this.$v.account.$anyError)
            }
        },
        validations: {
            money: {
                required,
                minValue: minValue(100),
                integer: integer
            },
            account: {
                required: required
            }
        },
        methods: {
            doRequest() {
                this.$store.dispatch("balanceRequest", {
                    username: this.account,
                    amount: this.money,
                    type: this.paymentSystemID
                }).then((res) => {
                    this.errors = [];
                    this.$store.commit("closeBalanceModal");
                    this.$store.commit("openSuccessModal", {
                        title: "Вывод успешно оформлен",
                        text: "Вывод занимает минимум 3 дня. Отслеживать состояние вывода можно в разделе \"История выводов\""
                    })
                }).catch((err) => {
                    this.errors = [];
                    let errors = err.response.data.errors;

                    for(let e in errors) {
                        for(let error of errors[e]) {
                            this.errors.push(error);
                        }
                    }
                })
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../../assets/sass/lk/doer/balance-modal"
</style>