<script setup>
import Title from "../components/Title.vue";
import Paragraph from "../components/Paragraph.vue";
import PrimaryButton from "../components/PrimaryButton.vue";
import Navigation from "../components/Navigation.vue";
import {ref} from "vue";

const showAnswers = ref(false);
const examsData = JSON.parse(window.localStorage.getItem('examData'));
const firstPart = examsData.slice(0, 15);
const secondPart = examsData.slice(15, 30);

const handleAnswers = () => {
  showAnswers.value = !showAnswers.value
}

const getCorrectAnswer = (answer, text) => {
  return answer.slice(0, 1) === text.slice(0, 1) ? 'p-1 rounded-lg text-white bg-green-500' : '';
}
</script>

<template>
  <div class="md:p-8 p-4">
    <Navigation/>
    <div class="flex justify-center w-full">
      <PrimaryButton @click="handleAnswers">{{ showAnswers ? 'Hide Answers' : 'Show Answers'}}</PrimaryButton>
    </div>
    <div class="md:grid-cols-2 p-10 grid grid-cols-1 gap-5 max-w-[900px] mx-auto">
      <section class="space-y-5">
        <div v-for="(exam, index) in firstPart" :key="index">
          <Title :title="(index + 1 + '. ').toString() + exam.question"/>
          <Paragraph class="font-semibold"  v-for="option in exam.options" :class="showAnswers && getCorrectAnswer(exam.answer, option)">{{ option }}</Paragraph>
        </div>
      </section>
      <section class="space-y-5">
        <div v-for="(exam, index) in secondPart" :key="index">
          <Title :title="(index + 16 + '. ').toString() + exam.question"/>
          <Paragraph class="font-semibold"  v-for="option in exam.options" :class="showAnswers && getCorrectAnswer(exam.answer, option)">{{ option }}</Paragraph>
        </div>
      </section>
    </div>
  </div>
</template>

