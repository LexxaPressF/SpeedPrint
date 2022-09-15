<template>
  <div class="main bg app" @mousemove="move_bg()">
    <div class="level behind_2"/>
    <div class="level behind_1"/>
    <div class="level rectangle">
      <insertion-field class="element"/>
      <indecators-frame class="element"/>
      <keyboard-frame class="element"/>
      <div class="empty"/>
      <div class="level front"/>
    </div>
  </div>
</template>

<script>

import KeyboardFrame from "@/components/KeyboardFrame";
import InsertionField from "@/components/InsertionField";
import IndecatorsFrame from "@/components/IndecatorsFrame";
export default {
  name: 'App',
  components: {
    IndecatorsFrame,
    InsertionField,
    KeyboardFrame
  },
  data(){
    return {
    }
  },
  methods:{
    move_bg(){
      console.log(event.clientX)
      let behind_1 = document.querySelector('.behind_1');
      let behind_2 = document.querySelector('.behind_2');
      let front = document.querySelector('.front');
      let x = event.clientX / window.innerWidth;
      let y = event.clientY / window.innerHeight;
      front.style.transform = 'translate(-' + x * 80 + 'px, -' + y * 80 + 'px)';
      behind_1.style.transform = 'translate(-' + x * 35 + 'px, -' + y * 35 + 'px)';
      behind_2.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  min-width: 600px;

  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url('./assets/background/background.png');

  overflow: hidden
}

.level{
  height: 105vh;
  width: 105vw;
  background-repeat: no-repeat;
  background-size: 105% 105%;
  background-position: center;
  grid-row: 1;
  grid-column: 1;
}

.behind_1{
  background-image: url('assets/background/bubbles behind_1.png');
  z-index:1
}

.behind_2{
  background-image: url('assets/background/bubbles behind_2.png');
  z-index: 2;
}
.rectangle{
  background-image: url('./assets/background/rectangle.png');
  z-index: 3;
  background-size: cover;

  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-rows: 50% 50%;
  grid-auto-columns: 10% auto 8% 10%;
}
.front{
  background-image: url('assets/background/front bubbles.png');
  grid-row: 1/2;
  grid-column: 1/4;
  z-index: 4;
}

.element{
  z-index: 5;
}

.main{
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
}

.empty{
  grid-row: 1/2;
  grid-column: 4;
}
</style>
