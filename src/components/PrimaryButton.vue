<script setup>
defineProps({
  title: {
    type: String
  }
})
</script>

<template>
  <button class="hover:bg-secondary transition-colors duration-300 text-sm w-fit mt-5 px-5 shadow-thick shadow-secondary py-2 border border-black rounded-lg font-bold">
    {{ title }}</button>
</template>
