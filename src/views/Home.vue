<template>
  <div class="h-full w-auto px-8 sm:px-16 text-white 
  flex justify-center items-center gap-x-12 py-10 ">

    <div class="flex flex-col justify-center">
      <div class="text-xl sm:text-4xl font-bold">Ricardo Valverde</div>
      <div class="text-lg sm:text-lg font-semibold mb-4">Junior Dev @ Cult of Bits</div>

      <div class="flex gap-3">
        <!-- Email -->
        <a href="mailto:your@email.com"
          class="text-base md:text-xl shadow-md bg-blue-500 flex items-center justify-center px-2 py-1 rounded hover:bg-blue-600 transition"
          aria-label="Email">
          <i class="fas fa-envelope text-white"></i>
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/r-valverde" target="_blank"
          class="text-base md:text-xl shadow-md bg-blue-700 flex items-center justify-center px-2 py-1 rounded hover:bg-blue-600 transition"
          aria-label="LinkedIn">
          <i class="fab fa-linkedin-in text-white"></i>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/rvalgreen" target="_blank"
          class="text-base md:text-xl shadow-md bg-gray-800  flex items-center justify-center px-2 py-1 rounded hover:bg-blue-600 transition"
          aria-label="GitHub">
          <i class="fab fa-github text-white "></i>
        </a>
      </div>
    </div>

    <div class="w-4/12 flex justify-center items-center">
      <div class="w-24 h-24 sm:w-64 sm:h-64">
        <img src="/myphoto.jpg" alt="Your Photo" class=" rounded-full object-cover shadow-lg" />
      </div>
    </div>

  </div>
</template>

<script setup>
</script>
