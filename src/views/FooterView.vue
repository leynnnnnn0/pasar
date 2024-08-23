<script setup>

import Title from "../components/Title.vue";
import Paragraph from "../components/Paragraph.vue";
</script>

<template>
    <div class="p-8">
      <div class="px-10 flex items-center justify-between border border-black bg-white h-16 rounded-lg shadow-thick w-full">
          <section>
            <Title title="Pasar"/>
            <Paragraph>Ace your exam easily.</Paragraph>
          </section>
          <section class="flex space-x-2">
            <button class="flex items-center justify-center w-9 h-9 border border-black rounded-lg bg-primary">

            </button>
            <button class="flex items-center justify-center w-9 h-9 border border-black rounded-lg bg-primary">

            </button>
            <button class="flex items-center justify-center w-9 h-9 border border-black rounded-lg bg-primary">

            </button>
          </section>
      </div>
    </div>
</template>
