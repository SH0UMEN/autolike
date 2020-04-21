<template>
    <main class="landing doer" ref="main">
        <main-screen :title="'Увеличьте популярность своих аккаунтов в социальных сетях '" 
                     :mainImg="'/images/arrows.png'" 
                     :questions="'Зачем вам накрутка?'"
                     :desc="'Накрутка - это быстрый и доступный способ увеличить приток новой аудитории.'"
                     :color="'accent'"
                     scroll-to="#instructions"
                     :arrow="'/images/arrow-down-blue.png'"></main-screen>

        <section id="instructions" ref="instructions" class="instructions">
            <div class="instructions__container container container-min">
                <span class="section-title">Вам необходима накрутка, если:</span>

                <div class="instructions__content content-margins big-padding-size-row">
                   
                    <InstructionItem :normal="'normal-'" :icon="'/images/landing/users.png'" :title="'Нужны первые подписчики'" :descFirstLine="'Накрутка первых подписчиков облегчит'" :descSecondLine="'старт и поиск своей аудитории.'" ></InstructionItem>
                    <InstructionItem :normal="'normal-'" :icon="'/images/landing/users-x.png'" :title="'Нет новых подписчиков'" :descFirstLine="'Накрутка поможет преодолеть “плато” и '" :descSecondLine="'продолжить развиваться дальше.'" ></InstructionItem>
                    <InstructionItem :normal="'normal-'" :icon="'/images/landing/trending-down.png'" :title="'Нет активности на аккаунте'" :descFirstLine="'С помощью накрутки вы снова начнете'" :descSecondLine="'попадать в рекомендации. '" ></InstructionItem>
                </div>
            </div>
        </section>

        <section class="instructions">
            <div class="instructions__container container container-min">
                <span class="section-title">Как это работает?</span>

                <div class="instructions__content content-margins big-padding-size-row">
                    <div class="instructions__arrow">
                        <img src="/images/landing/arrow.svg" alt="">
                    </div>
                    <div class="instructions__arrow">
                        <img src="/images/landing/arrow.svg" alt="">
                    </div>
                    <InstructionItem :icon="'/images/landing/key.svg'" :title="'Регистрируйтесь'" :descFirstLine="'У вас будет личный кабинет, в котором '" :descSecondLine="'вы сможете отслеживать все действия.'" ></InstructionItem>
                    <InstructionItem :icon="'/images/landing/success.svg'" :title="'Оформите заказ'" :descFirstLine="'Это безопасно. Вы платите только за '" :descSecondLine="'выполненные заказы.'" ></InstructionItem>
                    <InstructionItem :icon="'/images/landing/trending-up.png'" :title="'Поднимайтесь в топ'" :descFirstLine="'Накрутка осуществляется с помощью '" :descSecondLine="'ботов или реальных пользователей.'" ></InstructionItem>
                </div>

                <landing-button tag="router-link" theme="client"
                                radius="circled" :to="{ name: 'registration', query: { role: 0 } }">
                    Зарегистрироваться
                </landing-button>
            </div>
        </section>

         <section class="instructions">
            <div class="instructions__container container container-min">
                <span class="section-title">Преимущества</span>

                <div class="instructions__content content-margins big-padding-size-row">
                    <InstructionItem :normal="'normal-'" :icon="'/images/landing/star.png'" :title="'Вы попадете в рекомендации'" :descFirstLine="'Чем выше активность аккаунта, тем '" :descSecondLine="'больше вероятность попасть в рекомендации.'" ></InstructionItem>
                    <InstructionItem :normal="'normal-'" :icon="'/images/landing/search.png'" :title="'Ваш аккаунт проще найти'" :descFirstLine="'Чем выше активность аккаунта, тем'" :descSecondLine="'лучше он ранжируется в поиске.'" ></InstructionItem>
                    <InstructionItem :normal="'normal-'" :icon="'/images/landing/trending-up.png'" :title="'Вы попадете в топ публикаций'" :descFirstLine="'Чем выше активность аккаунта, тем '" :descSecondLine="'больше вероятность попасть в топ публикаций.'" ></InstructionItem>
                </div>
            </div>
        </section>

       <section class="instructions">
            <div class="instructions__container container container-min">
                <span class="section-title">С нами надежно</span>

                <div class="instructions__content content-margins big-padding-size-row">
                    <InstructionItem :normal="'normal-'" :icon="'/images/landing/message-circle.png'" :title="'Поддержка 24 часа'" :descFirstLine="'Пишите в любое время.'" :descSecondLine="'Мы отвечаем всем.'" ></InstructionItem>
                    <InstructionItem :normal="'normal-'" :icon="'/images/landing/share-2.png'" :title="'Любые социальные сети'" :descFirstLine="'Мы работаем со всеми популярными'" :descSecondLine="'социальными сетями'" ></InstructionItem>
                    <InstructionItem :normal="'normal-'" :icon="'/images/landing/success.svg'" :title="'Проверка результата'" :descFirstLine="'Результат накрутки автоматически'" :descSecondLine="'проверяется.'" ></InstructionItem>
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
        <final :title="'Получите результат уже сегодня'" :img="'/images/arrows-final.png'" :final__instruction="final__instruction" :theme_btn="'client'"></final>
        
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
            Faq,
            LandingFooter,
            InstructionItem,
            MainScreen,
            Final
        },
        data() {
            return {
                questions: [
                    {
                        question: "Задача организации, в особенности же рамки и место?",
                        answer: "Не следует, однако забывать, что рамки и место обучения кадров позволяет оценить значение дальнейших направлений развития. Задача организации, в особенности же рамки и место обучения кадров позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач."
                    },
                    {
                        question: "Задача организации, в особенности же рамки и место обучения кадров в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач?",
                        answer: "Не следует, однако забывать, что рамки и место обучения кадров позволяет оценить значение дальнейших направлений развития. Задача организации, в особенности же рамки и место обучения кадров позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач."
                    },
                    {
                        question: "Задача организации, в особенности же рамки и место обучения кадров в значительной степени обуславливает создание позиций?",
                        answer: "Не следует, однако забывать, что рамки и место обучения кадров позволяет оценить значение дальнейших направлений развития. Задача организации, в особенности же рамки и место обучения кадров позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач."
                    },
                    {
                        question: "Задача организации, в особенности же рамки и место?",
                        answer: "Не следует, однако забывать, что рамки и место обучения кадров позволяет оценить значение дальнейших направлений развития. Задача организации, в особенности же рамки и место обучения кадров позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач."
                    },
                    {
                        question: "Задача организации, в особенности же рамки и место обучения кадров в значительной степени обуславливает создание позиций?",
                        answer: "Не следует, однако забывать, что рамки и место обучения кадров позволяет оценить значение дальнейших направлений развития. Задача организации, в особенности же рамки и место обучения кадров позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач."
                    },
                    {
                        question: "Задача организации, в особенности же рамки и место обучения кадров в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач?",
                        answer: "Не следует, однако забывать, что рамки и место обучения кадров позволяет оценить значение дальнейших направлений развития. Задача организации, в особенности же рамки и место обучения кадров позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач."
                    }
                ],
                final__instruction: {first:'Регистрируйтесь', second: 'Оформляйте заказ', last: 'Поднимайтесь в топ'}
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