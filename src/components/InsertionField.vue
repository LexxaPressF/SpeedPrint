<template>
<div class="bg insertion">
<div class="wrapper">
  <input :value="inputText" :disabled="1" class="input container"/>
  <div class="text container">
    <div class="limiter">
      <p v-for="line in arrayToPrint" :key="line">
        <span v-for="letter in line" :key="letter">{{letter}}</span>
      </p>
    </div>
  </div>
</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "InsertionField",
  computed:{
    ...mapGetters({
      arrayToPrint: "getArrayToPrint",
      inputText: "getPrintedText",
      printedArray: "getPrintedArray"
    })
  },
  created() {
    this.$store.dispatch('updateText', 'english')
  },
  watch:{
    inputText(){
      if (this.printedArray.length === 1){
        this.$store.dispatch('startTimer')
      }
      if (this.printedArray[this.printedArray.length - 1] !== this.arrayToPrint[0][this.printedArray.length - 1]){
        this.$store.dispatch('addMistake')
        this.$store.dispatch('deleteSymbol')
      }
      if (this.printedArray.length === this.arrayToPrint[0].length){
        this.$store.dispatch('clearPrintedText')
        this.$store.dispatch('clearCurrentMistakes')
        this.arrayToPrint.shift()
      }
    }
  }
}
</script>

<style scoped>
.insertion{
  grid-column: 2;
  grid-row: 1;

  display: flex;
  justify-content: center;
  place-items: center;
  padding: 20px
}

.container{
  padding: 20px;
  font-size: 20px;
  border-radius: 30px;
  backdrop-filter: blur(10px);
  box-shadow: 6px 6px 12px rgb(84, 198, 224),
  -6px -6px 12px rgb(253, 127, 153);
}

.input{
  width: 100%;
  font-size: 18px;
  height: 40px;
}

.wrapper{
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.text{
  height: 150px;
}

.limiter{
  height: 115px;
  width: 100%;
  overflow: hidden;
  text-overflow: clip;
}
</style>