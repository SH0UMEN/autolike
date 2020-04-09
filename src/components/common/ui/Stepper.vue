<template>
    <div class="stepper">
        <span class="stepper__title">{{ title }}</span>

        <div class="stepper__progress">
            <div v-for="step, i in steps" class="stepper__step">
                <div class="stepper__step-label">
                    <span class="stepper__step-icon" v-if="currentSlide > i">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1L3.5 6.5L1 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>

                    <span class="stepper__step-icon" v-else>
                        {{ (i+1) }}
                    </span>

                    {{ step }}
                </div>
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
            currentSlide(nv, ov) {
                this.slides[ov].classList.add(this.hiddenClass);
                this.slides[nv].classList.remove(this.hiddenClass);
            }
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/stepper"
</style>