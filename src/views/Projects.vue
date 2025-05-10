<template>
  <div class="w-full h-full">
    <ProjectEntry class="mb-4 mx-auto w-10/12 xl:w-8/12" 
    v-for="(project, index) in projects" 
    :key="index" 
    :title="project.title"
    :description="project.description" 
    :links="project.links" 
    :image="project.image"
    :year="project.year" />
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
      projects: [
        {
          title: 'GlórIA: A European Portuguese Language Model',
          description: `As part of my Master’s dissertation, I developed and released GlórIA, a transformer-based language model
          focused on European Portuguese (PT-PT). Trained using data from sources like Arquivo.pt, the model aims to strengthen
          the foundation for advanced NLP research in Portuguese, including tasks like chain-of-thought and few-shot
          reasoning. GlórIA is publicly available on Hugging Face, and the project was presented at PROPOR 2024.`,
          image: "/novalogo.jpg",
          year: "2022-23",
          links: [
            {
              href: 'https://huggingface.co/NOVA-vision-language/GlorIA-1.3B',
              ariaLabel: 'Hugging Face',
              imgSrc: '/hf-logo.svg',
              alt: 'Hugging Face'
            },
            {
              href: 'https://www.linkedin.com/posts/r-valverde_gl%C3%B3ria-a-generative-and-open-large-language-activity-7168018261622571008-JyyC?utm_source=share&utm_medium=member_desktop&rcm=ACoAACpR0ZcBZo4_J0z0W3hapXPJ3LJreB4SAbs',
              ariaLabel: 'LinkedIn',
              iconClass: 'fab fa-linkedin-in text-white',
              class: 'bg-blue-700 hover:bg-blue-600'
            },
            {
              href: 'https://aclanthology.org/2024.propor-1.45/',
              ariaLabel: 'ACL',
              text: 'Paper'
            }
          ]
        },
        {
          title: 'GlórIA: A European Portuguese Language Model',
          description: `As part of my Master’s dissertation, I developed and released GlórIA, a transformer-based language model
          focused on European Portuguese (PT-PT). Trained using data from sources like Arquivo.pt, the model aims to strengthen
          the foundation for advanced NLP research in Portuguese, including tasks like chain-of-thought and few-shot
          reasoning. GlórIA is publicly available on Hugging Face, and the project was presented at PROPOR 2024.`,
          year: "2022-23",
          links: [
            {
              href: 'https://huggingface.co/NOVA-vision-language/GlorIA-1.3B',
              ariaLabel: 'Hugging Face',
              imgSrc: '/hf-logo.svg',
              alt: 'Hugging Face'
            },
            {
              href: 'https://www.linkedin.com/posts/r-valverde_gl%C3%B3ria-a-generative-and-open-large-language-activity-7168018261622571008-JyyC?utm_source=share&utm_medium=member_desktop&rcm=ACoAACpR0ZcBZo4_J0z0W3hapXPJ3LJreB4SAbs',
              ariaLabel: 'LinkedIn',
              iconClass: 'fab fa-linkedin-in text-white',
              class: 'bg-blue-700 hover:bg-blue-600'
            },
            {
              href: 'https://aclanthology.org/2024.propor-1.45/',
              ariaLabel: 'ACL',
              text: 'Paper'
            }
          ]
        }
      ]
    };
  }
};
</script>
