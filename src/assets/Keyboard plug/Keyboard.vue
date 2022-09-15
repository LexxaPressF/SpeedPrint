<template>
    <div :class="keyboardClass"></div>
</template>

<script>
    import Keyboard from "simple-keyboard";
    import "simple-keyboard/build/css/index.css";

    export default {
        name: "SimpleKeyboard",
        props: {
            keyboardClass: {
                default: "simple-keyboard",
                type: String
            }
        },
        data: () => ({
            keyboard: null
        }),
        mounted() {
            this.keyboard = new Keyboard(this.keyboardClass, {
                onKeyPress: this.onKeyPress,
                theme: "hg-theme-default",
                physicalKeyboardHighlight: true,
                physicalKeyboardHighlightPress: true,
                layout:{
                    default: [
                        "{escape} f1 f2 f3 f4 f5 f6 f7 f8 f9 f10 f11 f12",
                        "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
                        "{tab} q w e r t y u i o p [ ] \\",
                        "{capslock} a s d f g h j k l ; ' {enter}",
                        "{shiftleft} z x c v b n m , . / {shiftright}",
                        "{controlleft} {altleft} {metaleft} space {metaright} {altright}"
                    ],
                    shift: [
                        "{escape} f1 f2 f3 f4 f5 f6 f7 f8 f9 f10 f11 f12",
                        "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
                        "{tab} Q W E R T Y U I O P { } |",
                        '{capslock} A S D F G H J K L : " {enter}',
                        "{shiftleft} Z X C V B N M < > ? {shiftright}",
                        "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"
                    ]
                },
                display: {
                    "{escape}": "esc ⎋",
                    "{tab}": "tab ⇥",
                    "{backspace}": "backspace ⌫",
                    "{enter}": "enter ↵",
                    "{capslock}": "caps lock ⇪",
                    "{shiftleft}": "shift ⇧",
                    "{shiftright}": "shift ⇧",
                    "{controlleft}": "ctrl ⌃",
                    "{controlright}": "ctrl ⌃",
                    "{altleft}": "alt ⌥",
                    "{altright}": "alt ⌥",
                    "{metaleft}": "cmd ⌘",
                    "{metaright}": "cmd ⌘"
                }
            });
        },
        methods: {
            onKeyPress(button) {
                if (button === "{backspace}") {
                    this.$store.dispatch('deleteSymbol')
                }
                else if (button === "{shiftleft}" || button === "{shiftright}" || button === "{lock}") this.handleShift()
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
            input(input) {
                this.keyboard.setInput(input);
            }
        }
    };
</script>