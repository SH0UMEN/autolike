<template>
    <label class="text-input">
        <input class="text-input__input"
               :type="type"
               :placeholder="placeholder"
               v-model.trim="tValue"
               @input="$emit('input', tValue)"
               @blur="$emit('blur', tValue)"
               :name="name" :class="{ 'text-input__input_error': error != '' }">
        <div class="text-input__label">
            <span v-if="error != ''" class="text-input__label-error">
                <img src="/images/alert-triangle.svg" alt=""> {{ error }}
            </span>
            <span v-else class="text-input__label-span">
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
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/text-input"
</style>