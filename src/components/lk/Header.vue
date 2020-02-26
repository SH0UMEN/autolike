<template>
    <header class="lk-header">
        <div class="lk-header__container container">
            <div class="lk-header__left-side">
                <a href="#" class="lk-header__logo">Autolike</a>
                <span class="lk-header__marker">Личный кабинет</span>
            </div>

            <div class="lk-header__right-side">
                <accent-button class="lk-header__order">Оформить заказ</accent-button>
                <link-like-button class="lk-header__put-money">Пополнить баланс</link-like-button>
                <span class="lk-header__balance">0 руб.</span>
                <dropdown-menu class="lk-header__profile-dropdown" :label="dropdownOptions.label" :items="dropdownOptions.items"></dropdown-menu>
            </div>
        </div>
    </header>
</template>

<script>
    import AccentButton from "../common/ui/AccentButton"
    import LinkLikeButton from "../common/ui/LinkLikeButton"
    import DropdownMenu from "../common/ui/Dropdown"

    export default {
        name: "lk_header",
        components: {
            AccentButton,
            LinkLikeButton,
            DropdownMenu
        },
        data() {
            return {
                dropdownOptions: {
                    label: {
                        title: "Имя пользователя",
                        image: "/images/profile.svg"
                    },
                    items: [
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

<style lang="sass" scoped>
    @import "../../assets/sass/lk/header/header"
</style>