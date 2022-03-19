<script setup>
import ButtonPlay from './components/Front-Game/ButtonPlay.vue';
import InputName from './components/Front-Game/InputName.vue';

</script>
 
<template>
<div class="beforegame" v-show="isPlay !== 2">
    <ButtonPlay :isPlay="isPlay" @play="play" v-show="isPlay===0"/>
    <InputName :player="player" :isPlay="isPlay" @go="go" v-show="isPlay===1"/>
</div>
</template>
 
<style scoped>
.beforegame {
  background-color: #0b5345;
  color: white;
  font-family: "Jost", sans-serif;
  height: 81.30vh;
  padding-bottom: 11.75rem;
}

</style>