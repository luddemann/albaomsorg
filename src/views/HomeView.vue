<script setup lang="ts">
import Hug from '../assets/hug.png'
import Window from '../assets/window.png'
import router from '../router'
</script>

<template>
  <section class="mx-auto bg-alba-yellow px-5 py-24 text-center text-alba-orange md:py-52">
    <h1 class="mx-auto mb-8 text-center text-4xl font-medium tracking-wider md:text-6xl">
      En sykepleiers visjon.
    </h1>
    <p class="mx-auto max-w-prose text-xl font-normal md:text-2xl">
      Vårt mål er å imøtekomme nåtidens og fremtidens utfordringer innenfor helse og omsorgstjenesten i Norge, ved å bidra til en ny måte å strukturere dagens helse-tjenester med fokus på den enkeltes livs reise.
    </p>
  </section>
  <section class="mx-auto max-w-screen-xl px-5 py-20 md:py-32">
    <h1 class="pb-20 text-center text-3xl font-medium md:text-5xl">
      Vi tilbyr:
    </h1>
    <div class="flex flex-col items-center justify-between gap-24 pb-24 md:flex-row md:gap-6">
      <div class="w-full space-y-8 text-center md:w-[500px] md:space-y-12">
        <span class="rounded-full bg-alba-pink px-4 py-2 text-lg text-alba-red">Omsorg</span>
        <p class="text-xl md:text-2xl">
          Vi tilbyr helse- og omsorgstjenester av høy kvalitet med fokus på pasientens behov.
        </p>
      </div>
      <div class="w-full space-y-8 text-center md:w-[500px] md:space-y-12">
        <span class="rounded-full bg-alba-yellow px-4 py-2 text-lg text-alba-orange">Palliativ pleie</span>
        <p class="text-xl md:text-2xl">
          Vi er sykepleiere med spesialkompetanse innenfor kreft og palliasjon.
        </p>
      </div>
    </div>
    <div class="mx-auto w-full space-y-8 text-center md:w-[500px] md:space-y-12">
      <span class="rounded-full bg-alba-light-blue px-4 py-2 text-lg text-alba-blue">Behandling</span>
      <p class="text-xl md:text-2xl">
        Vi utfører pleie, medisinhåndtering og ivaretakelse av pårørende.
      </p>
    </div>
  </section>
  <section class="grid grid-cols-1 flex-col-reverse md:grid-cols-2">
    <img
      :src="Hug"
      class="aspect-square h-full w-full object-cover"
      alt="Bestemor klemmer barnebarn"
    >
    <article class="-order-1 flex flex-col items-center justify-center gap-10 bg-alba-pink py-12 text-center text-alba-red md:order-1">
      <h1 class="text-3xl font-medium sm:text-4xl md:text-5xl">
        Vårt team
      </h1>
      <p class="max-w-xl px-5 text-base md:text-lg">
        Vårt team består av sykepleiere med lang erfaring og bred kompetanse, med et brennende ønske om å imøtekomme dagens utfordringer innenfor pleie- og
        omsorgstjenesten. Vi vet hvor viktig det er med kontinuitet og stabilitet, noe som er kjernen i vår virksomhet. Du skal derfor være trygg på at Alba Omsorg leverer kvalifiserte sykepleiere til alle store og små oppdrag.
      </p>
      <button
        class="rounded-full bg-alba-red px-5 py-3 text-alba-pink transition-all hover:bg-opacity-80 focus-visible:ring"
        @click="router.push('/om-oss')"
      >
        Om oss
      </button>
    </article>
  </section>
  <section class="grid grid-cols-1 md:grid-cols-2">
    <article class="flex flex-col items-center justify-center gap-10 bg-alba-light-blue py-12 text-center text-alba-dark-green">
      <h1 class="text-3xl font-medium sm:text-4xl md:text-5xl">
        Jobbe i Alba?
      </h1>
      <p class="max-w-xl px-5 text-base md:text-lg">
        Vil du jobbe i et lite, sykepleierdrevet firma som tar deg som sykepleier på alvor? Vi er to sykepleiere som vet av erfaring hva det koster å stå i dette flotte yrket og vil tilby deg som ansatt medvirkning i utformingen av din jobbhverdag. Det innebærer at vi kan skreddersy dine oppdrag og legge til rette for at du skal trives og utvikle deg som ansatt hos oss. Det er viktig for oss at du blir sett og hørt. En trygg arbeidstaker genererer økt arbeidsevne og fornøyde kunder!
      </p>
      <p class="max-w-xl px-5 text-base md:text-lg">
        Har du det yrkesetiske verdigrunnlaget, er faglig sterk og ønsker nye utfordringer? Da vil vi høre fra deg!
      </p>
      <button
        class="rounded-full bg-alba-dark-green px-5 py-3 text-alba-light-green transition-all hover:bg-opacity-80 focus-visible:ring"
        @click="router.push('/kontakt')"
      >
        Kontakt oss
      </button>
    </article>
    <img
      :src="Window"
      class="aspect-square h-full w-full object-cover"
      alt="Dame ser håpefullt ut av vinduet med en kaffekopp i hendene."
    >
  </section>
</template>
