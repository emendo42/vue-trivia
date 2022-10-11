<script setup>
const props = defineProps({
  difficulty: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p
    class="difficulty"
    :class="
      props.difficulty === 'easy' ? 'bg-green-700' : props.difficulty === 'medium' ? 'bg-yellow-600' : 'bg-red-500'
    "
  >
    {{ props.difficulty }}
  </p>
</template>

<style lang="postcss" scoped>
.difficulty {
  @apply absolute bottom-4 left-10 rounded-full  border-4 border-blue-700 px-4 py-2 font-bold capitalize text-green-200;
}
</style>
