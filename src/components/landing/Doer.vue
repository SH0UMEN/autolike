<template>
    <main class="landing doer" ref="main">
        <section id="main-screen" class="main-screen">
            <div class="main-screen__container container">
                <img class="main-screen__image" src="/images/money.png" alt="">
                <span class="main-screen__title">Зарабатывай, выполняя простые задания в социальных сетях</span>
                <div class="main-screen__next-section">
                    <span class="main-screen__next-section-label" @click="scrollToSecondSection">Как это работает?</span>
                    <img class="main-screen__next-section-icon" src="/images/next-section-arrow.svg" alt="">
                </div>
            </div>
        </section>

        <section id="instructions" ref="instructions" class="instructions">
            <div class="instructions__container container container-min">
                <span class="section-title">Всё очень просто</span>

                <div class="instructions__content content-margins big-padding-size-row">
                    <div class="instructions__arrow">
                        <img src="/images/landing/arrow.svg" alt="">
                    </div>
                    <div class="instructions__arrow">
                        <img src="/images/landing/arrow.svg" alt="">
                    </div>
                    <div class="col big-padding-size-col">
                        <img src="/images/landing/key.svg" alt="" class="instruction__icon">
                        <span class="instruction__title">Регистрируйся</span>
                        <p class="instruction__text">
                            После регистрации, ты сразу же начнешь получать задания.
                        </p>
                    </div>
                    <div class="col big-padding-size-col">
                        <img src="/images/landing/success.svg" alt="" class="instruction__icon">
                        <span class="instruction__title">Выполняй задания</span>
                        <p class="instruction__text">
                            У нас много заданий, так что без дела ты сидеть не будешь :)
                        </p>
                    </div>
                    <div class="col big-padding-size-col">
                        <img src="/images/landing/dollar-sign.svg" alt="" class="instruction__icon">
                        <span class="instruction__title">Получай деньги</span>
                        <p class="instruction__text">
                            Мы сделали это удобным. На выбор более 10 способов.
                        </p>
                    </div>
                </div>

                <landing-button tag="router-link" theme="doer"
                                radius="circled" to="/auth/registration">
                    Зарегистрироваться
                </landing-button>
            </div>
        </section>

        <section id="examples" class="examples">
            <div class="examples__container container container-min">
                <span class="section-title">Примеры заданий</span>

                <div class="examples__content content-margins big-padding-size-row">
                    <div class="col big-padding-size-col">
                        <example :order="examples[0]"></example>
                    </div>
                    <div class="col big-padding-size-col">
                        <example :order="examples[1]"></example>
                    </div>
                    <div class="col big-padding-size-col">
                        <example :order="examples[2]"></example>
                    </div>
                </div>
            </div>
        </section>

        <section id="pluses" class="instructions">
            <div class="instructions__container container container-min">
                <span class="section-title">С нами надежно</span>

                <div class="instructions__content content-margins big-padding-size-row">
                    <div class="col big-padding-size-col">
                        <img src="/images/landing/message-circle.svg" alt="" class="instruction__icon">
                        <span class="instruction__title">Поддержка 24 часа</span>
                        <p class="instruction__text">
                            Пиши в любое время. Мы отвечаем всем.
                        </p>
                    </div>
                    <div class="col big-padding-size-col">
                        <img src="/images/landing/success.svg" alt="" class="instruction__icon">
                        <span class="instruction__title">Удобный вывод средств</span>
                        <p class="instruction__text">
                            Более 10 способов вывода. Выбери удобный.
                        </p>
                    </div>
                    <div class="col big-padding-size-col">
                        <img src="/images/landing/dollar-sign.svg" alt="" class="instruction__icon">
                        <span class="instruction__title">Выводи в любое время</span>
                        <p class="instruction__text">
                            Мы тебя не ограничиваем. Заработал - выводи.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="faq" class="faq">
            <div class="faq__container container container-xs">
                <span class="section-title">Остались вопросы?</span>

                <div class="faq__content content-margins big-padding-size-row">
                    <faq :questions="questions"></faq>
                </div>
            </div>
        </section>

        <section id="final" class="final">
            <div class="final__container container container-min">
                <div class="final__content">
                    <span class="section-title">Начни зарабатывать прямо сейчас</span>
                    <div class="final__instruction">
                        <span>Регистрируйся</span>
                        <img src="/images/landing/arrow-2.svg" alt="">
                        <span>Выполняй задания</span>
                        <img src="/images/landing/arrow-2.svg" alt="">
                        <span>Получай деньги</span>
                    </div>
                    <img src="/images/money-2.png" class="final__picture-mobile">
                    <landing-button tag="router-link" to="/auth/registration"
                                    theme="doer" radius="circled">Зарегистрироваться</landing-button>
                </div>
                <div class="final__picture">
                    <img src="/images/money-2.png">
                </div>
            </div>
        </section>
        <landing-footer></landing-footer>
    </main>
</template>

<script>
    import LandingButton from "../../components/landing/LandingButton"
    import LandingFooter from "../../components/landing/Footer"
    import Example from "../../components/landing/Example"
    import Faq from "../../components/landing/FAQ"

    export default {
        name: "Doer",
        components: {
            LandingButton,
            Example,
            Faq,
            LandingFooter
        },
        data() {
            return {
                examples: [
                    {
                        icon: "/images/landing/like.svg",
                        picture: "/images/landing/example-1.png",
                        task: "Поставить лайк",
                        social: "instagram",
                    },
                    {
                        icon: "/images/landing/comment.svg",
                        picture: "/images/landing/example-2.png",
                        task: "Написать комментарий",
                        social: "vk",
                    },
                    {
                        icon: "/images/landing/user.svg",
                        picture: "/images/landing/example-3.png",
                        task: "Подписаться",
                        social: "youtube",
                    }
                ],
                questions: [
                    {
                        question: "Задача организации, в особенности же рамки и место?",
                        answer: "Не следует, однако забывать, что рамки и место обучения кадров позволяет оценить значение дальнейших направлений развития. Задача организации, в особенности же рамки и место обучения кадров позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач."
                    },
                    {
                        question: "Задача организации, в особенности же рамки и место?",
                        answer: "Не следует, однако забывать, что рамки и место обучения кадров позволяет оценить значение дальнейших направлений развития. Задача организации, в особенности же рамки и место обучения кадров позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач."
                    },
                    {
                        question: "Задача организации, в особенности же рамки и место?",
                        answer: "Не следует, однако забывать, что рамки и место обучения кадров позволяет оценить значение дальнейших направлений развития. Задача организации, в особенности же рамки и место обучения кадров позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач."
                    },
                    {
                        question: "Задача организации, в особенности же рамки и место?",
                        answer: "Не следует, однако забывать, что рамки и место обучения кадров позволяет оценить значение дальнейших направлений развития. Задача организации, в особенности же рамки и место обучения кадров позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач."
                    },
                    {
                        question: "Задача организации, в особенности же рамки и место?",
                        answer: "Не следует, однако забывать, что рамки и место обучения кадров позволяет оценить значение дальнейших направлений развития. Задача организации, в особенности же рамки и место обучения кадров позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач."
                    },
                    {
                        question: "Задача организации, в особенности же рамки и место?",
                        answer: "Не следует, однако забывать, что рамки и место обучения кадров позволяет оценить значение дальнейших направлений развития. Задача организации, в особенности же рамки и место обучения кадров позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач."
                    }
                ]
            }
        },
        methods: {
            scrollToSecondSection() {
                let scrollTarget = this.$refs['instructions'].offsetTop;
                let animation = setInterval(()=>{
                    window.scroll(0, window.scrollY+8);

                    if(window.scrollY >= scrollTarget) {
                        clearInterval(animation)
                    }
                },1)
            }
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/landing/doer"
</style>