<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template >
  <header class="flex justify-center bg-emerald-900 p-3 text-stone-300">
      <nav class="flex justify-start w-full lg:w-10/12">
        <RouterLink to="/" class="pr-2">Home</RouterLink>
        <RouterLink to="/about"  class="">About</RouterLink>
      </nav>
  </header>

  <main class="flex justify-center pt-2 px-3">
    <RouterView class="w-full mx-4 lg:w-10/12 bg-blue-300 bg-opacity-10"/>
  </main>

</template>

<style>
@import 'App.css';
</style>
