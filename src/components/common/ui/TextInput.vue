<template>
    <label class="text-input">
        <input class="text-input__input"
               :type="type"
               :placeholder="placeholder"
               v-model="tValue"
               @input="$emit('input', type == 'number' ? parseInt(tValue) : tValue)"
               @blur="$emit('blur', tValue)"
               :name="name" :class="{ 'text-input__input_error': error != '' }">
        <div class="text-input__label">
            <span v-show="error != ''" class="text-input__label-error">
                <img src="/images/alert-triangle.svg" alt=""> {{ error }}
            </span>
            <span v-if="!error" class="text-input__label-span">
                <slot></slot>
            </span>
        </div>
    </label>
</template>

<script>
    export default {
        name: "TextInput",
        props: {
            type: {
                type: String,
                default: 'text',
            },
            placeholder: {
                type: String
            },
            value: {
                required: true
            },
            name: {
                type: String,
                required: true
            },
            error: {
                default: "",
                type: String
            }
        },
        data() {
            return {
                tValue: this.value,
            }
        },
        watch: {
            value() {
                this.tValue = this.value
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/text-input"
</style>