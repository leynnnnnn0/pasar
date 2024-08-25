<script setup>
import NavLink from "./NavLink.vue";
import {useRoute} from "vue-router";
import Title from "./Title.vue";
import {ref} from "vue";

const route = useRoute();



const navLinks = [
  {
    to: '/',
    slot: 'Home'
  },
  {
    to: '/pdf-to-exam',
    slot: 'Generate Exam'
  },
  {
    to: '/exam',
    slot: 'Exam'
  },
]

const displayMobileMenu = ref(false);
const handleDisplayMenu = () => {
  displayMobileMenu.value = !displayMobileMenu.value;
}

</script>

<template>
  <div v-show="displayMobileMenu" class="flex flex-col items-center justify-center text-secondary gap-5 max-h-screen bg-primary fixed inset-0 z-50">
    <button @click="handleDisplayMenu" class="absolute top-5 right-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
      </svg>
    </button>
    <RouterLink v-for="(navLink, index) in navLinks"
                @click="handleDisplayMenu"
                class="text-3xl font-bold drop-shadow-2xl"
                :class="route.path === navLink.to ? 'text-blue-300' : ''"
                :key="index"
                :to="navLink.to">{{ navLink.slot }}</RouterLink>
  </div>
  <nav class="flex items-center justify-between min-w-full border border-black bg-white rounded-xl overflow-hidden md:h-12 h-10">
      <RouterLink to="/" class="cursor-pointer flex items-center justify-center h-full bg-dark-orange md:text-sm text-xs md:w-32 w-20">
        <img src="/src/assets/home.svg" class="w-5 mr-2" alt="logo"><span class="text-sm text-white font-medium">PASAR</span>
      </RouterLink>
    <section class="divide-x divide-solid divide-black md:flex h-full w-fit border-l border-black hidden">
        <NavLink v-for="(navLink, index) in navLinks"
                 :key="index"
                 :to="navLink.to"
                 :class="route.path === navLink.to ? 'bg-primary' : ''"
                 :slot="navLink.slot"/>
<!--        <button v-show="!isAuthenticated" @click="$emit('signupButton')" class="flex items-center justify-center h-full px-4 text-xs font-semibold">Signup</button>-->
<!--        <button v-show="!isAuthenticated" @click="$emit('loginButton')" class="bg-secondary flex items-center justify-center h-full px-4 text-xs font-semibold">Login</button>-->
<!--      <button v-show="isAuthenticated" @click="signOut" class="bg-secondary flex items-center justify-center h-full px-4 text-xs font-semibold">Logout</button>-->
    </section>
    <section @click="handleDisplayMenu" class="cursor-pointer mr-5 md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
    </section>
  </nav>
</template>

