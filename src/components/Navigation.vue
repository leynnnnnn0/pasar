<script setup>
import NavLink from "./NavLink.vue";


const isAuthenticated = JSON.parse(window.localStorage.getItem('isAuthorized')).isAuthorized;
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

const signOut = () => {
  window.localStorage.setItem('isAuthorized', JSON.stringify({ 'isAuthorized': false }));
}
</script>

<template>
  <nav class="flex items-center justify-between min-w-full border border-black bg-white rounded-xl overflow-hidden md:h-12 h-10">
      <RouterLink to="/" class="cursor-pointer flex items-center justify-center h-full bg-dark-orange md:text-sm text-xs md:w-32 w-20">
        <span class="text-sm text-white font-medium">PASAR</span>
      </RouterLink>
    <section class="divide-x divide-solid divide-black md:flex h-full w-fit border-l border-black hidden">
        <NavLink v-for="(navLink, index) in navLinks"
                 :key="index"
                 :to="navLink.to"
                 :slot="navLink.slot"/>
        <button v-show="!isAuthenticated" @click="$emit('signupButton')" class="flex items-center justify-center h-full px-4 text-xs font-semibold">Signup</button>
        <button v-show="!isAuthenticated" @click="$emit('loginButton')" class="bg-secondary flex items-center justify-center h-full px-4 text-xs font-semibold">Login</button>
      <button v-show="isAuthenticated" @click="signOut" class="bg-secondary flex items-center justify-center h-full px-4 text-xs font-semibold">Logout</button>
    </section>
    <section class="mr-5 md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
    </section>
  </nav>
</template>

