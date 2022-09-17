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
        }
    },
    mutations: {
        updateText(state, data){
            if (data === 'english'){
                console.log(data)
                getSomeEnglishText().then(res => state.textToPrint = res)
            }
            else getSomeRussianText().then(res => state.textToPrint = res)
        },
        addSymbol(state, data){
            state.printedText += data
        },
        deleteSymbol(state){
            state.printedText = state.printedText.slice(0, -1)
        }
    },
    state: {
        textToPrint: '',
        printedText: '',
        lang: 'english',
        accuracy: 100,
        speed: 0
    },
    getters: {
        getTextToPrint: state => state.textToPrint,
        getPrintedText: state => state.printedText,
        getLang: state =>  state.lang,
        getAccuracy: state => state.accuracy,
        getSpeed:  state => state.speed
    }
}