<script setup>
import Paragraph from "./Paragraph.vue";
import PrimaryButton from "./PrimaryButton.vue";
import GoogleButton from "./GoogleButton.vue";
import H1 from "./H1.vue";
import axios from "axios";
import {reactive} from "vue";
import ErrorText from "./ErrorText.vue";
import {useToast} from "vue-toastification";

const toast = useToast();

const form = reactive({
  username: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const formErrors = reactive({
  username: [],
  email: [],
  password: [],
  password_confirmation: []
});

function validateEmail(email) { const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/; return regex.test(email); }

const handleLogin = () => {
  formErrors.username = [];
  formErrors.email = [];
  formErrors.password = [];
  formErrors.password_confirmation = [];
  const {username, email, password, password_confirmation} = form;
  if(!username)
    formErrors.username.push('Username is required');
  if(username && username.length < 3)
    formErrors.username.push('Username should be at least 3 characters')
  if(!email)
    formErrors.email.push('Email is required');
  if(email && !validateEmail(email))
    formErrors.email.push('Invalid Email');
  if(!password)
    formErrors.password.push('Password is required')
  if(password && password.length < 8)
    formErrors.password.push('Password should be at least 8 characters.')
  if(formErrors.password.length === 0 && password_confirmation !== password)
    formErrors.password_confirmation.push('Password doesn\'t match.')

  if(formErrors.username === true && formErrors.email === true && formErrors.password === true && formErrors.password_confirmation === true ) {
    return;
  }
  const data = {
    username: username,
    email: email,
    password: password
  }

  axios.post('/api/api/user/create', data, {
    'Content-Type': 'application/json'
  }).then(result => {
    if(result.data.success){
      window.localStorage.setItem('isAuthorized', JSON.stringify({ 'isAuthorized': true }));
      window.localStorage.setItem('user', JSON.stringify(result.data.user));
    }
  })
      .catch(err => console.log(err))

}
</script>

<template>
  <div class="z-10 flex items-center justify-center w-full h-full fixed inset-0 bg-black/50">
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
        <Paragraph>Username</Paragraph>
        <input v-model="form.username" class="px-2 h-10 rounded-lg w-full border border-black/20" type="text">
        <ErrorText>{{ formErrors.username[0] }}</ErrorText>
      </div>
      <div class="space-y-1">
        <Paragraph>Email address</Paragraph>
        <input v-model="form.email" class="px-2 h-10 rounded-lg w-full border border-black/20" type="email">
        <ErrorText>{{ formErrors.email[0] }}</ErrorText>
      </div>
      <div class="space-y-1">
        <Paragraph>Password</Paragraph>
        <input v-model="form.password" class="px-2 h-10 rounded-lg w-full border border-black/20" type="password">
        <ErrorText>{{ formErrors.password[0] }}</ErrorText>
      </div>
      <div class="space-y-1">
        <Paragraph>Confirm Password</Paragraph>
        <input v-model="form.password_confirmation" class="px-2 h-10 rounded-lg w-full border border-black/20" type="password">
        <ErrorText>{{ formErrors.password_confirmation[0] }}</ErrorText>
      </div>
      <PrimaryButton @click='handleLogin' class="w-full" title="Signup" />
      <GoogleButton>Signup with Google</GoogleButton>
    </div>
  </div>
</template>

