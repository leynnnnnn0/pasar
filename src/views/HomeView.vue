<script setup>
import H1 from "../components/H1.vue";
import Navigation from "../components/Navigation.vue";
import Title from "../components/Title.vue";
import Paragraph from "../components/Paragraph.vue";
import PrimaryButton from "../components/PrimaryButton.vue";
</script>

<template>
  <div class="flex flex-col p-8 min-h-screen">
    <Navigation/>
    <section class="flex-1 flex flex-col items-center justify-center h-full w-full">
      <div class="flex flex-col gap-4 p-5 h-96 w-96 bg-primary border border-black rounded-lg shadow-thick shadow-dark-orange">
        <section>
          <Title class="text-lg" title="Upload a PDF file"/>
          <Paragraph>Upload a pdf file to get started.</Paragraph>
        </section>
        <section class="flex-1">
          <div class="relative flex gap-2 items-center justify-center border border-dashed rounded-lg h-24 w-full">
            <input type="file"  class="absolute inset-0 opacity-0 h-full w-full cursor-pointer">
            <img src="../assets/file-upload.svg" alt="file upload" class="h-10">
            <span class="underline">Click to upload file</span>
          </div>
        </section>
        <PrimaryButton class="self-end" title="Generate an Exam"/>
      </div>
    </section>
  </div>
</template>

