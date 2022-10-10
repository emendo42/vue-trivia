<script setup></script>

<template>
  <main>
    <div class="card">
      <RouterView />
    </div>
  </main>
  <p class="score">Score: 100</p>
</template>

<style lang="postcss" scoped>
main {
  @apply flex h-screen items-center justify-center bg-gradient-to-b from-green-200 via-green-300 to-blue-500;
  & .card {
    @apply flex h-5/6 min-h-fit w-11/12 flex-col items-center gap-16 overflow-auto rounded-xl bg-gray-200 p-8 shadow-xl;
  }
}

.score{
  @apply absolute bottom-6 right-10  text-2xl font-bold uppercase text-green-200;
}
</style>
