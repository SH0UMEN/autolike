<template>
    <main-modal class="balance-modal"
                :show="$store.getters.balanceModalIsShown"
                @closed="$store.commit('closeBalanceModal')" name="lk-balance">
        <div class="balance-modal">
            <form @submit.prevent="raiseBalance" class="balance-modal__form modal-form">
                <div class="balance-modal__form-wrapper modal-form-container">
                    <span class="balance-modal__title modal-form-title">Пополнить баланс</span>
                    <number-input v-model="money"
                                  class="balance-modal__balance-input"
                                  @blur="$v.money.$touch()"
                                  :error="money < 1 ? 'Не менее 1 рубля' :
                                          !$v.money.integer ? 'Введите число' : ''">
                        Cумма для пополнения
                    </number-input>
                </div>

                <div class="balance-modal__links">
                    <a href="#" target="_blank">Оферта</a>
                    <a href="#" target="_blank">Политика возврата средств</a>
                </div>

                <accent-button class="modal-form-submit"
                               :disabled="!formIsValid">
                    Подтвердить сумму
                </accent-button>
            </form>
        </div>
    </main-modal>
</template>

<script>
    import MainModal from "../../../components/common/ui/MainModal"
    import TextInput from "../../../components/common/ui/TextInput"
    import AccentButton from "../../../components/common/ui/AccentButton"
    import SecondaryButton from "../../../components/common/ui/SecondaryButton"
    import NumberInput from "../../../components/common/ui/NumberInput"
    import { required, minValue, integer } from 'vuelidate/lib/validators'

    export default {
        name: "BalanceModal",
        components: {
            MainModal,
            TextInput,
            AccentButton,
            SecondaryButton,
            NumberInput
        },
        data() {
            return {
                money: 1000
            }
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
                this.$store.dispatch("donation", this.money).then(()=>{

                })
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/lk/modals/balance-modal"
</style>