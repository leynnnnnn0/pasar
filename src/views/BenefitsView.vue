<script setup>

import H1 from "../components/H1.vue";
import Paragraph from "../components/Paragraph.vue";
import AboutContainer from "../components/AboutContainer.vue";

const benefits = [
  {
    "title": "Personalized Learning",
    "description": "Generate custom exams tailored to your specific course materials, ensuring relevance and targeted study focus."
  },
  {
    "title": "Time Efficiency",
    "description": "Quickly create practice tests without manually crafting questions, saving valuable study time."
  },
  {
    "title": "Comprehensive Coverage",
    "description": "Ensure all key topics from your handouts are included in the generated exams, preventing oversight of important material."
  },
  {
    "title": "Adaptive Difficulty",
    "description": "As you improve, the system can adjust question difficulty, providing a continuously challenging learning experience."
  },
  {
    "title": "Progress Tracking",
    "description": "Monitor your performance over time with detailed analytics, helping you identify strengths and areas for improvement."
  },
  {
    "title": "Flexible Study Options",
    "description": "Access your personalized exams anytime, anywhere, allowing for convenient study sessions that fit your schedule."
  }
]
</script>

<template>
    <div class="flex items-center justify-center gap-8 min-h-screen p-12">
      <section class="space-y-16">
        <section class="w-full flex flex-col items-center justify-center">
          <H1>Our Benefits</H1>
          <Paragraph class="max-w-[650px] font-semibold text-center mt-3">With an advanced web application that converts PDFs into exams, we streamline the process of creating assessments, making it easier for anyone to develop and administer tests efficiently.</Paragraph>
        </section>
        <section class="flex-1 max-w-[800px] mx-auto">
          <div class="grid md:grid-cols-3 grid-cols-1 gap-8 w-fit mx-auto">
            <AboutContainer v-for="(benefit, index) in benefits"
                            :key="index"
                            :context="benefit.title"
                            :paragraph="benefit.description"
                            class="mb-10"
            ></AboutContainer>
          </div>
        </section>
      </section>
    </div>
</template>
