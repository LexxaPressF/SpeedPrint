
export default {
    actions: {
        addMistake(ctx){
            ctx.commit('addMistake')
        },
        startTimer(ctx){
            ctx.commit('startTimer')
        },
        stopTimer(ctx){
            ctx.commit('stopTimer')
        },
        clearCurrentMistakes(ctx){
            ctx.commit('clearCurrentMistakes')
        }
    },
    mutations: {
        addMistake(state){
            state.currentMistakesCount += 1
        },
        startTimer(state) {
            state.currentTimer = setInterval(()=> state.currentTimerValue += 1, 1000)
        },
        stopTimer(state) {
            clearInterval(state.currentTimer)
            state.currentTimerValue = 0
        },
        clearCurrentMistakes(state) {
            state.lastMistakesCount = state.currentMistakesCount
            state.lastTimerValue = state.currentTimerValue
            state.currentMistakesCount = 0
        }
    },
    state: {
        lastMistakesCount: 0,
        currentMistakesCount: 0,
        currentTimer: 0,
        lastTimerValue: 0,
        currentTimerValue: 0
    },
    getters: {
        getCurrentTimerValue: state => state.currentTimerValue,
        getLastTimerValue: state => state.lastTimerValue,
        getCurrentMistakesCount: state => state.currentMistakesCount,
        getLastMistakesCount: state => state.lastMistakesCount
    }
}