<script setup>
import NavLink from "./NavLink.vue";

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
</script>

<template>
  <nav class="flex items-center justify-between w-full h-12 border border-black bg-white rounded-xl overflow-hidden">
      <RouterLink to="/" class="cursor-pointer flex items-center justify-center h-full w-32 bg-dark-orange ">
        <span class="text-sm text-white font-medium">PASAR</span>
      </RouterLink>
    <section class="divide-x divide-solid divide-black flex h-full w-fit border-l border-black">
        <NavLink v-for="(navLink, index) in navLinks"
                 :key="index"
                 :to="navLink.to"
                 :slot="navLink.slot"/>
        <button @click="$emit('signupButton')" class="flex items-center justify-center h-full px-4 text-xs font-semibold">Signup</button>
        <button @click="$emit('loginButton')" class="bg-secondary flex items-center justify-center h-full px-4 text-xs font-semibold">Login</button>
    </section>
  </nav>
</template>

