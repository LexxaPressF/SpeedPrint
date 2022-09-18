export default {
    actions: {},
    mutations: {},
    state: {
        rusLayout:{
            default: [
                "ё 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
                "{tab} й ц у к у н г ш щ з х ъ \\",
                "{capslock} ф ы в а п р о л д ж э {enter}",
                "{shiftleft} я ч с м и т ь б ю . {shiftright}",
                "{space}"
            ],
            shift: [
                "Ё ! @ # $ % ^ & * ( ) _ + {backspace}",
                "{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ /",
                "{capslock} Ф Ы В А П Р О Л Д Ж Э {enter}",
                "{shiftleft} Я Ч С М И Т Ь Б Ю ,{shiftright}",
                "{space}"
            ]
        },
        engLayout:{
            default: [
                "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
                "{tab} q w e r t y u i o p [ ] \\",
                "{capslock} a s d f g h j k l ; ' {enter}",
                "{shiftleft} z x c v b n m , . / {shiftright}",
                "{space}"
            ],
            shift: [
                "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
                "{tab} Q W E R T Y U I O P { } |",
                '{capslock} A S D F G H J K L : " {enter}',
                "{shiftleft} Z X C V B N M < > ? {shiftright}",
                "{space}"
            ]
        },
        display: {
            "{tab}": "tab ⇥",
            "{backspace}": "backspace ⌫",
            "{enter}": "enter ↵",
            "{capslock}": "caps lock ⇪",
            "{shiftleft}": "shift ⇧",
            "{shiftright}": "shift ⇧",
            "{controlleft}": "ctrl",
            "{controlright}": "ctrl",
            "{space}": " "
        }
    },
    getters:{
        getRusLayout: state => state.rusLayout,
        getEngLayout: state => state.engLayout,
        getDisplay: state => state.display
    }
}