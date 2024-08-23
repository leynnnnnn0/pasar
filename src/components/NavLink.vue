<script setup>
defineProps({
  to: {
    type: String
  },
  slot: {
    type: String
  }
})
</script>

<template>
  <RouterLink :to="to" class="flex items-center justify-center h-full px-4 text-xs font-semibold">{{ slot }}</RouterLink>
</template>

