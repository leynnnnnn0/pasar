<script setup>
  defineProps({
    title: {
      type: String
    }
  })
</script>

<template>
  <h1 class="text-sm font-bold">{{  title }}</h1>
</template>

