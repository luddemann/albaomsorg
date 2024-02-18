<script setup lang="ts">
import Hands from '../assets/hands.png'
import router from '../router'
</script>

<template>
  <section class="mx-auto w-full bg-alba-yellow px-5 py-24 text-center text-alba-orange md:py-52">
    <h1 class="mx-auto mb-8 text-center text-4xl font-medium tracking-wider md:text-6xl">
      Hvem er Alba Omsorg?
    </h1>
    <p class="mx-auto max-w-[685px] md:text-xl">
      Vi er Maria og Trude, to sykepleiere som har jobbet sammen i offentlig sektor de siste seks årene. Sammen har vi gjort det vi har kunnet for å ivareta personer med alvorlig sykdom som bor hjemme. Det var her i denne jobbhverdagen tanken om Alba Omsorg spiret frem. Vi har hatt fokus på både bruker og pårørende. Gode relasjoner med den enkelte har vært viktig for å kunne veilede i et til tider kaotisk helsesystem.
    </p>
  </section>
  <section class="mx-auto max-w-2xl px-5 py-20 text-center text-3xl leading-snug text-alba-red md:py-32 md:text-4xl md:leading-snug">
    “Gode relasjoner til den enkelte har vært viktig for å kunne veilede i et til tider kaotisk helsesystem.”
  </section>
  <section class="grid grid-cols-1 md:grid-cols-2">
    <img
      :src="Hands"
      class="aspect-video h-full w-full object-cover"
      alt="Bestemor klemmer barnebarn"
    >
    <article class="flex flex-col items-center justify-center gap-6 bg-alba-light-blue px-5 py-16 text-alba-dark-green md:py-24">
      <p class="max-w-xl">
        Vi i Alba omsorg mener at alle som mottar helsetjenester skal føle seg vel ivaretatt og motta verdighetsbevarende omsorg, uansett hvor i systemet de befinner seg. Vi ønsker at vår erfaring innenfor lindrende behandling skal kunne tilbys alle pasienter som er i behov for det.
      </p>
      <p class="max-w-xl">
        Maria har seks års erfaring som sykepleier innen kommunehelsetjenesten og har spesialutdannelse i palliasjon. Trude har vært sykepleier i 20 år og har med seg lang erfaring fra både sykehus, helsehus og hjemmetjenesten. De siste ti årene har hun primært jobbet i kreftomsorgen, og tok videreutdanning i palliasjon 2021.
      </p>
      <p class="max-w-xl">
        For å få full nytte av sykepleiernes kompetanse har vi et nært og godt samarbeid med to gamle kjente, Tor Kristian og Theo, som har bakgrunn og utdannelse innen markedsføring og administrasjon.
      </p>
    </article>
  </section>
  <section class="mx-auto max-w-2xl px-5 py-20 text-center text-3xl leading-snug text-alba-red md:py-32 md:text-4xl md:leading-snug">
    “Vi ønsker at vår erfaring innenfor lindrende behandling skal kunne tilbys alle pasienter som er i behov for det. ”
  </section>
  <article class="flex flex-col items-center justify-center gap-8 bg-alba-yellow px-5 py-20 text-center text-alba-orange md:py-32">
    <h1 class="text-3xl font-medium sm:text-4xl md:text-5xl">
      Noe du lurer på?
    </h1>
    <p class="max-w-2xl">
      Hvis du har spørsmål eller vil lære mer om hva vi driver med, er det bare å ta kontakt for en hyggelig samtale med en av våre ansatte.
    </p>
    <button
      class="rounded-full bg-alba-orange px-5 py-3 text-alba-yellow transition-all hover:bg-opacity-80 focus-visible:ring"
      @click="router.push('/kontakt')"
    >
      Kontakt oss
    </button>
  </article>
</template>
