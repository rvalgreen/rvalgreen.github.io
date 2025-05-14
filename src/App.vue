<script setup>
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
</script>

<template class="w-full h-full ">

  <header class="sticky top-0 flex justify-center p-1 font-mono
      bg-cyan-700/70 text-stone-200 font-semibold text-sm z-1000 ">
    <nav class="flex justify-center w-full  ">
      <a href="#about" class="pr-4">About</a>
      <a href="#work" class="">Work</a>
    </nav>
  </header>

  <main class="w-full h-full">

    <section id="about" class="h-fit font-mono ">
      <Home />
    </section>

    <section id="work" class="min-h-screen pt-12">
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
