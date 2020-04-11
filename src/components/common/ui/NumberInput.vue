<template>
    <div class="number-input" :class="valueBoundaries[0] != valueBoundaries[1] ? 'number-input_validate' : ''">
        <div class="number-input__container">
            <secondary-button theme="black" @click="tValue -= h" class="number-input__quantity-control">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33337 8H12.6667" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </secondary-button>
            <text-input class="number-input__quantity-input"
                        name="quantity" type="number"
                        @blur="$emit('blur')"
                        @input="$emit('input', tValue)"
                        v-model="tValue"
                        :error="error">
                <slot></slot>
            </text-input>
            <secondary-button theme="black" @click="tValue += h" class="number-input__quantity-control">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3.3335V12.6668" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.33325 8H12.6666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </secondary-button>
        </div>
        <div class="number-input__validation">
            <div class="number-input__validation-label number-input__validation-min"
                 :class="{ 'number-input__validation-label_triggered': minError }">
                Минимум {{ valueBoundaries[0] }}
            </div>
            <div class="number-input__validation-label number-input__validation-max"
                 :class="{ 'number-input__validation-label_triggered': maxError }">
                Максимум {{ valueBoundaries[1] }}
            </div>
        </div>
    </div>
</template>

<script>
    import SecondaryButton from "./SecondaryButton"
    import TextInput from "./TextInput"

    export default {
        name: "NumberInput",
        components: {
            TextInput,
            SecondaryButton
        },
        props: {
            error: {
                default: "",
                type: String
            },
            value: {
                default: 0,
                type: Number
            },
            h: {
                default: 1,
                type: Number
            },
            valueBoundaries: {
                type: Array,
                default: ()=>[0, 0]
            },
            minError: {
                type: Boolean,
                default: false
            },
            maxError: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                tValue: this.value
            }
        },
        watch: {
            value(value) {
                this.tValue = value;
            },
            tValue(value) {
                this.$emit('input', value);
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/number-input"
</style>