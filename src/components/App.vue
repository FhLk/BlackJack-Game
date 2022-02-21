<script setup>
import { ref, computed } from "vue";
import card from "../../data/card";
// ตัวแปร
const deckCard = ref(card);
console.log(deckCard.value);
const item = ref({});
const playerCard = ref([]);
const computerCard = ref([]);
const playerStop = ref(false);
const computerStop = ref(false);
const regameButton = ref(false);
const historyButton = ref(false);
const historyGame = ref({player:0,computer:0})
// ฟังก์ชั่นเกม
const randomcomputer = () => {
  item.value =
    deckCard.value[Math.floor(Math.random() * deckCard.value.length)];
  computerCard.value.push(item.value);
  console.log(item.value);
};
const openHistory = () => {
  historyButton.value = true
}
const closeHistory = () => {
  historyButton.value = false;
}
const randomPlayer = () => {
  if (computerCard.value.length == 0) {
    randomcomputer();
  }
  item.value =
    deckCard.value[Math.floor(Math.random() * deckCard.value.length)];
  playerCard.value.push(item.value);
  console.log(item.value);
};

const regame = () => {
  playerCard.value = [];
  computerCard.value = [];
  playerStop.value = false;
  computerStop.value = false;
  regameButton.value = false;
  computerPlay()
};

const competitionScore = computed(() => {
  if (playerStop.value == true && computerStop.value == true) {
    if (calculatePlayer.value > 21) {
      regameButton.value = true;
      historyGame.value.computer++
      return "Player Bust,Computer Win";
    } else if (calculateComputer.value > 21) {
      regameButton.value = true;
       historyGame.value.player++
      return "Computer Bust, Player Win";
    } else if (calculatePlayer.value == 21) {
       historyGame.value.player++
      regameButton.value = true;
      return "Player Blackjack, Player Win";
    } else if (calculateComputer.value == 21) {
       historyGame.value.computer++
      regameButton.value = true;
      return "Computer Blackjack, Computer Win";
    } else if (calculatePlayer.value > calculateComputer.value) {
       historyGame.value.player++
      regameButton.value = true;
      return "Player Win";
    } else if (calculatePlayer.value < calculateComputer.value) {
      regameButton.value = true;
       historyGame.value.computer++
      return "Computer Win";
    } else {
      regameButton.value = true;
      return "Tie Game";
    }
  } else if (calculatePlayer.value > 21) {
    regameButton.value = true;
     historyGame.value.computer++
    return "Player Bust, Computer Win";
  } else if (calculateComputer.value > 21) {
    regameButton.value = true;
     historyGame.value.player++
    return "Computer Bust, Player Win";
  } else if (calculateComputer.value == 21) {
    regameButton.value = true;
     historyGame.value.computer++
    return "Computer Blackjack, Computer Win!";
  } else if (calculatePlayer.value == 21) {
    regameButton.value = true;
     historyGame.value.player++
    return "Player Blackjack, Player Win!";
  } else {
    return "";
  }
});

const calculatePlayer = computed(() => {
  let sum = ref(0);
  for (let i = 0; i < playerCard.value.length; i++) {
    sum.value += Number(playerCard.value[i].value);
    console.log(sum.value);
  }
  return sum.value;
});

const calculateComputer = computed(() => {
  let sum = ref(0);
  for (let i = 0; i < computerCard.value.length; i++) {
    sum.value += Number(computerCard.value[i].value);
    console.log(sum.value);
  }
  return sum.value;
});
// const item = deckCard.value[Math.floor(Math.random()*deckCard.value.length)];
const stopPlayer = () => {
  playerStop.value = true;
  while (computerStop.value == false) {
    if (calculateComputer.value > 16) {
      computerStop.value = true;
    } else {
      randomcomputer();
      // setTimeout(randomcomputer ,2000)
    }
  }
};
const stopComputer = () => {
  computerStop.value = true;
};
const computerPlay = () => {
  randomcomputer();
};
computerPlay();
</script>

<template>
  <div class="cardtable">
    <div>
      <div>
        <p class="scoresum">{{ competitionScore }}</p>
      </div>
      <div class="playcardzone">
        <p>Computer: {{ calculateComputer }}</p>
        <div class="zonecard">
          <div v-for="card in computerCard" :key="card">
            <img :src="card.image" alt="" class="imgcard" />
          </div>
        </div>
        <p>Player: {{ calculatePlayer }}</p>
        <div class="zonecard">
          <img class="imgcard" src="https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg" alt="" v-if="playerCard.length == 0">
          <div v-for="card in playerCard" :key="card" v-else>
            <img :src="card.image" alt="" class="imgcard" />
          </div>
        </div>
      </div>
      <!-- <div class="playButtonZone"> -->
      <!-- <div>
          <p>Computer</p>
          <button @click="randomcomputer">สุ่ม</button>
          <button @click="stopComputer">หยุด</button>
        </div> -->
      <div class="buttonCenter">
        <button
          @click="randomPlayer"
          class="buttonrandom"
          v-if="regameButton == false"
        >
          Draw
        </button>
        <button
          @click="stopPlayer"
          class="buttonstop"
          v-if="regameButton == false"
        >
          Stand
        </button>
        <button v-if="regameButton == true" @click="regame" class="buttonregame">Regame</button>
        <button v-if="regameButton == true && historyButton == false" class="buttonhistory" @click="openHistory">History</button>
        <button v-if="historyButton == true" class="buttonhistory" @click="closeHistory">Close History</button>
      </div>
      <div class="showHistory" v-if="historyButton">
        <p>Player: {{ historyGame.player }}</p>
        <p class="showHistoryScore">Computer: {{ historyGame.computer }}</p>
      </div>
      <!-- </div> -->

      <!-- <div class="playzonecard">
        <p>Computer Score: {{ calculateComputer }}</p>
        <p>Player Score: {{ calculatePlayer }}</p>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.zonecard {
  margin-top: 3%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.imgcard {
  width: 100px;
  height: 150px;
  margin-right: 30px;
}
.cardtable {
  padding-top:2rem;
  background-color: #2da042;
  height: 100vh;
}
.playcardzone {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 5%;
  margin-left: 5%;
}
.playButtonZone {
  display: flex;
  justify-content: space-between;
}
p {
  color: aliceblue;
}
.buttonCenter {
  margin-top: 5%;
  display: flex;
  justify-content: center;
}
.buttonstop {
  margin-left: 20px;
  width: 100px;
  height: 75px;
  background-color: #d30100;
  color: white;
  border: solid white 2px;
  border-radius: 20px;
}
.buttonrandom {
  width: 100px;
  height: 75px;
  color: white;
  background-color: #039bc0;
  border: solid white 2px;
  border-radius: 20px;
}
.buttonregame {
  width: 100px;
  height: 75px;
  color: white;
  background-color: #039bc0;
  border: solid white 2px;
  border-radius: 20px;
}

.buttonhistory {
   margin-left: 20px;
  width: 100px;
  height: 75px;
  color: white;
  background-color: #eb4f20;
  border: solid white 2px;
  border-radius: 20px;
}
.scoresum{
  text-align: center;
  font-size: 20px;
}
.showHistory{
  display:flex;
  justify-content: space-around;
}
@media only screen and (max-width: 600px) {
  .imgcard {
  width: 60px;
  height: 85px;
  margin-right: 10px;
}
.buttonCenter {
  margin-top: 5%;
  display: flex;
  justify-content: center;
}
.buttonstop {
  width: 100px;
  height: 75px;
}
.buttonrandom {
  width: 100px;
  height: 75px;
}
.buttonregame {
  width: 100px;
  height: 75px;
}

.buttonhistory {
  width: 100px;
  height: 75px;
}
}
/* .showHistoryScore{
  margin-left:100px;
} */
</style>
