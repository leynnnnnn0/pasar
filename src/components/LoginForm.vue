<script setup>
import Paragraph from "./Paragraph.vue";
import PrimaryButton from "./PrimaryButton.vue";
import GoogleButton from "./GoogleButton.vue";
import H1 from "./H1.vue";

function navigate(url) {
  window.location.href= url;
}

const auth = async () => {
  const response = await fetch('http://localhost:8080/api/auth', {
    method: 'POST'
  });
  const data = await response.json();
  console.log(data);
  navigate(data.url);
  console.log(data);
}

</script>

<template>
  <div class="z-10 flex items-center justify-center w-full h-full fixed inset-0 bg-black/50">
    <div class="relative space-y-3 h-auto w-80 bg-white rounded-lg shadow-lg p-5">
      <button @click="$emit('hideLogin')" class="absolute top-5 right-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      </button>
      <div class="space-y-2">
        <H1 class="text-center">Log in</H1>
        <Paragraph class="text-center">New to Pasar? <span class="underline">Sign up for free</span></Paragraph>
      </div>
      <div class="space-y-1">
        <Paragraph>Email address</Paragraph>
        <input class="h-10 rounded-lg w-full border border-black/20" type="text">
      </div>
      <div class="space-y-1">
        <Paragraph>Password</Paragraph>
        <input class="h-10 rounded-lg w-full border border-black/20" type="text">
      </div>
      <Paragraph class="underline text-end">Forget Password?</Paragraph>
      <PrimaryButton class="w-full" title="Login" />
      <GoogleButton @click="auth">Login with Google</GoogleButton>
    </div>
  </div>
</template>

