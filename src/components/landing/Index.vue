<template>
    <main class="landing-index" ref="main">
        <div class="landing-index__main-screen">
            <div class="landing-index__main-screen-content">
                <div class="landing-index__main-screen-products">
                    <div class="landing-index__main-screen-product" v-for="product in products">
                        <img class="landing-index__main-screen-product-image" :src="product.img" alt="">
                        <span class="landing-index__main-screen-product-title">{{ product.title }}</span>
                    </div>
                </div>
                <span class="landing-index__main-screen-title">Накрутка в социальных сетях</span>
            </div>
            <div class="landing-index__main-screen-choosing">
                <div class="choosing">
                    <div class="choosing__content">
                        <landing-button tag="router-link" :to="{ name: 'landing-doer' }" radius="circled" theme="doer">Зарабатывать</landing-button>
                        <span class="choosing__title">Я хочу</span>
                        <landing-button tag="router-link" :to="{ name: 'landing-customer' }" radius="circled" theme="client">Раскрутить аккаунт</landing-button>
                    </div>
                    <img src="/images/landing/hand.png" alt="" class="choosing__left-hand">
                    <img src="/images/landing/hand.png" alt="" class="choosing__right-hand">
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import LandingButton from "../../components/landing/LandingButton"

    export default {
        name: "Index",
        components: {
            LandingButton
        },
        data() {
            return {
                products: [
                    {
                        title: "Лайки",
                        img: "/images/landing/heart.svg"
                    },
                    {
                        title: "Подписки",
                        img: "/images/landing/user_green.svg"
                    },
                    {
                        title: "Просмотры",
                        img: "/images/landing/eye.svg"
                    },
                    {
                        title: "Комментарии",
                        img: "/images/landing/message-square_orange.svg"
                    },
                ]
            }
        }
    }
</script>

<style lang="sass">
</style>