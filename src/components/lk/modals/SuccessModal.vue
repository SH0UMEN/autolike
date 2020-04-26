<template>
    <main-modal class="order-success-modal"
                :show="$store.state.LK.successModalShown"
                @closed="$store.commit('closeSuccessModal')"
                name="order-success-modal">
        <div class="modal__container">
            <svg class="order-success-modal__image" width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M113.667 57.2466V61.9999C113.66 73.1415 110.053 83.9824 103.382 92.906C96.7107 101.83 87.3338 108.358 76.6495 111.517C65.9652 114.676 54.546 114.296 44.0949 110.435C33.6439 106.574 24.7209 99.4381 18.6568 90.0915C12.5927 80.7448 9.71242 69.6883 10.4455 58.5709C11.1786 47.4535 15.4857 36.871 22.7246 28.4015C29.9635 19.932 39.7462 14.0294 50.6138 11.574C61.4814 9.11865 72.8516 10.242 83.0285 14.7766" stroke="#001AFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M113.667 20.6667L62 72.385L46.5 56.885" stroke="#001AFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="order-success-modal__title">{{ $store.getters.getSuccessModalText }}</span>
        </div>
        <accent-button @click="$store.commit('closeSuccessModal')"
                       class="modal__main-button">Закрыть</accent-button>
    </main-modal>
</template>

<script>
    import MainModal from "../../common/ui/MainModal"
    import AccentButton from "../../common/ui/AccentButton"

    export default {
        name: "OrderSuccessModal",
        components: {
            AccentButton,
            MainModal
        },
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/lk/modals/order-success-modal"
</style>