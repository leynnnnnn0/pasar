<script setup>
import Navigation from "../components/Navigation.vue";
import Paragraph from "../components/Paragraph.vue";
import H1 from "../components/H1.vue";
import BenefitsView from "./BenefitsView.vue";
import FooterView from "./FooterView.vue";
import PrimaryButton from "../components/PrimaryButton.vue";
</script>

<template>
  <div class="flex flex-col p-8 min-h-screen">
    <Navigation/>
    <div class="flex-1 flex items-center justify-center gap-10">
      <section class="h-96 w-96 bg-secondary border border-black rounded-lg">
      <!--  TODO image-->
      </section>
      <section class="flex flex-col w-[400px]">
          <span class="underline text-sm font-semibold">Welcome to Pasar</span>
          <H1>Transform Your Handouts into
            <span class="text-secondary">Personalized Exams</span></H1>
          <paragraph class="mt-3">
            Upload your class handouts and let our intelligent system generate custom exams to test your knowledge.
            Enhance your learning, track your progress, and ace your exams with Pasar!
          </paragraph>
          <PrimaryButton title="Get Started"/>
      </section>
    </div>
  </div>
  <BenefitsView/>
  <FooterView/>
</template>

