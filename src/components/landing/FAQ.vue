<template>
    <div class="faq">
        <dropdown v-for="q, i in questions"
                  class="faq__item"
                  :key="i"
                  :label="{ title: q.question }"
                  :items="[{ title: q.answer }]"></dropdown>
    </div>
</template>

<script>
    import Dropdown from "../../components/common/ui/Dropdown"

    export default {
        name: "FAQ",
        props: {
            questions: {
                default: true,
                type: Array
            }
        },
        components: {
            Dropdown
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/landing/faq"
</style>