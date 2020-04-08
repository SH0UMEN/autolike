<template>
    <main class="landing doer" ref="main">
        <main-screen :title="'Зарабатывай, выполняя простые задания в социальных сетях'"
                     :mainImg="'/images/money.png'"
                     scroll-to="#instructions"></main-screen>

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
                    <InstructionItem :icon="'/images/landing/key.svg'" :title="'Регистрируйся'" descFirstLine="'После регистрации, ты сразу же'" descSecondLine="'начнешь получать задания.'" ></InstructionItem>
                    <InstructionItem :icon="'/images/landing/success.svg'" :title="'Выполняй задания'" descFirstLine="' У нас много заданий, так что'" descSecondLine="'без дела ты сидеть не будешь :)'" ></InstructionItem>
                    <InstructionItem :icon="'/images/landing/dollar-sign.svg'" :title="'Получай деньги'" descFirstLine="' Мы сделали это удобным. '" descSecondLine="'На выбор более 10 способов.'" ></InstructionItem>
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

        <final></final>
        <landing-footer></landing-footer>
    </main>
</template>

<script>
    import LandingButton from "../../components/landing/LandingButton"
    import LandingFooter from "../../components/landing/Footer"
    import Example from "../../components/landing/Example"
    import Faq from "../../components/landing/FAQ"
    import InstructionItem from "../../components/landing/InstructionItem"
    import MainScreen from "../../components/landing/MainScreen"
    import Final from "../../components/landing/Final"

    export default {
        name: "Doer",
        components: {
            LandingButton,
            Example,
            Faq,
            LandingFooter,
            InstructionItem,
            MainScreen,
            Final
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
    }
</script>

<style lang="sass">
    @import "../../assets/sass/landing/doer"
</style>