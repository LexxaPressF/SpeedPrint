<template>
<div class="bg insertion">
<div class="wrapper">
  <div class="text container">{{text}}</div>
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
    })
  },
  created() {
    this.$store.dispatch('updateText', 'russian')
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
  font-size: 1.3rem;
  /*color: white;*/
  border-radius: 30px;
  backdrop-filter: blur(10px);
  box-shadow: 8px 8px 15px rgb(84, 198, 224),
  -8px -8px 15px rgb(253, 127, 153);
}

</style>