<template>
    <div class="example">
        <div class="example__card">
            <div class="example__order-picture-block">
                <div class="example__order-picture-description">
                    <img :src="order.icon">
                    <span class="example__order-picture-text">{{ order.task }}</span>
                </div>
                <img class="example__order-picture" :src="order.picture">
            </div>

            <div class="example__order-description">
                <span v-if="order.social == 'youtube'">Канал на YouTube</span>
                <span v-if="order.social == 'instagram'">Публикация в Instagram</span>
                <span v-if="order.social == 'vk'">Публикация в ВКонтакте</span>

                <img v-if="order.social == 'youtube'" src="/images/landing/yt-icon.svg">
                <img v-if="order.social == 'instagram'" src="/images/landing/instagram-icon.svg">
                <img v-if="order.social == 'vk'" src="/images/landing/vk-icon.svg">
            </div>
        </div>

        <landing-button radius="rounded" theme="doer"
                        tag="router-link" to="/auth/registration">
            <span>Выполнить задание</span>
            <img src="/images/landing/external-link.svg" alt="">
        </landing-button>
    </div>
</template>

<script>
    import LandingButton from "../../components/landing/LandingButton"

    export default {
        name: "Example",
        props: {
            order: {
                type: Object,
                required: true
            }
        },
        components: {
            LandingButton
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/landing/example"
</style>