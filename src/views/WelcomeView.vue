<script setup>
import Navigation from "../components/Navigation.vue";
import Paragraph from "../components/Paragraph.vue";
import H1 from "../components/H1.vue";
import BenefitsView from "./BenefitsView.vue";
import FooterView from "./FooterView.vue";
import {ref} from "vue";
import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";
import PrimaryButton from "../components/PrimaryButton.vue";
import {useRouter} from "vue-router";

const router = useRouter();

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
  <div class="flex flex-col p-8 md:min-h-screen h-screen">
    <LoginForm v-show="showLoginForm" @hide-login="handleLogin()"/>
    <SignupForm v-show="showSignupForm" @hide-signup="handleSignup()"/>
    <Navigation @signup-button="handleSignup()" @login-button="handleLogin()"/>
    <div class="flex-1 flex items-center justify-center gap-10">
      <section class="p-5 h-96 w-96 bg-secondary border border-black rounded-lg md:block hidden">
        <img src="/src/assets/home.svg" alt="">
      </section>
      <section class="flex flex-col w-[400px]">
          <span class="underline text-sm font-semibold md:text-left text-center">Welcome to Pasar</span>
          <H1 class="md:text-left text-center">Transform Your Handouts into
            <span class="text-secondary md:text-left text-center">Personalized Exams</span></H1>
          <paragraph class="mt-3 md:text-left text-center">
            Upload your class handouts and let our intelligent system generate custom exams to test your knowledge.
            Enhance your learning, track your progress, and ace your exams with Pasar!
          </paragraph>
        <PrimaryButton class="md:self-start self-center" @click="router.push('/pdf-to-exam')" title="Get Started"/>
      </section>
    </div>
  </div>
  <BenefitsView/>
  <FooterView/>
</template>

