<template>
  <div class="px-8 sm:px-16 py-4 flex flex-col-reverse sm:flex-row items-center justify-center gap-x-8 gap-y-4">

    <div class="flex flex-col justify-center text-center sm:text-left">
      <div class="text-xl sm:text-4xl font-bold text-cyan-700">Ricardo Valverde Lopes</div>
      <div class="text-lg sm:text-lg font-semibold mb-4 text-cyan-700">Software Dev @ Cult of Bits</div>

      <div class="flex gap-3 justify-center sm:justify-start">
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/r-valverde" target="_blank"
          class="text-base md:text-xl shadow-md bg-blue-700 flex items-center justify-center px-2 py-1 rounded hover:bg-blue-600 transition"
          aria-label="LinkedIn">
          <i class="fab fa-linkedin-in text-white"></i>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/rvalgreen" target="_blank"
          class="text-base md:text-xl shadow-md bg-gray-600 flex items-center justify-center px-2 py-1 rounded hover:bg-gray-700 transition"
          aria-label="GitHub">
          <i class="fab fa-github text-white "></i>
        </a>
      </div>
    </div>

    <div class="">
      <img src="/myphoto.jpg" alt="Your Photo"
        class="w-48 sm:w-64 aspect-square rounded-full object-cover shadow-lg ring-4 ring-cyan-600/20 ring-offset-2 ring-offset-white" />
    </div>

  </div>
</template>

<script setup>
</script>