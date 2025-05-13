<template>
    <div class="h-full text-black overflow-hidden 
  rounded-lg bg-white shadow flex flex-col sm:flex-row">

        <!-- Image on the left -->
        <div class="flex justify-center">
            <img v-if="image" :src="image" alt="Project image" class="w-48 h-48 object-contain p-2" />
        </div>


        <!-- Text content -->
        <div class="flex flex-col justify-between h-full w-full">
            <!-- Title and year row -->
            <div class="flex justify-between items-center text-base sm:text-lg font-semibold py-2 px-2 sm:px-6">
                <div>{{ title }}</div>
                <div class="text-sm sm:text-base text-gray-500 font-normal">{{ year }}</div>
            </div>


            <div class="text-sm sm:text-base px-2 sm:px-6">
                <div :class="showFullText ? '' : 'line-clamp-2 sm:line-clamp-3 lg:line-clamp-4'">
                    {{ description }}
                </div>
                <button v-if="showMore" class="mt-2 text-blue-600 hover:underline text-sm"
                    @click="showFullText = !showFullText">
                    {{ showFullText ? 'Show less' : 'Show more' }}
                </button>
            </div>

            <div v-if="links.length > 0" class="px-2 sm:px-6 flex items-center text-sm sm:text-base gap-x-2">
                <div v-for="(link, index) in links" :key="index">
                    <a :href="link.href" target="_blank"
                        class="flex items-center justify-center px-2 py-1 rounded transition " :class="link.class"
                        :aria-label="link.ariaLabel">
                        <img v-if="link.imgSrc" :src="link.imgSrc" :alt="link.alt" class="w-8 h-8 rounded-lg" />
                        <i v-else-if="link.iconClass" :class="link.iconClass"></i>
                        <span v-else-if="link.text" class="font-semibold text-xs">{{ link.text }}</span>
                    </a>
                </div>
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
        links: Array,
        image: String,
        year: String,
        showMore: Boolean
    },
    data() {
        return {
            showFullText: false
        };
    },
};
</script>
