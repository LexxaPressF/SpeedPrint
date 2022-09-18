<template>
<div class="bg insertion">
<div class="wrapper">
  <input :value="input" :disabled="1" class="input container"/>
  <div class="text container">
    <div class="limiter">
      <p v-for="line in charArray" :key="line">
        <span v-for="letter in line" :key="letter">{{letter}}</span>
      </p>
      {{text}}
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
      text: "getTextToPrint",
      charArray: "getArrayToPrint",
      input: "getPrintedText"
    })
  },
  created() {
    this.$store.dispatch('updateText', 'english')
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