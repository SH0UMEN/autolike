<template>
    <label class="text-input" :class="'text-input_' + labelPlacement">
        <input class="text-input__input"
               :type="type"
               :placeholder="placeholder"
               v-model="tValue"
               @input="$emit('input', type == 'number' ? parseInt(tValue) : tValue)"
               @blur="$emit('blur', tValue)"
               v-if="tag == 'input'"
               :name="name" :class="{ 'text-input__input_error': error != '' }">
        <textarea :style="{ height: height+'px' }"
                class="text-input__input"
                :placeholder="placeholder"
                v-model="tValue"
                @input="$emit('input', tValue)"
                @blur="$emit('blur', tValue)"
                v-else-if="tag == 'textarea'"
                :name="name" :class="{ 'text-input__input_error': error != '' }">
        </textarea>
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
            },
            tag: {
                default: "input",
                type: String
            },
            labelPlacement: {
                default: "center",
                type: String
            },
            height: {
                default: 200,
                type: Number
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