<script setup>
import { onMounted } from 'vue';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
</script>

<template class="w-full h-full">
  <header class="sticky top-0 flex justify-center bg-emerald-800 p-3 text-stone-300 font-semibold text-lg z-1000">
    <nav class="flex justify-start w-full">
      <a href="#about" class="pr-4">About</a>
      <a href="#projects" class="">Projects</a>
    </nav>
  </header>

  <main class="w-fullh-full scroll-smooth">

    <section id="about" class="h-full py-10 bg-red-100/50">
      <Home />
    </section>

    <section id="projects" class="min-h-screen pt-10 bg-blue-100/30">
      <Projects />
    </section>
  </main>
</template>

<style>
@import 'App.css';

html {
  scroll-behavior: smooth;
}
</style>
