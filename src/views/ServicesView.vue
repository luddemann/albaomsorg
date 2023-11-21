<script setup lang="ts">
import router from '../router'
</script>

<template>
  <section class="mx-auto w-full bg-alba-yellow px-5 py-24 text-center text-alba-orange md:py-52">
    <h1 class="mx-auto mb-8 text-center text-4xl font-medium tracking-wider md:text-6xl">
      Våre tjenester
    </h1>
    <p class="mx-auto max-w-[685px] md:text-xl">
      Dette er eksempler på noe av de tjenestene vi tilbyr. For å finne ut hva som passer deg, vil Alba komme på et uforpliktende hjemmebesøk for å kartlegge dine behov og din hjemmesituasjon. Ut i fra denne oppstartssamtalen, vil du bli tildelt en primærsykepleier som er ansvarlig for de tjenester du mottar.
    </p>
  </section>
  <section class="px-5 py-24">
    <div class="mx-auto flex max-w-md flex-col items-center justify-center gap-20">
      <div class="text-center">
        <span class="rounded-full bg-alba-yellow px-6 py-2 text-lg text-alba-orange">Palliativ pleie og omsorg</span>
        <p class="mb-4 mt-10">
          Palliasjon innebærer å lindre ubehag og fysiske smerter, og kan omfatte alle uansett diagnose. Med vår bakgrunn på dette feltet, ønsker vi å bistå, uavhengig av hvor i sykdomsforløpet du befinner deg, med fokus på livskvalitet. Dette skjer i tett samarbeid med din lege.
        </p>
        <p>Mange ønsker å tilbringe sin siste tid hjemme i kjente og trygge omgivelser. Vi vil bidra til en tilrettelagt tjeneste slik at de som ønsker kan ha livets sluttfase i eget hjem.</p>
      </div>
      <div class="space-y-10 text-center">
        <span class="rounded-full bg-alba-light-green px-6 py-2 text-lg text-alba-dark-green">Følgetjenester</span>
        <p>
          Vi tilbyr følgetjenester til deg som skal til viktige timeavtaler på sykehus eller fastlege, når pårørende ikke kan stille. Av erfaring vet vi hvor viktig det er å ha en ved sin
          side når viktig informasjon blir gitt.
        </p>
      </div>
      <div class="space-y-10 text-center">
        <span class="rounded-full bg-alba-light-blue px-6 py-2 text-lg text-alba-blue">Hjemmebaserte omsorgstjenester</span>
        <p>Våre sykepleiere yter helse- og omsorgstjenester av høy kvalitet med fokus på individets behov. Vi kan bistå med håndtering av medisiner, daglig stell og sårbehandling.</p>
      </div>
      <div class="space-y-10 text-center">
        <span class="rounded-full bg-alba-pink px-6 py-2 text-lg text-alba-red">Sittevakter</span>
        <p>Vi tilbyr avlastning i form av sittevakter av ulik lengde ut ifra den enkeltes og pårørendes behov. Det vil bli foretatt en vurdering for å kartlegge hva vakten skal innebære.</p>
      </div>
    </div>
  </section>
  <article class="flex flex-col items-center justify-center gap-8 bg-alba-yellow px-5 py-20 text-center text-alba-orange md:py-32">
    <h1 class="text-3xl font-medium sm:text-4xl md:text-5xl">
      Noe du lurer på?
    </h1>
    <p class="max-w-2xl">
      Hvis du har spørsmål eller vil lære mer om hva vi driver med, er det bare å ta kontakt for en hyggelig samtale med en av våre ansatte.
    </p>
    <button
      class="rounded-full bg-alba-orange px-5 py-3 text-alba-yellow transition-all hover:opacity-80 focus-visible:ring"
      @click="router.push('/kontakt')"
    >
      Kontakt oss
    </button>
  </article>
</template>
