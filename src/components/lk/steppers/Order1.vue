<template>
    <div class="order-slide">
        <h1>Hello 1</h1>
        <accent-button data-next="1">Следующий слайд</accent-button>
    </div>
</template>

<script>
    import AccentButton from "../../common/ui/AccentButton"

    export default {
        name: "Order1",
        components: {
            AccentButton
        }
    }
</script>

<style scoped>

</style>