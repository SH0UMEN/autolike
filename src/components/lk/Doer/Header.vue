<template>
    <header class="lk-header">
        <div class="lk-header__container container">
            <div class="lk-header__left-side">
                <router-link :to="{ name: 'landing-index' }" class="lk-header__logo">Autolike</router-link>
                <span class="lk-header__marker">{{ title }}</span>
            </div>

            <div class="lk-header__right-side">
                <secondary-button class="lk-header__put-money">Вывести средства</secondary-button>
                <span class="lk-header__balance">{{ $store.getters.getUser.balance }} бал.</span>
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
    import AccentButton from "../../common/ui/AccentButton"
    import SecondaryButton from "../../common/ui/SecondaryButton"
    import DropdownMenu from "../../common/ui/Dropdown"

    export default {
        name: "lk_header",
        components: {
            AccentButton,
            SecondaryButton,
            DropdownMenu
        },
        props: {
            title: {
                type: String,
                default: ""
            }
        },
        watch: {
            user: {
                deep: true,
                handler: ()=>{
                    this.dropdownOptions.itemsForMobile[0].title = `${ this.user ? this.user.balance : "" } бал.`
                },
            }
        },
        mounted() {
            this.dropdownOptions.itemsForMobile[0].title = `${ this.user ? this.user.balance : "" } бал.`
        },
        computed: {
            user() {
                return this.$store.getters.getUser;
            }
        },
        data() {
            return {
                dropdownOptions: {
                    label: {
                        title: this.$store.getters.getUser.name,
                        image: "/images/profile.svg"
                    },
                    itemsForDesktop: [
                        /*{
                            title: "Сменить пароль",
                            hoverColor: "accent",
                            callback: () => {
                                this.$router.push({ name: 'change-password' })
                            }
                        },*/
                        {
                            title: "Работать",
                            style: "radio",
                            type: 'router-link',
                            link: { name: "lk-doer" },
                            selected: true
                        },
                        {
                            title: "Раскручивать",
                            style: "radio",
                            type: 'router-link',
                            link: { name: "lk-customer" },
                        },
                        {
                            title: "Сменить пароль",
                            type: 'router-link',
                            link: { name: 'change-password' },
                            hoverColor: 'accent'
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
                            title: "Работать",
                            style: "radio",
                            type: 'router-link',
                            link: { name: "lk-doer" },
                            selected: true
                        },
                        {
                            title: "Раскручивать",
                            style: "radio",
                            type: 'router-link',
                            link: { name: "lk-customer" },
                        },
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
                        /*{
                            title: "Сменить пароль",
                            hoverColor: "accent",
                            callback: () => {
                                this.$router.push({ name: 'change-password' })
                            }
                        },*/
                        {
                            title: "Сменить пароль",
                            type: 'router-link',
                            link: { name: 'change-password' },
                            hoverColor: 'accent'
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
                            title: "Работать",
                            style: "radio",
                            type: 'router-link',
                            link: { name: "lk-doer" },
                            selected: true
                        },
                        {
                            title: "Раскручивать",
                            style: "radio",
                            type: 'router-link',
                            link: { name: "lk-customer" },
                        },
                        {
                            title: "",
                            hoverColor: "accent",
                        },
                        {
                            title: "Пополнить баланс",
                            callback: () => {
                                this.$store.commit('openBalanceModal')
                            },
                            hoverColor: "accent"
                        },
                        /*{
                            title: "Сменить пароль",
                            hoverColor: "accent",
                            callback: () => {
                                this.$router.push({ name: 'change-password' })
                            }
                        },*/
                        {
                            title: "Сменить пароль",
                            type: 'router-link',
                            link: { name: 'change-password' },
                            hoverColor: 'accent'
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
    @import "../../../assets/sass/lk/header/header"
</style>