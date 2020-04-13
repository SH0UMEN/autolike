<template>
    <div class="tab">
        <span class="tab__title">{{ title }}</span>
        <div class="tab__titles">
            <button class="tab__switch-button" :style="{ width: (100/tabs.length)+'%'}"
                    type="button" v-for="tab, i in tabs" @click="currentTab = i"
                    :class="{ 'tab__switch-button_current': currentTab == i }">{{ tab }}</button>
        </div>
        <div class="tab__tabs" ref="tab-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tab",
        props: {
            title: {
                type: String,
                default: ""
            },
            tabs: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                currentTab: 0,
                hiddenClass: "tab__slide_hidden",
                slides: []
            }
        },
        watch: {
            currentTab(oldValue, newValue) {
                this.slides[oldValue].classList.remove(this.hiddenClass);
                this.slides[newValue].classList.add(this.hiddenClass);
            }
        },
        mounted() {
            this.slides = this.$refs['tab-container'].children;

            for(let tab of this.slides) {
                tab.classList.add("tab__slide", this.hiddenClass);
            }

            this.slides[this.currentTab].classList.remove(this.hiddenClass);
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/common/ui/tab"
</style>