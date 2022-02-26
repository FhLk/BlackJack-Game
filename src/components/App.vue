<script setup>
import { computed, reactive, ref } from 'vue';
const RuleButton = ref(true);
const centerStyle = "font-size: 20px; margin-top: 2%; font-weight: 600"
//Original Card
const card=ref([1,2,3,4,5,6,7,8,9,10,11,12]);
const cardCheat=[9,10,11,12];

//function randomCard
function randomCard(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

//Oject of Player
const player=reactive({name:'',score:0,round:[]})
const bot=reactive({name:'',score:0,round:[]})

//Card of Player
const cardOfplayer=ref([])

//Card of Bot 
const cardOfbotShow=ref(['?']) //use for Show
const cardOfbotCal=ref([]);// use for calculator

//use with tag html for show
const turn=ref(0); // use for change turn between player and bot (turn of player is 0, turn of bot is 1)
const isChoose=ref(false);// when bot thinking of choose
const isBotStop=ref();// when bot choose 'Stop' = true
const isPlayerStop=ref();// when player choose 'Stop' = true
const GameField=ref(true)
const isPlay=ref(0);//when Start this web

let red=ref('');// ux of bot

let firstofBot=ref();// first card of bot (use 'ref()' because it to be calculator on html)
let secondofBot;// second card of bot
let firstofPlayer;//first card of player
let secondofPlayer;//second card of player 
let round=ref(1)

//Calculator card of player
const sumOfplayer=computed(()=>{
  return cardOfplayer.value.reduce((p,c)=>{
    return p+c},0)
});

//Calculator card of bot
const sumOfbot=computed(()=>{
  return cardOfbotCal.value.reduce((p,c)=>{return p+c},0)
});

//when start first time this web-page
function Start(){ 
  if(bot.name.toLocaleLowerCase()=="gao"){
    firstofBot.value=randomCard(cardCheat)
    cardOfbotCal.value.push(firstofBot.value)
    card.value.splice(card.value.indexOf(firstofBot.value),1)
    
    secondofBot=21-firstofBot.value
    cardOfbotCal.value.push(secondofBot);//add card to card of bot use for show 
    cardOfbotShow.value.push(secondofBot);//add card to card of bot use for calculator
    card.value.splice(card.value.indexOf(secondofBot),1)
  }
  else{
firstofBot.value = randomCard(card.value)//get first card of bot
cardOfbotCal.value.push(firstofBot.value)//add card to card of bot use for calculator
card.value.splice(card.value.indexOf(firstofBot.value),1)// Remove card from original card
secondofBot = randomCard(card.value)//get second card of bot
cardOfbotCal.value.push(secondofBot);//add card to card of bot use for show 
cardOfbotShow.value.push(secondofBot);//add card to card of bot use for calculator
card.value.splice(card.value.indexOf(secondofBot),1)// Remove card from original card
  }

//player seem bot
firstofPlayer = randomCard(card.value)
card.value.splice(card.value.indexOf(firstofPlayer),1)
cardOfplayer.value.push(firstofPlayer)
secondofPlayer = randomCard(card.value)
cardOfplayer.value.push(secondofPlayer)
card.value.splice(card.value.indexOf(secondofPlayer),1)
}

const CheckName=(playerName,BotName)=>{
  if(playerName==''&&BotName==''){
    return true
  }
  else{
    return false
  }
}


//Game play of player
//when player clink Drawn
const PlayerDrawn=()=>{
  if(card.value.length!=0){// if orifinal card not empty
    isPlayerStop.value=false;// assigned 'isPlayerStop' use for any process
    let num=randomCard(card.value);//get card from random original card
    cardOfplayer.value.push(num)//add card to card of player
    card.value.splice(card.value.indexOf(num),1)// Remove card from original card
    turn.value=1;//change turn to bot
    Bot();//bot turn
  }
}
//when player clink Stop
const PlayerStop =()=>{
  isPlayerStop.value=true;// assigned 'isPlayerStop' use for any process
  turn.value=1;//change turn to bot
  if(isPlayerStop.value==isBotStop.value){//if player click stop and bot choose stop
    turn.value=2//change to turn of result
  }
  else{
    Bot();//bot turn 
  }
}

//Game play of Bot
function Bot(){
  isChoose.value=true;//assigned 'isChoose' use for show tag html
  //Check condition
  if(sumOfbot.value<18){// if Calculator card of bot less than 18
    BotDrawn();//Bot Choose Drawn
    isBotStop.value=false//assigned 'isBotStop' use for process
  }
  else{//if more than 18
    BotStop();//Bot choose Stop
    isBotStop.value=true;//assigned 'isBotStop' use for process
  }
}

//if Bot choose Drawn
function BotDrawn(){
  //tell to player that bot choose this 
  setTimeout(()=>{
    red.value='color:red'//change font-color to red
  },3000)

  //seem player clink drawn crad
  setTimeout(()=>{
    if(card.value.length!=0){
      let num=randomCard(card.value);
      cardOfbotShow.value.push(num)

      //make card of bot use for calculator = card of bot use for show, trim index 0 of card of bot use for show
      cardOfbotCal.value=[firstofBot.value,...cardOfbotShow.value.slice(1)];

      card.value.splice(card.value.indexOf(num),1)
      turn.value=0;
      isChoose.value=false;
      red.value=''
    }
  },6000)
}

//if Bot choose Stop
function BotStop(){
  //tell to player that bot choose this 
  setTimeout(()=>{
    red.value='color:red'
  },3000)

  //seem player click Stop
  setTimeout(()=>{
    red.value=''
    turn.value=0;
    isChoose.value=false;

    //if player click stop and bot choose stop
    if(isBotStop.value==isPlayerStop.value){
      turn.value=2;//change to turn of result
    }
  },6000)
}

//find the winner this round
const winnerRound=ref('')
//Get Sum of Bot and player to find winner this round 
const winRound=(sumOfplayer,sumOfbot)=>{
  //check condition and assigned value to 'winnerRound'
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

//when click start new round
const nextRound=()=>{
  round.value++
  //increase score from check condition by name 
  if(winnerRound.value==player.name){
    player.score++
    player.round.push("Win")
    bot.round.push("Lose")
  }
  else if(winnerRound.value==bot.name){
    bot.score++
    player.round.push("Lose")
    bot.round.push("Win")
  }
  else{
    player.round.push("Drawn")
    bot.round.push("Drawn")
  }
  //reset value and restart round
  card.value=[1,2,3,4,5,6,7,8,9,10,11,12];
  cardOfplayer.value=[]
  cardOfbotShow.value=['?']
  cardOfbotCal.value=[]
  turn.value=0
  isBotStop.value=undefined
  isPlayerStop.value=undefined
  Start() 
}

//use for show tag html 
const play=()=>{
  isPlay.value++
  if(isPlay.value==2){
    Start();// call function for start game
  }
}

const winGame=(scoreplayer,scorebot)=>{
  if(scoreplayer == 2){
    GameField.value=false
    return player.name
  }
  else if(scorebot==2){
    GameField.value=false
    return bot.name
  }
}

const restartGame=()=>{
  card.value=[1,2,3,4,5,6,7,8,9,10,11,12];
  cardOfplayer.value=[]
  cardOfbotShow.value=['?']
  cardOfbotCal.value=[]
  turn.value=0
  GameField.value=true
  player.score=0
  player.round=[]
  bot.score=0
  bot.round=[]
  isBotStop.value=undefined
  isPlayerStop.value=undefined
  round.value = 1
  Start()
}

const endGame=()=>{
  location.reload();
}
const closeRule = () => {
  RuleButton.value = false;
}
</script>
 
<template>
  <div class="body" >
 
    <div class="playbuttondiv">
      <h1 class="header" v-show="isPlay == 0">BlackJack Game</h1>
      <button @click="play" v-show="isPlay == 0" class="playbutton">
        Play
      </button>
    </div>

    <div class="field-name" v-show="isPlay == 1">
      <div class="field-topic">
        <h2>WELCOME TO BLACKJACK GAMES !</h2>
      </div>
      <div class="field-name-text">         
        <!--<label class="field-name-text-text">Player Name :</label>-->
        <input
          type="text"
          placeholder="Player Name...."
          v-model="player.name"
          class="field-name-text-text-input"
        />
      </div>
      <div class="field-name-text">
        <!--<label class="field-name-text-text">Computer Name :</label>-->
        <input
          type="text"
          placeholder="Computer Name...."
          v-model="bot.name"
          class="field-name-text-text-input"
        />
      </div>
      <div class="ok-button-div">
        <button @click="play" class="ok-button" :disabled="CheckName(player.name,bot.name)">OK</button>
      </div>
    </div>
<div class="game-mix" v-show="isPlay == 2">
    <div class="gameplay" v-show="isPlay == 2">
      <div class="rule" v-if="RuleButton == true">
        <div class="rule-header">
          <div class="rule-title">BlackJack Rule</div>
          <button class="close-rule"
            @click="closeRule"
            >&times;</button>
        </div>
        <div class="rule-body">
          <p style="color: white;">- สุ่มจับการ์ด</p>
          <p style="color: white;">- นำค่าของการ์ดที่ได้มาบวกกันให้เท่ากับหรือใกล้เคียง 21 มากที่สุด</p>
          <p style="color: white;">- หากผู้เล่นคนใดมีค่าเท่ากับหรือใกล้เคียงมากที่สุด จะเป็นผู้ชนะ</p>
        </div>
      </div>

     
      <div class="field-game" v-show="GameField">
        <p class="score-board">
          Score Board <br>
          {{ player.name }} | {{ player.score }} : {{ bot.score }} | {{ bot.name }} <br>
          Round : {{round}}
        </p>
        <p class="player-score">
          {{ bot.name }} :
          {{ turn == 2 ? sumOfbot : sumOfbot - firstofBot }}
        </p>
        <div v-if="turn == 2" class="card-card-div">
          <div v-for="card in cardOfbotCal" :key="card" class="card-card-bot">
            <p class="card-card-text-bot">{{ card }}</p>
          </div>
        </div>
        <div v-else class="card-card-div">
          <div v-for="card in cardOfbotShow" :key="card" class="card-card-bot">
            <p class="card-card-text-bot">{{ card }}</p>
          </div>  
        </div>
      </div>
      
        <div class="center">
          <p v-show="isChoose" class="text-choose">
            <span :style="sumOfbot < 18 ? 'color : #b51010' : ''">DRAW</span> : 
            <span :style="sumOfbot < 18 ? '' : 'color : #b51010'"> STAY</span
            >
          </p>
          <p :style="centerStyle" v-if="turn == 0">Turn Of {{ player.name }}</p>
          <p :style="centerStyle" v-else-if="turn == 1">Turn Of {{bot.name}}</p>
          <div v-else>
            <p :style="centerStyle">----- Result -----</p>
            <div class="winnerRound" v-show="turn == 2">
              THE WINNER THIS ROUND IS
              {{ winRound(sumOfplayer, sumOfbot) }} score: +1
            </div>
            <button @click="nextRound" v-show="turn == 2" class="button-next">Next Round</button>
          </div>
        </div> 
        <div class="button-choose-player-div">
          <button
            v-show="turn == 0"
            @click="PlayerDrawn"
            class="button-choose-player-left"
          >
            DRAW
          </button>
          <button
            v-show="turn == 0"
            @click="PlayerStop"
            class="button-choose-player-right"
          >
            STAY
          </button>
        </div>
        <p class="player-score">{{ player.name }} : {{ sumOfplayer }}</p>
        <div class="card-card-div">
          <div v-for="card in cardOfplayer" :key="card" class="card-card">
            <p class="card-card-text">{{ card }}</p>
          </div>
        </div>
      </div>
      
      <p class="history" v-show="player.round.length !=0" style="font-weight: 520;">History Round
  <ul>
    {{player.name}}
    <li v-for="(result,index) in player.round" :key="index">Round {{index+1}} : {{result}}
      <span v-if="result=='Win'">Score : +1</span>
      <span v-else>Score +0</span>
    </li>
    {{bot.name}}
     <li v-for="(result,index) in bot.round" :key="index">Round {{index+1}} : {{result}}
      <span v-if="result=='Win'">Score : +1</span>
      <span v-else>Score +0</span>
    </li>
  </ul>
</p>

<div class ="final-mix" v-show="GameField==false">
    <div class="final-field" v-show="GameField==false">
      <div class="winnerGame">
        THE WINNER GAME IS {{winGame(player.score,bot.score)}} !!!!!!
      </div>
    <div class="final-field-button">
      <button class="restartButton" @click="restartGame">Play Agian</button>
      <button class="endGame" @click="endGame">End Game</button>
    </div>
    </div>
    </div>
  </div>
  </div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap');
.body , .html {
  background-color: #0B5345;
   animation: body  4s ease infinite;;
  color: white;
  font-family: 'Jost', sans-serif;
  background-size: cover;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
}


@keyframes body{
  from {background-color: #0B5345;}
  to {background-color: black;}
  /* to {background-color: #7DCEA0 ;} */
}
.header{
  margin-bottom: 30px;
  font-size: 50px;
}
.history{
  margin-top: 2%;
  padding-left: 2%;
  font-size: 25px;
  background-color: #0B5345;
}
.rule{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 10px;
  z-index: 10;
  background-color: black;
  width: 650px;
  max-width: 80%;
  color: white;
  border: white 2px solid;
  box-shadow: 2px 2px 2px 2px white;
}
.rule-header{
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
}
.rule-header .rule-title{
  font-size: 35px;
  font-weight: bold;
  padding-left: 1%;
}
.rule-header .close-rule{
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  font-size: 35px;
  font-weight: bold;
  
}
.close-rule{
  color: white;
}
.rule-header .close-rule:hover{
  color: red;
}
.rule-body{
  padding: 10px 15px;
  font-size: 20px;
  font-weight: bold;
  padding-left: 6%;

}
.game-mix{
  background-color: #0B5345;
   
}
.gameplay{
  padding-left: 5%;
}
.winnerRound {
  font-size: 20px; 
  margin-bottom: 2%;
}

.playbutton {
  width: 200px;
  height: 85px;
  font-size: 30px;
  background-color: white;
  color: #11856d;
  border: white 5px solid;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 2px rgba(36, 36, 36, 0.507);
}
.playbutton:hover{
 
  background-color: black;
  color: white;
  border: white 5px solid;
}
.playbuttondiv {
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  text-align: center;
}
.field-name {
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  text-align: center;     
}
::placeholder {
  color: rgba(54, 54, 54, 0.815);
  padding: 10px;
}
.field-name-text {
  border-radius: 100px;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-content: center;
  
}
.field-name-text-text {
  margin-top: 1rem;
  margin-right: 20px;
}
.field-name-text-text-input {
  margin-left: 11px;
  width: 85%;
  border: solid #11856d;
  border-radius: 5px;
  height: 65px;
  box-shadow: 5px 5px 10px 2px rgba(36, 36, 36, 0.507);
}
.field-name-text-text-input:hover{
  border-color: #69bdac;
}
.final-mix{
  background-color:black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 5px;
  z-index: 10;
  width: 500px;
  height: 150px;
  max-width: 90%;
  color: white;
  border: white 2px solid;
  box-shadow: 5px 5px 10px 2px white;
}
.winnerGame{
  font-size: 30px;
  text-align: center;
  color:white;
  font-weight: bold;
}
.final-field-button{
  margin-top: 2%;
  display: flex;
  justify-content:space-around;
   
}
.restartButton{
  width: 120px;
  height: 55px;
  font-weight: 700;
  background-color: white;
  color: #177428;
  border: white 5px solid;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 2px rgba(36, 36, 36, 0.507);
}
.restartButton:hover{
  background-color: #0B5345;
  color: white;
  border: white 5px ;
}
.endGame{
  width: 120px;
  height: 55px;
  font-weight: 700;
  background-color: white;
  color: black;
  border: white 5px solid;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 2px rgba(36, 36, 36, 0.507);
}
.endGame:hover{
  background-color: red;
  color: white;
  border: white 5px ;
}
.ok-button-div {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
.ok-button {
  cursor: pointer;
  font-weight: 700;
  width: 100px;
  height: 50px;
  background-color: white;
  color: #2da042;
  border: white 5px solid;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 2px rgba(36, 36, 36, 0.507);
}
.ok-button:hover{
  background-color: #177428;
  color: white;
  border: #177428 5px solid;
}
.score-board {
  font-size: 26px;
  text-align: center;
  padding-top: 2%;
}
.card-card {
  background-image:url('/images/bg-card-4.jpg') ;
  background-size: cover;
  font-size: 50px;
  font-family: 'Gill Sans MT';
  text-align: center;
  width: 150px;
  height: 200px;
  border: 2px solid ;
  border-radius: 10px;
  background-color: white;
  box-shadow: 5px 5px 10px 2px rgba(36, 36, 36, 0.507);
}
.card-card-bot{
  background-image:url('/images/bg-card-4.jpg') ;
  background-size: cover;
  font-size: 50px;
  font-family: 'Gill Sans MT';
  text-align: center;
  width: 115px;
  height: 150px;
  border: 2px solid ;
  border-radius: 10px;
  background-color: white;
  box-shadow: 5px 5px 10px 2px rgba(36, 36, 36, 0.507);
}
.card-card-div {
  display: flex;
  justify-content: space-evenly;

}
.card-card-text-bot {
  margin-top: 45px;
  color: black;
}
.card-card-text {
  margin-top: 55px;
  color: black;
}
.player-score {
  /* font-size: 15px; */
  text-align: center;
  position: relative;
  width: 4.4rem;
  height: 4.4rem;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 2em;
  background: #eff0fc;
  border-radius: 50%;
  color: #0c2430;
}
.button-choose-player-div {
  display: flex;
  justify-content: center;
}
.button-choose-player-left {
  width: 120px;
  height: 55px;
  font-weight: 700;
  background-color: white;
  color: #177428;
  border: white 5px solid;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 2px rgba(36, 36, 36, 0.507);
}
.button-choose-player-left:hover{
  background-color: #177428;
  border: #177428 5px solid;
  color: white;
}
.button-choose-player-right {
  margin-left: 100px;
  width: 120px;
  height: 55px;
  font-weight: 700;
  background-color: white;
  color: #b51010;
  border: white 5px solid;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 2px rgba(36, 36, 36, 0.507);
}
.button-choose-player-right:hover{
  background-color: #b51010;
  border: #b51010 5px solid;
  color: white;
}
.center {
  text-align: center;
}
.text-choose {
  font-size: 30px;
  margin-top: 2%;
}
.button-next {
  width: 120px;
  height: 70px;
  font-weight: 700;
  background-color: #4446c2;
  color: white;
  border: #4446c2 5px solid;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 2px rgba(36, 36, 36, 0.507);
}
.button-next:hover{
  background-color: white;
  color: #4446c2;
  border: white 5px solid;
}

</style>