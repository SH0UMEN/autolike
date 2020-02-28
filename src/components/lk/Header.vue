<template>
    <header class="lk-header">
        <div class="lk-header__container container">
            <div class="lk-header__left-side">
                <a href="#" class="lk-header__logo">Autolike</a>
                <span class="lk-header__marker">Личный кабинет</span>
                <span class="lk-header__marker lk-header__marker_mini">ЛК</span>
            </div>

            <div class="lk-header__right-side">
                <accent-button class="lk-header__order">Оформить заказ</accent-button>
                <secondary-button class="lk-header__put-money">Пополнить баланс</secondary-button>
                <span class="lk-header__balance">0 руб.</span>
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
                        title: "Имя пользователя",
                        image: "/images/profile.svg"
                    },
                    itemsForDesktop: [
                        {
                            title: "Сменить пароль",
                            hoverColor: "accent"
                        },
                        {
                            title: "Выйти из аккаунта",
                            hoverColor: "error"
                        }
                    ],
                    itemsForLaptop: [
                        {
                            title: "Оформить заказ",
                            hoverColor: "accent"
                        },
                        {
                            title: "Пополнить баланс",
                            hoverColor: "accent"
                        },
                        {
                            title: "Сменить пароль",
                            hoverColor: "accent"
                        },
                        {
                            title: "Выйти из аккаунта",
                            hoverColor: "error"
                        }
                    ],
                    itemsForMobile: [
                        {
                            title: "0 руб",
                            hoverColor: "accent"
                        },
                        {
                            title: "Пополнить баланс",
                            hoverColor: "accent"
                        },
                        {
                            title: "Сменить пароль",
                            hoverColor: "accent"
                        },
                        {
                            title: "Выйти из аккаунта",
                            hoverColor: "error"
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