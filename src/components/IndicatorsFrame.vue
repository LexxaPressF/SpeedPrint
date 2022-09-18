<template>
<div class="bg indicators">
    <div class="wrapper">
        <div class="accuracy">
            <h1> Точность </h1>
            <p>тут будет значение</p>
        </div>
        <div class="speed">
            <h1> Скорость </h1>
            <p>тут будет значение</p>
        </div>
        <label class="langSwitcher">
            <input type="checkbox" class="checkbox" v-model="checked" />
            <span class="slider"></span>
        </label>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "IndecatorsFrame",
    data() {
      return{
          checked: false
    }
    },
    computed: {
      ...mapGetters({
          lang: 'getLang'
      })
    },
    watch: {
      checked(){
          this.$store.dispatch('changeLang')
      }
    }
}
</script>

<style scoped>
.indicators{
  grid-row: 1;
  grid-column: 3;
}

.wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    place-items: center;
}

/* From uiverse.io by @victoryamaykin */
.langSwitcher {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 34px;
}
.checkbox{
    width: 100%;
    height: 100%;
    z-index: 100;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #3C3C3C;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: #0E6EB8;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(85px);
}

.slider:after {
    content: 'ENGLISH';
    color: white;
    display: block;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    font-size: 10px;
    font-family: Verdana, sans-serif;
}

input:checked + .slider:after {
    content: 'RUSSIAN';
}

</style>