<script setup>
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
</script>

<template class="w-full h-full">
  <div class="h-screen overflow-y-scroll">

    <header class="sticky top-0 flex justify-center bg-emerald-800 p-3 text-stone-300 font-semibold text-lg z-1000">
      <nav class="flex justify-start w-full">
        <a href="#about" class="pr-4">About</a>
        <a href="#work" class="">Work</a>
      </nav>
    </header>

    <main class="w-full h-full">
 
      <section id="about" class="h-fit bg-red-100/50">
        <Home />
      </section>

      <section id="work" class="h-screen pt-10 bg-blue-100/30">
        <Projects />
      </section>
    </main>

  </div>

</template>

<style>
@import 'App.css';

html {
  scroll-behavior: smooth;
}
</style>
