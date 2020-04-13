<template>
    <div class="stepper">
        <span class="stepper__title">{{ title }}</span>

        <div class="stepper__progress">
            <div v-for="step, i in steps" class="stepper__step" :class=" currentSlide > i ? 'stepper__step_done' :
                                                                         currentSlide == i ? 'stepper__step_current' : '' ">
                <button :disabled="currentSlide <= i" @click="currentSlide = i" class="stepper__step-label">
                    <span class="stepper__step-icon stepper__step-icon_done">
                        <img src="/images/check.svg" alt="">
                    </span>

                    <span class="stepper__step-icon">
                        {{ (i+1) }}
                    </span>

                    <span class="stepper__step-title">{{ step }}</span>
                </button>
            </div>
        </div>

        <div class="stepper__slides" ref="stepper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Stepper",
        props: {
            steps: {
                type: Array,
                default: ()=>[]
            },
            title: {
                type: String,
                default: "Stepper"
            }
        },
        data() {
            return {
                currentSlide: 0,
                slides: [],
                hiddenClass: "stepper__slide_hidden"
            }
        },
        mounted() {
            let slides = this.$refs.stepper.children;

            for(let c of slides) {
                c.classList.add("stepper__slide", this.hiddenClass);
                this.slides.push(c);

                let buttonNext = c.querySelector("[data-next='1']");

                if(buttonNext) {
                    buttonNext.addEventListener("click", ()=>{
                        this.currentSlide++;
                    });
                }

                this.slides[this.currentSlide].classList.remove(this.hiddenClass);
            }
        },
        watch: {
            currentSlide(ov, nv) {
                this.slides[nv].classList.add(this.hiddenClass);
                this.slides[ov].classList.remove(this.hiddenClass);
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/stepper"
</style>