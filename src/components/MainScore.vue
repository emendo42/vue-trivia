<script setup>
import useScore from '@/composables/useScore.js'
const { score } = useScore()
</script>

<template>
  <p class="score">Score: {{ score }}</p>
</template>

<style lang="postcss" scoped>
.score {
  @apply absolute bottom-6 right-10  text-2xl font-bold uppercase text-green-200;
}
</style>
