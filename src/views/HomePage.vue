<script setup>
import { onMounted, ref } from 'vue'
import useAPI from '@/composables/useAPI'

const api = useAPI()
const categories = ref([])

onMounted(async () => {
  categories.value = await api.getCategories()
})
</script>

<template>
  <div class="brand">
    <img class="logo" src="logo.svg" alt="logo" />
    <h1 class="title">Super Hard Trivia</h1>
    <img class="logo" src="logo.svg" alt="logo" />
  </div>
  <div class="categories">
    <RouterLink
      v-for="category in categories"
      :key="category.id"
      :to="`/question/category/${category.id}`"
      class="category"
    >
      {{ category.name }}
    </RouterLink>
  </div>
</template>

<style lang="postcss" scoped>
.brand {
  @apply flex items-center justify-center gap-4;

  & .logo {
    @apply h-16 w-16;
  }

  & .title {
    @apply text-6xl font-bold uppercase tracking-tighter text-blue-500;
  }
}

.categories {
  @apply grid flex-grow grid-cols-4 gap-12;

  & .category {
    @apply flex h-32 items-center justify-center rounded-lg border-4 border-blue-500 bg-green-100 py-4 text-center font-bold uppercase transition-colors duration-300;

    &:hover {
      @apply cursor-pointer border-blue-900 bg-green-300 text-slate-800;
    }
  }
}

</style>
