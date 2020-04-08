<template>
    <section id="final" class="final">
            <div class="final__container container container-min">
                <div class="final__content">
                    <span class="section-title">{{title}}</span>
                    <div class="final__instruction">
                        <span>{{final__instruction.first}}</span>
                        <img src="/images/landing/arrow-2.svg" alt="">
                        <span>{{final__instruction.second}}</span>
                        <img src="/images/landing/arrow-2.svg" alt="">
                        <span>{{final__instruction.last}}</span>
                    </div>
                    <img :src="img" class="final__picture-mobile">
                    <landing-button tag="router-link" to="/auth/registration"
                                    :theme="theme_btn" radius="circled">Зарегистрироваться</landing-button>
                </div>
                <div class="final__picture">
                    <img :src="img">
                </div>
            </div>
        </section>
</template>

<script>
import LandingButton from "../../components/landing/LandingButton"

export default {
    name: 'final-section',
    components: {
        LandingButton
    },
    props: {
        title: {
            type: String,
            default: 'Начни зарабатывать прямо сейчас'
        },
        final__instruction: {
            type: Object,
            default: () => {
                return {first:'Регистрируйся', second:'Выполняй задания', last:'Получай деньги'}
            }
        },
        img: {
            type: String,
            default: '/images/money-2.png'
        },
        theme_btn: {
            type: String,
            default: 'doer'
        }
    }
}
</script>