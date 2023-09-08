import { createStore } from "vuex";
import keyboard from "@/store/keyboard";
import text from "@/store/text";
import indicators from "@/store/indicators";


const store = createStore({
    modules:{
        keyboard,
        text,
        indicators
    }
});

export default store;