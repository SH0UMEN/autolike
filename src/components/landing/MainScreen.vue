<template>
    <section id="main-screen" class="main-screen">
        <div class="main-screen__container container">
            <img class="main-screen__image" :src="mainImg" alt="">
            <span class="main-screen__title">{{title}}</span>
            <span class="main-screen__desc">{{desc}}</span>
            <div class="main-screen__next-section">
                <span class="main-screen__next-section-label" :class="[ 'main-screen__next-section-label__'+color]" @click="scrollToSecondSection">{{questions}}</span>
                <img class="main-screen__next-section-icon" :src="arrow" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'main-screen',
    props:{
        title: String,
        mainImg: {
            type: String,
            default: '/images/money.png',
        },
        questions: {
            type: String, 
            default: 'Как это работает?'
        },
        desc: String,
        doer2: {
            type: String,
            default: false
        },
        color: {
            type: String,
            default: 'doer'
        },
        arrow: {
            type: String,
            default: '/images/next-section-arrow.svg'
        }
    }
}
</script>

