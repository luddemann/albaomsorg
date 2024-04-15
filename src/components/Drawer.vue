<script setup lang="ts">
import { useRoute } from "vue-router";
import { watchEffect } from "vue";

const props = defineProps<{ open: boolean }>()

const route = useRoute()

const emit = defineEmits<{ (event: 'close'): void }>()

watchEffect(() => {
  if (props.open) {
    document.body.style.position = 'fixed'
    document.body.style.inset = '0'
  } else {
    document.body.style.position = ''
    document.body.style.inset = ''
  }
})
</script>

<template>
  <Transition
    enter-active-class="duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="duration-300 ease-out"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-if="open"
      class="fixed left-0 top-0 flex h-full overflow-y-auto w-full flex-col items-center gap-20 bg-alba-yellow py-32 text-alba-orange"
    >
      <button class="absolute top-6 right-5 focus-visible:ring" @click="emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20">
          <path fill="currentColor" d="M17.586 15.957a1.197 1.197 0 0 1-1.693 1.693l-5.892-5.937-5.935 5.935a1.197 1.197 0 0 1-1.692-1.693l5.936-5.933-5.938-5.979A1.197 1.197 0 0 1 4.065 2.35L10 8.332l5.934-5.935a1.197 1.197 0 0 1 1.693 1.693l-5.937 5.932 5.895 5.935Z"/>
        </svg>
      </button>
      <RouterLink
        v-if="route.name !== 'home'"
        class="text-4xl hover:underline focus-visible:ring"
        to="/"
        @click="emit('close')"
      >
        Hjem
      </RouterLink>
      <RouterLink
        class="text-4xl hover:underline focus-visible:ring"
        to="/om-oss"
        @click="emit('close')"
      >
        Om oss
      </RouterLink>
      <RouterLink
        class="text-4xl hover:underline focus-visible:ring"
        to="/tjenester"
        @click="emit('close')"
      >
        Våre tjenester
      </RouterLink>
      <RouterLink
        class="text-4xl hover:underline focus-visible:ring"
        to="/partnere"
        @click="emit('close')"
      >
        Partnere
      </RouterLink>
      <RouterLink
        class="text-4xl hover:underline focus-visible:ring"
        to="/kontakt"
        @click="emit('close')"
      >
        Kontakt oss
      </RouterLink>
    </div>
  </Transition>
</template>
