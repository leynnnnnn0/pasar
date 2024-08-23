<script setup>

import {ref} from "vue";

const content = ref('');
const file = ref();

const fileUpload = (e) => {
  file.value = e.target.files[0];
}
const handleUpload = () => {
  const formData = new FormData();
  formData.append('pdfFile', file.value);


  fetch('http://localhost:8080/extract-text', {
    method: 'POST',
    body: formData,
  }).then(response => response.text())
      .then(text => content.value = text)
      .catch(err => console.log(err));
}
</script>

<template>
<!--  <RouterView/>-->
  <div class="flex flex-col">
    <input @change="fileUpload"  type="file" id="inpFile">
    <button @click="handleUpload" type="button" id="btnUpload">Upload</button>
    <textarea v-text="content" style="width: 300px; height: 150px" id="resultText" placeholder="Your PDF text will appear"></textarea>
  </div>
</template>

