<script setup>
</script>

<template>
  <div class="h-full w-auto px-16 text-white ">
    <div class="flex justify-center  items-center gap-x-16">

      <div class="flex flex-col">
        <div class="text-4xl font-bold">Ricardo Valverde</div>
        <div class="text-lg font-semibold mb-4">Junior Dev @ Cult of Bits</div>

        <div class="flex gap-3">
          <!-- Email -->
          <a href="mailto:your@email.com"
            class="bg-blue-500 flex items-center justify-center px-2 rounded hover:bg-blue-600 transition"
            aria-label="Email">
            <i class="fas fa-envelope text-white"></i>
          </a>

          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/r-valverde" target="_blank"
            class="bg-blue-700 flex items-center justify-center px-2 rounded hover:bg-blue-600 transition"
            aria-label="LinkedIn">
            <i class="fab fa-linkedin-in text-white"></i>
          </a>

          <!-- GitHub -->
          <a href="https://github.com/rvalgreen" target="_blank"
            class="bg-gray-800  flex items-center justify-center px-2 rounded hover:bg-blue-600 transition"
            aria-label="GitHub">
            <i class="fab fa-github text-white text-xl"></i>
          </a>
        </div>
      </div>

      <div>
        <img src="/myphoto.jpg" alt="Your Photo" class="w-64 h-64 rounded-full object-cover shadow-lg" />
      </div>

    </div>
  </div>
</template>
