<script setup>
import { computed, reactive, ref } from 'vue';

const card=ref([1,2,3,4,5,6,7,8,9,10,11,12]);

function randomCard(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

const player=reactive({name:'',score:0,round:[]})
const bot=reactive({name:'',score:0,round:[]})


const cardOfplayer=ref([])

const cardOfbotShow=ref(['?'])
const cardOfbotCal=ref([]);

const timetoDrawn=ref(0);

const isChoose=ref(false);
const isBotStop=ref();
const isBotDrawn=ref();
const isPlayerStop=ref();
const isPlayerDrawn=ref();
const isPlay=ref(0);

let red=ref('');

let firstofBot=ref();
let secondofBot;
let firstofPlayer;
let secondofPlayer;

const sumOfplayer=computed(()=>{
  return cardOfplayer.value.reduce((p,c)=>{
    return p+c},0)
});

const sumOfbot=computed(()=>{
  return cardOfbotCal.value.reduce((p,c)=>{return p+c},0)
});

function Start(){ 
firstofBot.value = randomCard(card.value)
cardOfbotCal.value.push(firstofBot.value)
card.value.splice(card.value.indexOf(firstofBot.value),1)
secondofBot = randomCard(card.value)
cardOfbotCal.value.push(secondofBot);
cardOfbotShow.value.push(secondofBot);
card.value.splice(card.value.indexOf(secondofBot),1)

firstofPlayer = randomCard(card.value)
card.value.splice(card.value.indexOf(firstofPlayer),1)
cardOfplayer.value.push(firstofPlayer)
secondofPlayer = randomCard(card.value)
cardOfplayer.value.push(secondofPlayer)
card.value.splice(card.value.indexOf(secondofPlayer),1)
}
Start();

const play=()=>{
  isPlay.value++
}

const PlayerDrawn=()=>{
  if(card.value.length!=0){
    isPlayerDrawn.value=true;
    isPlayerStop.value=false;
    let num=randomCard(card.value);
    cardOfplayer.value.push(num)
    card.value.splice(card.value.indexOf(num),1)
    timetoDrawn.value=1;
    Bot();
  }
}

const PlayerStop =()=>{
  isPlayerDrawn.value=false;
  isPlayerStop.value=true;
  timetoDrawn.value=1;
  if(isBotStop.value==isPlayerStop.value){
    timetoDrawn.value=2
  }
  else{
    Bot();
  }
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

function BotDrawn(){
  setTimeout(()=>{
    red.value='color:red'
  },3000)
  setTimeout(()=>{
    if(card.value.length!=0){
      let num=randomCard(card.value);
      cardOfbotShow.value.push(num)
      cardOfbotCal.value=[firstofBot.value,...cardOfbotShow.value.slice(1)];
      card.value.splice(card.value.indexOf(num),1)
      timetoDrawn.value=0;
      isChoose.value=false;
      red.value=''
    }
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

const winnerRound=ref('')

const winRound=(sumOfplayer,sumOfbot)=>{
  if(sumOfplayer > 21 && sumOfbot > 21 ){
    winnerRound.value='Drawn'
    return 'Drawn';
  }

  if(sumOfplayer>sumOfbot && sumOfplayer <= 21 ){
    winnerRound.value=player.name
    return player.name
  }
  else if(sumOfplayer>sumOfbot && sumOfplayer > 21){
    winnerRound.value=bot.name
    return bot.name
  }

  if(sumOfplayer<sumOfbot && sumOfbot <=21){
    winnerRound.value= bot.name
    return bot.name;
  }
  else if(sumOfplayer<sumOfbot && sumOfbot > 21){
    winnerRound.value=player.name
    return player.name
  }
  else{
    winnerRound.value='Drawn'
    return'Drawn';
  }
}

const nextRound=()=>{
  if(winnerRound.value==player.name){
    player.score++
  }
  else if(winnerRound.value==bot.name){
    bot.score++
  }
  card.value=[1,2,3,4,5,6,7,8,9,10,11,12];
  cardOfplayer.value=[]
  cardOfbotShow.value=['?']
  cardOfbotCal.value=[]
  timetoDrawn.value=0
  isBotDrawn.value=undefined
  isBotStop.value=undefined
  isPlayerDrawn.value=undefined
  isPlayerStop.value=undefined
  Start() 
}

const winnerGame=computed(()=>{
  if(player.value.score==2){
    return 1
  }
  if(bot.value.score==2){
    return 2
  }
})
</script>
 
<template>
<p>{{card}}</p>

<button @click="play" v-show="isPlay==0">Play</button>

<div class="field-name" v-show="isPlay==1">
<p>Player Name: 
  <input type="text" placeholder="Player Name...." v-model="player.name">
</p>
<p>Com Name: 
  <input type="text" placeholder="Com Name...." v-model="bot.name">
</p>
<button @click="play">OK</button>
</div>

<div class="gameplay" v-show="isPlay==2">
<div class="field-game">
  <p>Score Board {{player.name}} {{player.score}}:{{bot.score}} {{bot.name}}</p>
<p>{{bot.name}}: {{timetoDrawn == 2 ?  cardOfbotCal:cardOfbotShow}} : <span v-show="timetoDrawn !=2 "> ? + </span>{{timetoDrawn==2 ? sumOfbot:sumOfbot-firstofBot}}</p>
<p v-show="isChoose"><span :style="sumOfbot < 18 ? red:''">Drawn</span>:<span :style="sumOfbot < 18 ? '':red">Stop</span></p>
<p v-if="timetoDrawn==0">-----Turn Of Player-----</p>
<p v-else-if="timetoDrawn==1">-----Turn Of COM1-----</p>
<p v-else>-----Result-----</p>
<div>
  <button v-show="timetoDrawn==0" @click="PlayerDrawn">Drawn</button>
  <button v-show="timetoDrawn==0" @click="PlayerStop">Stop</button>
</div>
<p>{{player.name}}: {{cardOfplayer}} : {{sumOfplayer}}</p>
</div>
<div class="winnerRound" v-show="timetoDrawn==2">
  THE WINNER THIS ROUND IS {{winRound(sumOfplayer,sumOfbot)}} score: +1
</div>
<button @click="nextRound" v-show="timetoDrawn==2" >Next Round</button>
</div>
</template>
 
<style>

</style>