<script setup lang="ts">
import Hug from '../assets/hug.png'
import Window from '../assets/window.png'
</script>

<template>
  <section class="mx-auto bg-alba-yellow py-52 text-center text-alba-orange">
    <h1 class="mx-auto mb-8 text-center text-6xl font-medium tracking-wider">
      En sykepleiers visjon.
    </h1>
    <p class="mx-auto max-w-prose text-2xl font-normal">
      Vårt mål er å imøtekomme nåtidens og fremtidens utfordringer innenfor helse og omsorgstjenesten i Norge, ved å bidra til en ny måte å strukturere dagens helse-tjenester med fokus på den enkeltes livs reise.
    </p>
  </section>
  <section class="mx-auto max-w-screen-xl py-32">
    <h1 class="pb-20 text-center text-5xl font-medium">
      Vi tilbyr:
    </h1>
    <div class="flex items-center justify-between pb-24">
      <div class="w-[500px] space-y-12 text-center">
        <span class="rounded-full bg-alba-pink px-4 py-2 text-lg text-alba-red">Omsorg</span>
        <p class="text-2xl">
          Vi tilbyr helse- og omsorgstjenester av høy kvalitet med fokus på pasientens behov.
        </p>
      </div>
      <div class="w-[500px] space-y-12 text-center">
        <span class="rounded-full bg-alba-yellow px-4 py-2 text-lg text-alba-orange">Palliativ pleie</span>
        <p class="text-2xl">
          Vi er sykepleiere med spesialkompetanse innenfor kreft og palliasjon.
        </p>
      </div>
    </div>
    <div class="mx-auto w-[500px] space-y-12 text-center">
      <span class="rounded-full bg-alba-light-blue px-4 py-2 text-lg text-alba-blue">Behandling</span>
      <p class="text-2xl">
        Vi utfører pleie, medisinhåndtering og ivaretakelse av pårørende.
      </p>
    </div>
  </section>
  <section class="grid grid-cols-2">
    <img
      :src="Hug"
      class="w-full"
      alt="Bestemor klemmer barnebarn"
    >
    <article class="flex flex-col items-center justify-center gap-10 bg-alba-pink text-center text-alba-red">
      <h1 class="text-5xl font-medium text-alba-red">
        Vårt team
      </h1>
      <p class="max-w-xl text-lg">
        Vårt team består av sykepleiere med lang erfaring og bred kompetanse, med et brennende ønske om å imøtekomme dagens utfordringer innenfor pleie- og
        omsorgstjenesten. Vi vet hvor viktig det er med kontinuitet og stabilitet, noe som er kjernen i vår virksomhet. Du skal derfor være trygg på at Alba Omsorg leverer kvalifiserte sykepleiere til alle store og små oppdrag.
      </p>
      <router-link
        to="/om-oss"
        class="rounded-full bg-alba-red px-5 py-3 text-alba-pink"
      >
        Om oss
      </router-link>
    </article>
  </section>
  <section class="grid grid-cols-2">
    <article class="flex flex-col items-center justify-center gap-10 bg-alba-light-blue text-center text-alba-red">
      <h1 class="text-5xl font-medium text-alba-dark-green">
        Jobbe i Alba?
      </h1>
      <p class="max-w-xl text-lg text-alba-dark-green">
        Vil du jobbe i et lite, sykepleierdrevet firma som tar deg som sykepleier på alvor? Vi er to sykepleiere som vet av erfaring hva det koster å stå i dette flotte yrket og vil tilby deg som ansatt medvirkning i utformingen av din jobbhverdag. Det innebærer at vi kan skreddersy dine oppdrag og legge til rette for at du skal trives og utvikle deg som ansatt hos oss. Det er viktig for oss at du blir sett og hørt. En trygg arbeidstaker genererer økt arbeidsevne og fornøyde kunder!
      </p>
      <p class="max-w-xl text-lg text-alba-dark-green">
        Har du det yrkesetiske verdigrunnlaget, er faglig sterk og ønsker nye utfordringer? Da vil vi høre fra deg!
      </p>
      <router-link
        to="/kontakt"
        class="rounded-full bg-alba-dark-green px-5 py-3 text-alba-light-green"
      >
        Kontakt oss
      </router-link>
    </article>
    <img
      :src="Window"
      class="w-full"
      alt="Dame ser håpefullt ut av vinduet med en kaffekopp i hendene."
    >
  </section>
</template>
