<script setup lang="ts">
import Team from '../assets/team.png'
import Window from '../assets/window.png'
import router from '../router'
</script>

<template>
  <section class="mx-auto w-full bg-alba-yellow px-5 py-24 text-center text-alba-orange md:py-52">
    <h1 class="mx-auto mb-8 max-w-[750px] text-center text-4xl font-medium !leading-tight tracking-wider md:text-6xl">
      Hjemmesykepleie - profesjonelt og personlig
    </h1>
    <p class="mx-auto max-w-[685px] md:text-xl">
      Alba er en tjeneste for deg som bor hjemme og som har behov for noe mer enn det som kan tilbys i dag.
      Vi ønsker å jobbe for at du kan være hjemme så lenge som mulig, uavhengig av diagnose og alder.
    </p>
  </section>
  <section class="mx-auto flex max-w-screen-xl flex-col px-5 py-20 md:py-32">
    <h1 class="pb-20 text-center text-3xl font-medium md:text-5xl">
      Våre tjenester
    </h1>
    <div class="mx-auto mb-12 flex max-w-xl flex-wrap justify-center gap-6">
      <span class="rounded-full bg-alba-pink px-6 py-2 text-lg text-alba-red">Sittevakter</span>
      <span class="rounded-full bg-alba-light-blue px-6 py-2 text-lg text-alba-blue">Hjemmebaserte omsorgstjenester</span>
      <span class="rounded-full bg-alba-yellow px-6 py-2 text-lg text-alba-orange">Palliativ pleie og omsorg</span>
      <span class="rounded-full bg-alba-light-green px-6 py-2 text-lg text-alba-dark-green">Følgetjenester</span>
      <span class="rounded-full bg-alba-blue px-6 py-2 text-lg text-alba-light-blue">Støttesamtaler</span>
      <span class="rounded-full bg-alba-red px-6 py-2 text-lg text-alba-pink">Besøksvenn</span>
    </div>
    <RouterLink
      class="mx-auto block underline hover:bg-alba-yellow focus-visible:ring"
      to="/tjenester"
    >
      Les mer om våre tjenester her
    </RouterLink>
  </section>
  <section class="grid grid-cols-1 flex-col-reverse md:grid-cols-2">
    <img
      :src="Team"
      class="aspect-square h-full w-full object-cover"
      alt="Bestemor klemmer barnebarn"
    >
    <article class="-order-1 flex flex-col items-center justify-center gap-10 bg-alba-pink px-5 py-12 text-center text-alba-red md:order-1">
      <h1 class="text-3xl font-medium sm:text-4xl md:text-5xl">
        Vårt team
      </h1>
      <p class="flex max-w-lg flex-col gap-6">
        <span>Vårt team består av sykepleiere med lang erfaring og bred kompetanse, med et brennende ønske om å imøtekomme dagens utfordringer innenfor pleie- og
          omsorgstjenesten. Vi vet hvor viktig det er med kontinuitet og stabilitet, noe som er kjernen i vår virksomhet. Du skal derfor være trygg på at Alba Omsorg leverer kvalifiserte sykepleiere til alle store og små oppdrag.</span>

        <span>Vårt mål er å imøtekomme nåtidens og fremtidens utfordringer innenfor helse og omsorgstjenesten i Norge, ved å bidra til en ny måte å strukturere dagens helsetjenester med fokus på den enkeltes livsreise.</span>
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
    <article class="flex flex-col items-center justify-center gap-10 bg-alba-light-blue px-5 py-12 text-center text-alba-dark-green">
      <h1 class="text-3xl font-medium sm:text-4xl md:text-5xl">
        Jobbe i Alba?
      </h1>
      <p class="flex max-w-lg flex-col gap-6">
        <span>Vil du jobbe i et lite, sykepleierdrevet firma som tar deg som sykepleier på alvor? Vi er to sykepleiere som vet av erfaring hva det koster å stå i dette flotte yrket og vil tilby deg som ansatt medvirkning i utformingen av din jobbhverdag. Det innebærer at vi kan skreddersy dine oppdrag og legge til rette for at du skal trives og utvikle deg som ansatt hos oss. Det er viktig for oss at du blir sett og hørt. En trygg arbeidstaker genererer økt arbeidsevne og fornøyde kunder!</span>

        <span>Har du det yrkesetiske verdigrunnlaget, er faglig sterk og ønsker nye utfordringer? Da vil vi høre fra deg!</span>
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
