<script setup lang="ts">
import albaSimple from '../assets/alba-simple-logo.svg'
</script>

<template>
  <header class="mx-auto grid max-w-screen-xl grid-cols-3 items-center p-6">
    <router-link
      to="/"
      class="w-fit"
    >
      <img
        :src="albaSimple"
        alt=""
      >
    </router-link>
    <p class="mx-auto text-3xl text-alba-orange">
      Alba Omsorg
    </p>
    <div class="ml-auto flex items-center gap-10">
      <router-link
        to="/om-oss"
        class="text-alba-orange"
      >
        Om oss
      </router-link>
      <router-link
        to="/kontakt"
        class="rounded-full bg-alba-orange px-5 py-3 text-white"
      >
        Kontakt oss
      </router-link>
    </div>
  </header>
</template>
