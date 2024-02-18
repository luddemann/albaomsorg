<script setup lang="ts">
import albaLogo from '../assets/alba-logo.svg'
</script>

<template>
  <footer class="w-full bg-alba-dark-green py-20 text-alba-light-green">
    <div class="mx-auto flex max-w-screen-xl flex-col gap-12 px-5 md:flex-row md:gap-36 lg:gap-52">
      <img
        :src="albaLogo"
        class="self-start"
        alt=""
      >
      <div class="flex flex-col gap-6 font-light">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-20">
          <p>Organisasjonsnummer: <br> 931 776 932</p>
          <p>Mobilnummer: <br> <a href="tel:+4745295565">452 95 565</a></p>
        </div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-20">
          <p>Adresse: <br> Sars Gate 68, 0564 Oslo</p>
          <p>E-post: <br> kontakt@albaomsorg.no</p>
        </div>
      </div>
    </div>
  </footer>
</template>
