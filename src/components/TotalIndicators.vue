<template>
  <div class="bg total_indicators">
    <div class="wrapper">
      <div class="accuracy">
        <h1> Показатели последней строки </h1>
        <p>Допущено {{ mistakesCount }} ошибок</p>
        <p>Строка напечатана за {{secsToTimer}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TotalIndicators",
  computed: {
    ...mapGetters({
      mistakesCount: "getLastMistakesCount",
      lastTimerValue: "getLastTimerValue"
    }),
  secsToTimer(){
    let sec = this.lastTimerValue
    let min = parseInt(sec/60)
    if (sec-min*60 < 10) return `${min}:0${sec-min*60}`
    else return `${min}:${sec-min*60}`
  }
  },
}
</script>

<style scoped>
.total_indicators{
  grid-row: 2;
  grid-column: 2;
}

.wrapper{
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
  place-items: center;
}
p {
  text-align: center;
}


</style>