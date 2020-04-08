<template>
    <section id="main-screen" class="main-screen">
        <div class="main-screen__container container">
            <img class="main-screen__image" :src="mainImg" alt="">
            <span class="main-screen__title">{{title}}</span>
            <span class="main-screen__desc">{{desc}}</span>
            <div class="main-screen__next-section">
                <a :href="scrollTo" v-smooth-scroll class="main-screen__next-section-label" :class="[ 'main-screen__next-section-label__'+color]">{{questions}}</a>
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
        scrollTo: {
            type: String,
            default: ""
        },
        questions: {
            type: String, 
            default: 'Как это работает?'
        },
        desc: String,
        color: {
            type: String,
            default: 'doer'
        },
        arrow: {
            type: String,
            default: '/images/next-section-arrow.svg'
        }
    },
}
</script>

