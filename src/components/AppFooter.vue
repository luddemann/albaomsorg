<script setup lang="ts">
import albaLogo from '../assets/alba-logo.svg'
</script>

<template>
  <footer class="w-full bg-alba-dark-green px-5 py-20 text-alba-light-green">
    <div class="mx-auto flex max-w-screen-xl flex-col gap-12 md:flex-row md:gap-36 lg:gap-52">
      <img
        :src="albaLogo"
        class="self-start"
        alt=""
      >
      <div class="flex flex-col gap-6 font-light">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-20">
          <p>Organisasjonsnummer: <br> 931 776 932</p>
          <p>Mobilnummer: <br> 452 95 565</p>
        </div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-20">
          <p>Adresse: <br> Sars Gate 68, 0564 Oslo</p>
          <p>E-post: <br> alba.omsorg@gmail.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>
