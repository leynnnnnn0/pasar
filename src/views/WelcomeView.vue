<script setup>
import Navigation from "../components/Navigation.vue";
import Paragraph from "../components/Paragraph.vue";
import H1 from "../components/H1.vue";
import BenefitsView from "./BenefitsView.vue";
import FooterView from "./FooterView.vue";
import {ref} from "vue";
import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";
const showLoginForm = ref(false);
const showSignupForm = ref(false);

const handleSignup = () => {
  showSignupForm.value = !showSignupForm.value;
}
const handleLogin = () => {
  showLoginForm.value = !showLoginForm.value;
}



</script>

<template>
  <div class="flex flex-col p-8 min-h-screen">
    <LoginForm v-show="showLoginForm" @hide-login="handleLogin()"/>
    <SignupForm v-show="showSignupForm" @hide-signup="handleSignup()"/>
    <Navigation @signup-button="handleSignup()" @login-button="handleLogin()"/>
    <div class="flex-1 flex items-center justify-center gap-10">
      <section class="p-5 h-96 w-96 bg-secondary border border-black rounded-lg">
        <img src="/src/assets/home.svg" alt="">
      </section>
      <section class="flex flex-col w-[400px]">
          <span class="underline text-sm font-semibold">Welcome to Pasar</span>
          <H1>Transform Your Handouts into
            <span class="text-secondary">Personalized Exams</span></H1>
          <paragraph class="mt-3">
            Upload your class handouts and let our intelligent system generate custom exams to test your knowledge.
            Enhance your learning, track your progress, and ace your exams with Pasar!
          </paragraph>
        <RouterLink to="/" class="hover:bg-secondary transition-colors duration-300 text-sm w-fit mt-5 px-5 shadow-thick shadow-secondary py-2 border border-black rounded-lg font-bold">
          Get Started</RouterLink>
      </section>
    </div>
  </div>
  <BenefitsView/>
  <FooterView/>
</template>

