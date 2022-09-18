<template>
 <div class="bg keyboard">
  <simple-keyboard/>
 </div>
</template>

<script>
 import SimpleKeyboard from "@/assets/Keyboard plug/Keyboard";

export default {
  name: "KeyboardFrame",
 components: {SimpleKeyboard}
}
</script>

<style scoped>
.keyboard{
  grid-row: 2;
  grid-column: 2/4;
 display: flex;
 place-items: center;
}


</style>