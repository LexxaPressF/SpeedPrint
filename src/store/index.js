import { createStore } from "vuex";
import {getSomeRussianText, getSomeEnglishText} from "@/API/text_generators";


const store = createStore({
    actions: {
        updateText(ctx, data){
            ctx.commit('updateText',data)
        }
    },
    mutations: {
        updateText(state, data){
            if (data === 'english'){
                console.log(data)
                getSomeEnglishText().then(res => state.textToPrint = res)
            }
            else getSomeRussianText().then(res => state.textToPrint = res)
        }
    },
    state: {
        textToPrint: '',
        lang: 'russian',
        accuracy: 100,
        speed: 0
    },
    getters: {
        getTextToPrint: state => state.textToPrint,
        getAccuracy: state => state.accuracy,
        getSpeed:  state => state.speed
    }
});

export default store;