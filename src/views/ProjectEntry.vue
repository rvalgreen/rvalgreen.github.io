<template>
    <div class="h-full text-black overflow-hidden 
  rounded-lg border-b-2 flex flex-col sm:flex-row
  mb-2 mx-auto w-10/12 xl:w-8/12">

        <!-- Image on the left -->
        <div class="hidden sm:flex items-center ">
            <img v-if="image" :src="image" alt="Project image" class="w-36 h-36 rounded-lg object-contain p-2" />
        </div>


        <!-- Text content -->
        <div class="flex flex-col justify-between h-full w-full sm:w-10/12">
            <!-- Title and year row -->
            <div class="flex justify-between items-center  py-1 px-2 sm:px-6 border-b-2">
                <div class=" text-cyan-700/65 text-base sm:text-lg font-semibold w-9/12">{{ title }}</div>
                <div class="text-xs sm:text-sm text-gray-500 font-normal w-2/12 text-right">{{ year }}</div>
            </div>


            <div class="text-sm sm:text-base px-2 sm:px-6 inline font-light">
                <div ref="descriptionContainer"
                    :class="showFullText ? '' : 'line-clamp-2 sm:line-clamp-3 lg:line-clamp-4'" v-html="description">

                </div>
                <button v-if="shouldShowMore" class="text-blue-600 hover:underline text-xs"
                    @click="showFullText = !showFullText">
                    {{ showFullText ? 'Show less' : 'Show more' }}
                </button>
            </div>

            <!-- Bottom links -->
            <div v-if="links.length > 0" class="px-2 sm:px-6 flex items-center text-sm gap-x-2 pb-1 pt-2">
                <div v-for="(link, index) in links" :key="index">
                    <a :href="link.href" target="_blank"
                        class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-md transition"
                        :class="link.class" :aria-label="link.ariaLabel">
                        <img v-if="link.imgSrc" :src="link.imgSrc" :alt="link.alt"
                            class="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                        <i v-else-if="link.iconClass" :class="link.iconClass + ' text-xs sm:text-sm'"></i>
                        <span v-else-if="link.text" class="font-medium text-xs sm:text-sm"  v-html="link.text">
                            
                        </span>
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
            showFullText: false,
            shouldShowMore: false
        };
    },
    mounted() {
        this.checkOverflow();
        window.addEventListener('resize', this.checkOverflow);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkOverflow);
    },
    methods: {
        checkOverflow() {
            this.$nextTick(() => {
                const el = this.$refs.descriptionContainer;
                if (el) {
                    // Temporarily remove line clamping to measure full height
                    const originalClass = el.className;
                    el.className = '';
                    const fullHeight = el.scrollHeight;

                    // Apply clamping to measure visible height
                    el.className = originalClass;
                    const visibleHeight = el.offsetHeight;

                    this.shouldShowMore = fullHeight > visibleHeight;
                }
            });
        }
    }
};
</script>
