<script setup>
import NavLink from "./NavLink.vue";

const navLinks = [
  {
    to: '/',
    slot: 'Home'
  },
  {
    to: '/benefits',
    slot: 'Benefits'
  },
  {
    to: '/about-us',
    slot: 'About us'
  },
  {
    to: '/register',
    slot: 'Register'
  },
  {
    to: '/login',
    slot: 'Login'
  },
]
</script>

<template>
  <nav class="flex items-center justify-between w-full h-12 border border-black bg-white rounded-xl overflow-hidden">
      <section class="flex items-center justify-center h-full w-32 bg-dark-orange ">
        <span class="text-sm text-white font-medium">PASAR</span>
      </section>
    <section class="divide-x divide-solid divide-black flex h-full w-fit border-l border-black">
        <NavLink v-for="(navLink, index) in navLinks"
                 :key="index"
                 :to="navLink.to"
                 :slot="navLink.slot"
                 :class="{'bg-secondary' : index === navLinks.length - 1}"/>
    </section>
  </nav>
</template>

