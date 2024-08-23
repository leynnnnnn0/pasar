<script setup>
import Paragraph from "./Paragraph.vue";
import Title from "./Title.vue";

defineProps({
  context: {
    type: String
  },
  paragraph: {
    type: String
  }
})
</script>

<template>
  <div class="relative flex flex-col justify-center h-36 w-60 p-4 bg-white border border-black rounded-lg shadow-thick">
    <div class="absolute -top-5  flex items-center justify-center w-9 h-9 border border-black rounded-lg bg-primary">

    </div>
    <Title :title="context"/>
    <Paragraph class="mt-2">{{ paragraph}}</Paragraph>
  </div>
</template>

