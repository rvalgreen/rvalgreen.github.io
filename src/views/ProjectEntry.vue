<template>
  <div class="text-black divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
    <div class="text-base sm:text-lg font-semibold py-2 px-2 sm:px-6">
      {{ title }}
    </div>

    <div class="text-sm sm:text-base py-2 px-2 sm:px-6">
      <div :class="showFullText ? '' : 'line-clamp-2'">
        {{ description }}
      </div>
      <button class="mt-2 text-blue-600 hover:underline text-sm" @click="showFullText = !showFullText">
        {{ showFullText ? 'Show less' : 'Show more' }}
      </button>
    </div>

    <div class="py-1 px-2 sm:px-6 flex items-center text-sm sm:text-base gap-x-2">
      <div v-for="(link, index) in links" :key="index">
        <a
          :href="link.href"
          target="_blank"
          class="shadow-md flex items-center justify-center px-2 py-1 rounded transition"
          :class="link.class"
          :aria-label="link.ariaLabel"
        >
          <img v-if="link.imgSrc" :src="link.imgSrc" :alt="link.alt" class="w-8 h-8" />
          <i v-else-if="link.iconClass" :class="link.iconClass"></i>
          <span v-else-if="link.text" class="font-semibold text-xs">{{ link.text }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectEntry',
  props: {
    title: String,
    description: String,
    links: Array
  },
  data() {
    return {
      showFullText: false
    };
  }
};
</script>
