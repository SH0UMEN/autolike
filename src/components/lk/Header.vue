<template>
    <header class="lk-header">
        <div class="lk-header__container container">
            <div class="lk-header__left-side">
                <a href="#" class="lk-header__logo">Autolike</a>
                <span class="lk-header__marker">Личный кабинет</span>
                <span class="lk-header__marker lk-header__marker_mini">ЛК</span>
            </div>

            <div class="lk-header__right-side">
                <accent-button class="lk-header__order" @click="$store.commit('openOrderModal')">Оформить заказ</accent-button>
                <secondary-button class="lk-header__put-money" @click="$store.commit('openBalanceModal')">Пополнить баланс</secondary-button>
                <span class="lk-header__balance">{{ $store.getters.getUser.balance }} руб.</span>
                <dropdown-menu class="lk-header__profile-dropdown lk-header__profile-dropdown_desktop"
                               :label="dropdownOptions.label"
                               :items="dropdownOptions.itemsForDesktop">
                </dropdown-menu>
                <dropdown-menu class="lk-header__profile-dropdown lk-header__profile-dropdown_laptop"
                               :label="dropdownOptions.label"
                               :items="dropdownOptions.itemsForLaptop">
                </dropdown-menu>
                <dropdown-menu class="lk-header__profile-dropdown lk-header__profile-dropdown_mobile"
                               :label="dropdownOptions.label"
                               :items="dropdownOptions.itemsForMobile">
                </dropdown-menu>
            </div>
        </div>
    </header>
</template>

<script>
    import AccentButton from "../common/ui/AccentButton"
    import SecondaryButton from "../common/ui/SecondaryButton"
    import DropdownMenu from "../common/ui/Dropdown"

    export default {
        name: "lk_header",
        components: {
            AccentButton,
            SecondaryButton,
            DropdownMenu
        },
        data() {
            return {
                dropdownOptions: {
                    label: {
                        title: this.$store.getters.getUser.name,
                        image: "/images/profile.svg"
                    },
                    itemsForDesktop: [
                        {
                            title: "Сменить пароль",
                            hoverColor: "accent",
                            callback: () => {
                                this.$router.push({ name: 'change-password' })
                            }
                        },
                        {
                            title: "Выйти из аккаунта",
                            hoverColor: "error",
                            callback: () => {
                                this.$store.commit('openLogoutDialog');
                            }
                        }
                    ],
                    itemsForLaptop: [
                        {
                            title: "Оформить заказ",
                            callback: () => {
                                 this.$store.commit('openOrderModal')
                            },
                            hoverColor: "accent"
                        },
                        {
                            title: "Пополнить баланс",
                            callback: () => {
                                this.$store.commit('openBalanceModal')
                            },
                            hoverColor: "accent"
                        },
                        {
                            title: "Сменить пароль",
                            hoverColor: "accent",
                            callback: () => {
                                this.$router.push({ name: 'change-password' })
                            }
                        },
                        {
                            title: "Выйти из аккаунта",
                            hoverColor: "error",
                            callback: () => {
                                this.$store.commit('openLogoutDialog');
                            }
                        }
                    ],
                    itemsForMobile: [
                        {
                            title: `${this.$store.getters.getUser.balance} руб.`,
                            hoverColor: "accent",
                        },
                        {
                            title: "Пополнить баланс",
                            callback: () => {
                                this.$store.commit('openBalanceModal')
                            },
                            hoverColor: "accent"
                        },
                        {
                            title: "Сменить пароль",
                            hoverColor: "accent",
                            callback: () => {
                                this.$router.push({ name: 'change-password' })
                            }
                        },
                        {
                            title: "Выйти из аккаунта",
                            hoverColor: "error",
                            callback: () => {
                                this.$store.commit('openLogoutDialog');
                            }
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/lk/header/header"
</style>