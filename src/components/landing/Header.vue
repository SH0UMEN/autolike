<template>
    <header class="landing-header" :class="'landing-header_'+theme">
        <div class="landing-header__container container">
            <div class="landing-header__left-side">
                <router-link :to="{ name: 'landing-index' }" class="landing-header__logo">
                    Autolike
                </router-link>
                <router-link class="landing-header__link landing-header__link-doer" :to="{ name: 'landing-doer' }">Зарабатывать</router-link>
                <router-link class="landing-header__link landing-header__link-client" :to="{ name: 'landing-customer' }">Раскрутить аккаунт</router-link>
            </div>
            <div class="landing-header__right-side">
                <secondary-button tag="a" class="landing-header__contact-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path d="M19.8218 14.4726C19.768 14.3826 19.4355 13.66 17.8354 12.1749C16.1602 10.6198 16.3853 10.8723 18.4029 8.18338C19.6317 6.54576 20.123 5.54568 19.9693 5.11815C19.823 4.71062 18.9192 4.81813 18.9192 4.81813L15.914 4.83563C15.914 4.83563 15.6915 4.80563 15.5252 4.90439C15.3639 5.00189 15.2602 5.22691 15.2602 5.22691C15.2602 5.22691 14.7839 6.4945 14.1488 7.57208C12.81 9.846 12.2737 9.96601 12.0549 9.82475C11.5461 9.49598 11.6737 8.50215 11.6737 7.7971C11.6737 5.59319 12.0074 4.67437 11.0224 4.43685C10.6948 4.3581 10.4548 4.30559 9.6185 4.29684C8.54592 4.28559 7.6371 4.30059 7.12331 4.55186C6.78079 4.71937 6.51702 5.09315 6.67828 5.1144C6.87704 5.14065 7.32708 5.23566 7.56584 5.56069C7.87462 5.97947 7.86337 6.92204 7.86337 6.92204C7.86337 6.92204 8.04088 9.51598 7.44959 9.8385C7.04331 10.0598 6.48701 9.60849 5.29317 7.54458C4.68188 6.48825 4.21934 5.31942 4.21934 5.31942C4.21934 5.31942 4.13059 5.1019 3.97183 4.98564C3.77931 4.84438 3.50929 4.79938 3.50929 4.79938L0.651578 4.81688C0.651578 4.81688 0.222796 4.82938 0.0652839 5.01565C-0.0747265 5.18191 0.0540331 5.52443 0.0540331 5.52443C0.0540331 5.52443 2.2917 10.7586 4.82439 13.3975C7.14831 15.8164 9.78601 15.6577 9.78601 15.6577H10.9811C10.9811 15.6577 11.3424 15.6177 11.5261 15.4189C11.6962 15.2364 11.6899 14.8939 11.6899 14.8939C11.6899 14.8939 11.6662 13.29 12.4112 13.0537C13.145 12.8212 14.0876 14.6039 15.0864 15.2902C15.8415 15.8089 16.4153 15.6952 16.4153 15.6952L19.0867 15.6577C19.0867 15.6577 20.4843 15.5714 19.8218 14.4726Z" fill="#4680C2"/>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </secondary-button>
                <secondary-button tag="a" class="landing-header__contact-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.06305 12.2269L7.7653 16.1357C8.19131 16.1357 8.37581 15.9649 8.59707 15.7598L10.5944 13.9783L14.733 16.807C15.492 17.2018 16.0267 16.9939 16.2315 16.1553L18.9481 4.27498L18.9488 4.27428C19.1896 3.22708 18.5431 2.81758 17.8035 3.07448L1.83565 8.78015C0.745877 9.17495 0.762378 9.74195 1.6504 9.99885L5.73275 11.1839L15.2152 5.64627C15.6615 5.37047 16.0672 5.52307 15.7335 5.79887L8.06305 12.2269Z" fill="#0088CC"/>
                    </svg>
                </secondary-button>
                <router-link class="landing-header__auth-link" :to="{ name: 'login' }">Войти</router-link>
                <router-link class="landing-header__auth-link" :to="{ name: 'registration',
                                                                    query: currentRole != null ? { role: currentRole } : {} }">
                    Зарегистрироваться
                </router-link>
            </div>
            <div class="landing-header__right-side landing-header__right-side_mobile">
                <dropdown :show-contacts="true" icon-type="burger" :items="menuItems"
                          :label="{ title: menuLabel }">
                </dropdown>
            </div>
        </div>
    </header>
</template>

<script>
    import SecondaryButton from "../../components/common/ui/SecondaryButton"
    import Dropdown from "../../components/common/ui/Dropdown"

    export default {
        name: "Header",
        props: {
            theme: {
                default: "default",
                type: String
            },
        },
        components: {
            SecondaryButton,
            Dropdown
        },
        mounted() {
            this.changeDropdownItems();

            this.$router.afterEach((to)=>{
                if(to.name == "landing-doer") {
                    this.menuLabel = "Зарабатывайте"
                    this.currentRole = 1
                } else if(to.name == "landing-customer") {
                    this.menuLabel = "Раскрутите аккаунт"
                    this.currentRole = 0
                } else {
                    this.menuLabel = ""
                    this.currentRole = null
                }
                this.changeDropdownItems();
            })
        },
        data() {
            return {
                currentRole: this.$router.currentRoute.name == "landing-doer"? 1 :
                             this.$router.currentRoute.name == "landing-customer" ? 0 : null,
                menuLabel: this.$router.currentRoute.name == "landing-doer"? "Зарабатывайте" :
                           this.$router.currentRoute.name == "landing-customer" ? "Раскрутите аккаунт" : "",
                menuItems: []
            }
        },
        methods: {
            changeDropdownItems() {
                if(this.$router.currentRoute.name == "landing-doer") {
                    this.menuItems = [
                        {
                            title: 'Раскрутить аккаунт',
                            type: "router-link",
                            link: { name: "landing-customer" }
                        },
                        {
                            title: 'Войти',
                            type: "router-link",
                            link: { name: "login" }
                        },
                        {
                            title: 'Зарегистрироваться',
                            type: "router-link",
                            link: { name: "registration" }
                        }
                    ]
                } else if (this.$router.currentRoute.name == "landing-customer") {
                    this.menuItems = [
                        {
                            title: 'Заработать',
                            type: "router-link",
                            link: { name: "landing-doer" }
                        },
                        {
                            title: 'Войти',
                            type: "router-link",
                            link: { name: "login" }
                        },
                        {
                            title: 'Зарегистрироваться',
                            type: "router-link",
                            link: { name: "registration" }
                        }
                     ]
                } else {
                    this.menuItems = [
                        {
                            title: 'Раскрутить аккаунт',
                            type: "router-link",
                            link: { name: "landing-customer" }
                        },
                        {
                            title: 'Заработать',
                            type: "router-link",
                            link: { name: "landing-doer" }
                        },
                        {
                            title: 'Войти',
                            type: "router-link",
                            link: { name: "login" }
                        },
                        {
                            title: 'Зарегистрироваться',
                            type: "router-link",
                            link: { name: "registration" }
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/landing/header"
</style>