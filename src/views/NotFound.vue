<script setup lang="ts">
import router from '../router'
</script>

<template>
  <section class="mx-auto flex w-full flex-col items-center justify-center gap-4 px-5 py-20 text-center">
    <h1 class="text-6xl">
      Oisann!
    </h1>
    <div class="text-lg">
      <p>Siden du leter etter finnes ikke</p>
      <p>Feilmelding: <b>404</b></p>
    </div>
    <button
      class="rounded-full bg-alba-orange px-5 py-3 text-alba-yellow transition-all hover:bg-opacity-80 focus-visible:ring"
      @click="router.push('/')"
    >
      Tilbake til forsiden
    </button>
  </section>
</template>
