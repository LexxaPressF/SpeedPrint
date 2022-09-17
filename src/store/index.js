import { createStore } from "vuex";
import keyboard from "@/store/keyboard";
import text from "@/store/text";


const store = createStore({
    modules:{
        keyboard,
        text
    }
});

export default store;