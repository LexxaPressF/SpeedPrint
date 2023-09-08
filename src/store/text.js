import {getSomeEnglishText, getSomeRussianText} from "@/API/text_generators";

export default {
    actions: {
        updateText(ctx, data){
            ctx.commit('updateText',data)
        },
        addSymbol(ctx, data){
            ctx.commit('addSymbol', data)
        },
        deleteSymbol(ctx){
            ctx.commit('deleteSymbol')
        },
        clearPrintedText(ctx){
            ctx.commit('clearPrintedText')
        },
        changeLang(ctx){
            ctx.commit('changeLang')
        }
    },
    mutations: {
        updateText(state, data){
            if (data === 'russian'){
                getSomeRussianText().then(res => {
                    state.textToPrint = res.text
                    state.arrayToPrint = res.lines
                })
            }
            else getSomeEnglishText().then(res => {
                state.textToPrint = res.text
                state.arrayToPrint = res.lines
            })
        },
        addSymbol(state, data){
            state.printedText += data
            state.printedArray.push(data)
        },
        deleteSymbol(state){
            state.printedText = state.printedText.slice(0, -1)
            state.printedArray.pop()
        },
        clearPrintedText(state) {
            state.printedText = ''
            state.printedArray = []
        },
        changeLang(state) {
            state.lang = state.lang === 'english' ? 'russian' : 'english'
            this.commit('updateText', state.lang)
            this.commit('clearPrintedText')
        }
    },
    state: {
        textToPrint: '',
        arrayToPrint: [],
        printedText: '',
        printedArray: [],
        lang: 'english',
    },
    getters: {
        getTextToPrint: state => state.textToPrint,
        getPrintedText: state => state.printedText,
        getArrayToPrint: state => state.arrayToPrint,
        getPrintedArray: state => state.printedArray,
        getLang: state =>  state.lang,
        getAccuracy: state => state.accuracy,
        getSpeed:  state => state.speed
    }
}