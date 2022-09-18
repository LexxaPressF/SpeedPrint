<template>
    <div :class="keyboardClass"></div>
</template>

<script>
    import Keyboard from "simple-keyboard";
    import "simple-keyboard/build/css/index.css";
    import {mapGetters} from 'vuex'

    export default {
        name: "SimpleKeyboard",
        props: {
            keyboardClass: {
                default: "simple-keyboard",
                type: String
            }
        },
        data: () => ({
            keyboard: null,
        }),
        computed:{
            ...mapGetters({
                rus_layout: 'getRusLayout',
                eng_layout: 'getEngLayout',
                lang: 'getLang',
                display: 'getDisplay'
            })
        },
        mounted() {
            let layout = this.lang == 'english' ? this.eng_layout : this.rus_layout
            this.keyboard = new Keyboard(this.keyboardClass, {
                onKeyPress: this.onKeyPress,
                theme: "hg-theme-default",
                physicalKeyboardHighlight: true,
                physicalKeyboardHighlightPress: true,
                physicalKeyboardHighlightTextColor: "red",
                layout: layout,
                display: this.display
            });
        },
        methods: {
            onKeyPress(button) {
                if (button === "{backspace}") {
                    this.$store.dispatch('deleteSymbol')
                }
                else if (button === "{shiftleft}" || button === "{shiftright}" || button === "{lock}") this.handleShift()
                else if (button === "{space}") this.$store.dispatch('addSymbol', ' ')
                else this.$store.dispatch('addSymbol', button)
            },
            handleShift() {
                let currentLayout = this.keyboard.options.layoutName;
                let shiftToggle = currentLayout === "default" ? "shift" : "default";

                this.keyboard.setOptions({
                    layoutName: shiftToggle
                });
            }
        },
        watch: {
            lang(selectedLang){
                let layout = selectedLang == 'english' ? this.eng_layout : this.rus_layout
                this.keyboard.setOptions({
                    layout: layout
                })
            }
        }
    };
</script>

<style scoped>
.hg-theme-default{
    border-radius: 15px;
    background-color: transparent;
    backdrop-filter: blur(10px);
    cursor: default;
}
</style>