<template>
    <footer class="landing-footer">
        <div class="landing-footer__container container">
            <div class="landing-footer__left-side">
                <a href="#" class="landing-footer__logo">
                    Autolike
                </a>
                <router-link class="landing-footer__link landing-footer__link-doer" to="/">Зарабатывать</router-link>
                <router-link class="landing-footer__link landing-footer__link-client" to="/later">Раскрутить аккаунт</router-link>
            </div>
            <div class="landing-footer__right-side">
                <secondary-button class="landing-footer__contact-button landing-footer__contact-button-support">
                    <span>Поддержка</span>
                    <img src="/images/landing/external-link.svg">
                    <img src="/images/landing/message-square.svg">
                </secondary-button>
                <secondary-button class="landing-footer__contact-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path d="M19.8218 14.4728C19.768 14.3828 19.4355 13.6602 17.8354 12.1751C16.1602 10.62 16.3853 10.8725 18.4029 8.18358C19.6317 6.54596 20.123 5.54588 19.9693 5.11835C19.823 4.71082 18.9192 4.81833 18.9192 4.81833L15.914 4.83583C15.914 4.83583 15.6915 4.80583 15.5252 4.90458C15.3639 5.00209 15.2602 5.22711 15.2602 5.22711C15.2602 5.22711 14.7839 6.4947 14.1488 7.57228C12.81 9.8462 12.2737 9.96621 12.0549 9.82495C11.5461 9.49618 11.6737 8.50235 11.6737 7.7973C11.6737 5.59339 12.0074 4.67457 11.0224 4.43705C10.6948 4.35829 10.4548 4.30579 9.6185 4.29704C8.54592 4.28579 7.6371 4.30079 7.12331 4.55206C6.78079 4.71957 6.51702 5.09335 6.67828 5.1146C6.87704 5.14085 7.32708 5.23586 7.56584 5.56088C7.87462 5.97966 7.86337 6.92223 7.86337 6.92223C7.86337 6.92223 8.04088 9.51618 7.44959 9.8387C7.04331 10.06 6.48701 9.60868 5.29317 7.54478C4.68188 6.48845 4.21934 5.31962 4.21934 5.31962C4.21934 5.31962 4.13059 5.1021 3.97183 4.98584C3.77931 4.84458 3.50929 4.79958 3.50929 4.79958L0.651578 4.81708C0.651578 4.81708 0.222796 4.82958 0.0652839 5.01584C-0.0747265 5.18211 0.0540331 5.52463 0.0540331 5.52463C0.0540331 5.52463 2.2917 10.7588 4.82439 13.3977C7.14831 15.8166 9.78601 15.6579 9.78601 15.6579H10.9811C10.9811 15.6579 11.3424 15.6179 11.5261 15.4191C11.6962 15.2366 11.6899 14.8941 11.6899 14.8941C11.6899 14.8941 11.6662 13.2902 12.4112 13.0539C13.145 12.8214 14.0876 14.6041 15.0864 15.2904C15.8415 15.8091 16.4153 15.6954 16.4153 15.6954L19.0867 15.6579C19.0867 15.6579 20.4843 15.5716 19.8218 14.4728Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </secondary-button>
                <secondary-button class="landing-footer__contact-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.06305 12.2269L7.7653 16.1357C8.19131 16.1357 8.37581 15.9649 8.59707 15.7598L10.5944 13.9783L14.733 16.807C15.492 17.2018 16.0267 16.9939 16.2315 16.1553L18.9481 4.27498L18.9488 4.27428C19.1896 3.22708 18.5431 2.81758 17.8035 3.07448L1.83565 8.78015C0.745877 9.17495 0.762378 9.74195 1.6504 9.99885L5.73275 11.1839L15.2152 5.64627C15.6615 5.37047 16.0672 5.52307 15.7335 5.79887L8.06305 12.2269Z" fill="white"/>
                    </svg>
                </secondary-button>
                <span class="landing-footer__copy">2020 Autolike. All rights reserved.</span>
            </div>
        </div>
    </footer>
</template>

<script>
    import SecondaryButton from "../../components/common/ui/SecondaryButton"

    export default {
        name: "Header",
        props: {
            theme: {
                default: "default",
                type: String
            }
        },
        components: {
            SecondaryButton
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/landing/footer"
</style>