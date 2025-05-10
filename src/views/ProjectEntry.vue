<template>
    <div class="text-black divide-y divide-gray-200 overflow-hidden 
  rounded-lg bg-white shadow flex flex-col sm:flex-row items-center content-start">

        <!-- Image on the left -->
        <div v-if="image" class="sm:w-3/12 w-full h-32 sm:h-40 px-2 pt-2 sm:pt-0 sm:px-6">
            <img :src="image" alt="Project image" class="h-full w-full object-contain rounded" />
        </div>

        <!-- Text content -->
        <div class="flex flex-col justify-between w-full">
            <!-- Title and year row -->
            <div class="flex justify-between items-center text-base sm:text-lg font-semibold py-2 px-2 sm:px-6">
                <div>{{ title }}</div>
                <div class="text-sm sm:text-base text-gray-500 font-normal">{{ year }}</div>
            </div>


            <div class="text-sm sm:text-base py-2 px-2 sm:px-6">
                <div :class="showFullText ? '' : 'line-clamp-2 sm:line-clamp-3 lg:line-clamp-4'">
                    {{ description }}
                </div>
                <button class="mt-2 text-blue-600 hover:underline text-sm" @click="showFullText = !showFullText">
                    {{ showFullText ? 'Show less' : 'Show more' }}
                </button>
            </div>

            <div class="py-1 px-2 sm:px-6 flex items-center text-sm sm:text-base gap-x-2">
                <div v-for="(link, index) in links" :key="index">
                    <a :href="link.href" target="_blank"
                        class="flex items-center justify-center px-2 py-1 rounded transition" :class="link.class"
                        :aria-label="link.ariaLabel">
                        <img v-if="link.imgSrc" :src="link.imgSrc" :alt="link.alt" class="w-8 h-8 " />
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
        year: String
    },
    data() {
        return {
            showFullText: false
        };
    },

    mounted() {
        console.log("rv debug", this.image)
    }
};
</script>
