<script setup>
import Paragraph from "./Paragraph.vue";
import PrimaryButton from "./PrimaryButton.vue";
import GoogleButton from "./GoogleButton.vue";
import H1 from "./H1.vue";
</script>

<template>
  <div class="flex items-center justify-center w-full h-full absolute inset-0 bg-black/50">
    <div class="relative space-y-3 h-auto w-80 bg-white rounded-lg shadow-lg p-5">
      <button @click="$emit('hideSignup')" class="absolute top-5 right-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      </button>
      <div class="space-y-2">
        <H1 class="text-center">Signup</H1>
        <Paragraph class="text-center">Already have an account? <span class="underline">Login here</span></Paragraph>
      </div>
      <div class="space-y-1">
        <Paragraph>Email address</Paragraph>
        <input class="h-10 rounded-lg w-full border border-black/20" type="text">
      </div>
      <div class="space-y-1">
        <Paragraph>Password</Paragraph>
        <input class="h-10 rounded-lg w-full border border-black/20" type="text">
      </div>
      <div class="space-y-1">
        <Paragraph>Confirm Password</Paragraph>
        <input class="h-10 rounded-lg w-full border border-black/20" type="text">
      </div>
      <PrimaryButton class="w-full" title="Signup" />
      <GoogleButton>Signup with Google</GoogleButton>
    </div>
  </div>
</template>

