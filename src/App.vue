<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <router-view v-slot="{ Component, route }">
    <transition
      enterFromClass="opacity-0 scale-[.99]"
      enterActiveClass="transition-all duration-700 ease-out"
      leaveFromClass="opacity-0 scale-[.99]"
    >
      <main
        v-if="Component"
        :key="route.path"
        class="w-full grow"
      >
        <component :is="Component" />
      </main>
      <main
        v-else
        class="min-h-screen"
      />
    </transition>
  </router-view>
  <AppFooter />
</template>
