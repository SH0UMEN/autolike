<template>
    <div class="modal">
        <modal :name="name" @closed="$emit('closed')"
               height="auto" :scrollable="true" :adaptive="true">
            <div class="modal__header">
                <svg @click="$modal.hide(name)" width="32" height="32" viewBox="0 0 32 32" class="modal__close-modal" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 12L20 20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 12L12 20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="modal__content">
                <slot></slot>
            </div>
        </modal>
    </div>
</template>

<script>
    export default {
        name: "MainModal",
        props: {
            name: {
                type: String,
                required: true
            },
            show: {
                type: Boolean,
                required: true
            }
        },
        watch: {
            show(value) {
                if (value) {
                    this.$modal.show(this.name);
                } else {
                    this.$modal.hide(this.name);
                }
            }
        },
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/modal"
</style>