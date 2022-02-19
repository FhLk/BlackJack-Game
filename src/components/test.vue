<script setup>
import { computed, ref } from 'vue';
const card=ref([1,2,3,4,5,6,7,8,9,10,11,12]);
const cardOfplayer=ref([])
const cardOfbotShow=ref(['?'])
const cardOfbotCal=ref([]);
const timetoDrawn=ref(0);
const isChoose=ref(false);
const isBotStop=ref();
const isBotDrawn=ref();
const isPlayerStop=ref();
const isPlayerDrwan=ref();
let red=ref('');
function randomCard(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

let firstofBot = randomCard(card.value)
cardOfbotCal.value.push(firstofBot)
card.value.splice(card.value.indexOf(firstofBot),1)
let secondofBot = randomCard(card.value)
cardOfbotCal.value.push(secondofBot);
cardOfbotShow.value.push(secondofBot);
card.value.splice(card.value.indexOf(secondofBot),1)

let firstofPlayer = randomCard(card.value)
card.value.splice(card.value.indexOf(firstofPlayer),1)
cardOfplayer.value.push(firstofPlayer)
let secondofPlayer = randomCard(card.value)
cardOfplayer.value.push(secondofPlayer)
card.value.splice(card.value.indexOf(secondofPlayer),1)

const sumOfplayer=computed(()=>{
  return cardOfplayer.value.reduce((p,c)=>{
    return p+c})
});

const sumOfbot=computed(()=>{
  return cardOfbotCal.value.reduce((p,c)=>{return p+c})
});

function BotDrawn(){
  setTimeout(()=>{
    red.value='color:red'
  },3000)
  setTimeout(()=>{
    let num=randomCard(card.value);
    cardOfbotShow.value.push(num)
    cardOfbotCal.value=[firstofBot,...cardOfbotShow.value.slice(1)];
    card.value.splice(card.value.indexOf(num),1)
    timetoDrawn.value=0;
    isChoose.value=false;
    red.value=''
  },6000)
}

function BotStop(){
  setTimeout(()=>{
    red.value='color:red'
  },3000)
  setTimeout(()=>{
    red.value=''
    timetoDrawn.value=0;
    isChoose.value=false;
    if(isBotStop.value==isPlayerStop.value){
      timetoDrawn.value=2;
    }
  },6000)
}

function Bot(){
  isChoose.value=true;
  if(sumOfbot.value<18){
    BotDrawn();
    isBotDrawn.value=true;
    isBotStop.value=false
  }
  else{
    BotStop();
    isBotDrawn.value=false;
    isBotStop.value=true;
  }
}

const Drawn=()=>{
  isPlayerDrwan.value=true;
  isPlayerStop.value=false;
  let num=randomCard(card.value);
  cardOfplayer.value.push(num)
  card.value.splice(card.value.indexOf(num),1)
  timetoDrawn.value=1;
  Bot();
}

const Stop =()=>{
  isPlayerDrwan.value=false;
  isPlayerStop.value=true;
  timetoDrawn.value=1;
  if(isBotStop.value==isPlayerStop.value){
    timetoDrawn.value=2
  }
  else{
    Bot();
  }
}

</script>
 
<template>
<p>Number: {{card}}</p>
<p>COM 1: {{timetoDrawn == 2 ?  cardOfbotCal:cardOfbotShow}} : <span v-show="timetoDrawn !=2 "> ? + </span>{{timetoDrawn==2 ? sumOfbot:sumOfbot-firstofBot}}</p>
<p v-show="isChoose"><span :style="sumOfbot < 18 ? red:''">Drawn</span>:<span :style="sumOfbot < 18 ? '':red">Stop</span></p>
<p v-if="timetoDrawn==0">-----Turn Of Player-----</p>
<p v-else-if="timetoDrawn==1">-----Turn Of COM1-----</p>
<p v-else>-----Result-----</p>
<button v-show="timetoDrawn==0" @click="Drawn">Drawn</button>
<button v-show="timetoDrawn==0" @click="Stop">Stop</button>
<p>Pleyer: {{cardOfplayer}} : {{sumOfplayer}}</p>
</template>
 
<style>

</style>