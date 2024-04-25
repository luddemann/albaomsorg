<script setup lang="ts">
import Maria from '../assets/maria.png'
import Theo from '../assets/theo.png'
import Trude from '../assets/Trude.png'
</script>

<template>
  <section class="bg-alba-yellow text-alba-orange">
    <div class="mx-auto grid h-full max-w-screen-xl grid-cols-1 content-center gap-6 px-5 py-36 md:grid-cols-2">
      <div class="space-y-12">
        <h1 class="text-4xl md:text-6xl">
          Kontakt oss
        </h1>
        <div class="space-y-6 text-lg">
          <p>Adresse: <br> Sars Gate 68, 0564 Oslo</p>
          <p>Mobilnummer: <br> <a href="tel:+4722722818">22 72 28 18</a></p>
          <p>E-post: <br> kontakt@albaomsorg.no</p>
        </div>
      </div>
      <!--      <form-->
      <!--        name="contact"-->
      <!--        method="POST"-->
      <!--        class="space-y-6"-->
      <!--        netlify-->
      <!--      >-->
      <!--        <div class="flex w-full gap-6">-->
      <!--          <div class="flex w-full flex-col gap-1">-->
      <!--            <label for="name-input">Navn:</label>-->
      <!--            <input-->
      <!--              id="firstname-input"-->
      <!--              type="text"-->
      <!--              name="firstName"-->
      <!--              autocomplete="given-name"-->
      <!--              class="rounded-lg border-2 border-alba-orange bg-transparent px-4 py-2"-->
      <!--              required-->
      <!--            >-->
      <!--          </div>-->
      <!--          <div class="flex w-full flex-col gap-1">-->
      <!--            <label for="lastname-input">Etternavn:</label>-->
      <!--            <input-->
      <!--              id="lastname-input"-->
      <!--              type="text"-->
      <!--              name="lastName"-->
      <!--              autocomplete="family-name"-->
      <!--              class="rounded-lg border-2 border-alba-orange bg-transparent px-4 py-2"-->
      <!--              required-->
      <!--            >-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="flex flex-col gap-1">-->
      <!--          <label for="email-input">E-post:</label>-->
      <!--          <input-->
      <!--            id="email-input"-->
      <!--            type="email"-->
      <!--            name="email"-->
      <!--            class="rounded-lg border-2 border-alba-orange bg-transparent px-4 py-2"-->
      <!--            required-->
      <!--          >-->
      <!--        </div>-->
      <!--        <div class="flex flex-col gap-1">-->
      <!--          <label for="phone-input">Telefon:</label>-->
      <!--          <input-->
      <!--            id="phone-input"-->
      <!--            type="tel"-->
      <!--            name="telephone"-->
      <!--            class="rounded-lg border-2 border-alba-orange bg-transparent px-4 py-2"-->
      <!--          >-->
      <!--        </div>-->
      <!--        <div class="flex flex-col gap-1">-->
      <!--          <label for="message-input">Melding:</label>-->
      <!--          <textarea-->
      <!--            id="message-input"-->
      <!--            type="text"-->
      <!--            name="message"-->
      <!--            rows="4"-->
      <!--            class="rounded-lg border-2 border-alba-orange bg-transparent px-4 py-2"-->
      <!--            required-->
      <!--          />-->
      <!--        </div>-->
      <!--        <p>-->
      <!--          <button-->
      <!--            class="rounded-full bg-alba-orange px-5 py-3 text-alba-yellow transition-all hover:opacity-80 focus-visible:ring"-->
      <!--            type="submit"-->
      <!--          >-->
      <!--            Send-->
      <!--          </button>-->
      <!--        </p>-->
      <!--      </form>-->
    </div>
  </section>
  <section class="mx-auto flex w-full max-w-screen-xl flex-col content-between items-center gap-12 px-5 py-28 md:grid md:grid-cols-2 lg:grid-cols-3">
    <div class="mx-auto lg:ml-0 lg:mr-auto">
      <img
        :src="Maria"
        alt="Maria, medarbeider"
        class="mb-10"
      >
      <p class="mb-3">
        Maria Jelena Refsum Pencic
      </p>
      <p>Maria.alba.omsorg@gmail.com</p>
    </div>
    <div class="md:mx-auto">
      <img
        :src="Trude"
        alt="Trude, medarbeider"
        class="mb-10"
      >
      <p class="mb-3">
        Trude Milliane Stensholt
      </p>
      <p>Trude.alba.omsorg@gmail.com</p>
    </div>
    <div class="col-span-full mx-auto lg:col-span-1 lg:ml-auto lg:mr-0">
      <img
        :src="Theo"
        alt="Theo, medarbeider"
        class="mb-10"
      >
      <p class="mb-3">
        Theo Refsum Pencic
      </p>
      <p>Theo.alba.omsorg@gmail.com</p>
    </div>
  </section>
</template>
