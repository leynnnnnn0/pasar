<script setup>
import Title from "../components/Title.vue";
import Paragraph from "../components/Paragraph.vue";
import PrimaryButton from "../components/PrimaryButton.vue";
import Navigation from "../components/Navigation.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";
import H1 from "../components/H1.vue";
const router = useRouter();
const showAnswers = ref(false);
const examsData = JSON.parse(window.localStorage.getItem('examData'));

const handleAnswers = () => {
  showAnswers.value = !showAnswers.value
}

const getCorrectAnswer = (answer, text) => {
  return answer.slice(0, 1) === text.slice(0, 1) ? 'p-1 rounded-lg text-white bg-green-500' : '';
}
</script>

<template>
  <div class="flex flex-col md:p-8 p-4 min-h-screen">
    <Navigation/>
    <div class="flex-1 flex flex-col items-center justify-center" v-if="!examsData">
      <H1 class="text-center">Generate Quiz to Get Started.</H1>
      <PrimaryButton @click="router.push('/pdf-to-exam')">Generate Quiz</PrimaryButton>
    </div>
      <div v-if="examsData && examsData.length > 0" class="flex justify-center gap-5 w-full">
        <PrimaryButton @click="handleAnswers">{{ showAnswers ? 'Hide Answers' : 'Show Answers'}}</PrimaryButton>
      </div>
      <div v-if="examsData && examsData.length > 0"  class="md:grid-cols-2 p-10 grid grid-cols-1 gap-5 max-w-[900px] mx-auto">
        <section class="space-y-5">
          <div v-for="(exam, index) in examsData.slice(0, 15)" :key="index">
            <Title :title="(index + 1 + '. ').toString() + exam.question"/>
            <Paragraph class="font-semibold"  v-for="option in exam.options" :class="showAnswers && getCorrectAnswer(exam.answer, option)">{{ option }}</Paragraph>
          </div>
        </section>
        <section class="space-y-5">
          <div v-for="(exam, index) in examsData.slice(15, 30)" :key="index">
            <Title :title="(index + 16 + '. ').toString() + exam.question"/>
            <Paragraph class="font-semibold"  v-for="option in exam.options" :class="showAnswers && getCorrectAnswer(exam.answer, option)">{{ option }}</Paragraph>
          </div>
        </section>
      </div>
    </div>

</template>

