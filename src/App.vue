<script setup>
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
</script>

<template class="w-full h-full">

  <header class="sticky top-0 flex justify-center p-1
      px-4 bg-zinc-600
     text-stone-200 font-semibold text-base z-1000 ">
    <nav class="flex justify-start w-full  ">
      <a href="#about" class="pr-4">About</a>
      <a href="#work" class="">Work</a>
    </nav>
  </header>

  <main class="w-full h-full">

    <section id="about" class="h-fit bg-gradient-to-b from-zinc-600 to-green-100/50">
      <Home />
    </section>

    <section id="work" class="min-h-screen pt-12 bg-green-100/50">
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
