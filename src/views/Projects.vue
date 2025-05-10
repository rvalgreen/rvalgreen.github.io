<template>
  <div class="px-8 sm:px-16 py-6">

    <div class="text-black divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div class="text-base sm:text-lg font-semibold py-2 px-2 sm:px-6  ">
        GlórIA: A European Portuguese Language Model
      </div>

      <div class="text-sm sm:text-base py-2 px-2 sm:px-6">
        <div :class="showFullText ? '' : 'line-clamp-2'">
          As part of my Master’s dissertation, I developed and released GlórIA, a transformer-based language model
          focused
          on European Portuguese (PT-PT). Trained using data from sources like Arquivo.pt, the model aims to strengthen
          the foundation for advanced NLP research in Portuguese, including tasks like chain-of-thought and few-shot
          reasoning. GlórIA is publicly available on Hugging Face, and the project was presented at PROPOR 2024.
        </div>
        <button class="mt-2 text-blue-600 hover:underline text-sm" @click="showFullText = !showFullText">
          {{ showFullText ? 'Show less' : 'Show more' }}
        </button>
      </div>


      <div class="py-1 px-2 sm:px-6 flex items-center text-sm sm:text-base gap-x-2">

        <div>
          <a href="https://huggingface.co/NOVA-vision-language/GlorIA-1.3B" target="_blank"
            class="rounded transition flex items-center justify-center" aria-label="Hugging Face">
            <img src="/hf-logo.svg" alt="Hugging Face" class="w-8 h-8" />
          </a>

        </div>

        <div>
          <a href="https://www.linkedin.com/posts/r-valverde_gl%C3%B3ria-a-generative-and-open-large-language-activity-7168018261622571008-JyyC?utm_source=share&utm_medium=member_desktop&rcm=ACoAACpR0ZcBZo4_J0z0W3hapXPJ3LJreB4SAbs"
            target="_blank"
            class="shadow-md bg-blue-700 flex items-center justify-center px-2 py-1 rounded hover:bg-blue-600 transition"
            aria-label="LinkedIn">
            <i class="fab fa-linkedin-in text-white"></i>
          </a>
        </div>


        <div>
          <a href="https://aclanthology.org/2024.propor-1.45/" target="_blank"
            class="shadow-md flex items-center justify-center px-2 py-1 rounded " aria-label="ACL">
            <span class="font-semibold text-xs">Paper</span>
          </a>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import ProjectEntry from './ProjectEntry.vue';

export default {
  name: 'ProjectList',
  components: {
    ProjectEntry
  },
  data() {
    return {
      showFullText: false,
    };
  }
};

</script>
