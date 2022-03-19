<script setup>import { ref } from 'vue';

// const props=defineProps({
//     RuleButton:{
//         type: Boolean,
//         require: true
//     }
// });

const RuleButton =ref(true)

const closeRule = () => {
  RuleButton.value = false;
}

</script>
 
<template>
<div class="rule" v-if="RuleButton == true">
        <div class="rule-header">
          <div class="rule-title">BlackJack Rule</div>
          <button class="close-rule" @click="closeRule">&times;</button>
        </div>
        <div class="rule-body">
          <p
            style="color: black;"
          >- ผู้เล่นจะต้องนำค่าของการ์ดที่ได้มาบวกกันให้เท่ากับหรือใกล้เคียง 21 มากที่สุด</p>
          <p style="color: black;">
            - โดยจะสามารถเลือก
            <a style="color: #11856d;">Draw</a> เพื่อจั่วการ์ดเพิ่ม หรือ
            <a style="color: #b51010;">Stay</a> เพื่อไม่จั่วการ์ด
          </p>
          <p
            style="color: black;"
          >- หากผู้เล่นฝ่ายใดมีค่าเท่ากับหรือใกล้เคียง 21 มากที่สุด จะเป็นผู้ชนะ</p>
          <p style="color: black;">- ในกรณีที่ฝ่ายใดมีค่ามากกว่า 21 จะหมดสิทธิ์ชนะในทันที</p>
          <p style="color: black;">- แต่หากทั้งคู่มีค่ามากกว่า 21 จะถือว่าเสมอ</p>
          <p style="color: black;">- ถ้า ชนะ จะได้ 1 คะแนน แต่ถ้า แพ้หรือเสมอ จะได้ 0 ใครได้ 2 คะแนนก่อนเป็นผู้ชนะ Game</p>
        </div>
      </div>
</template>
 
<style scoped>

</style>