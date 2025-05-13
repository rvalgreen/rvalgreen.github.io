<template>
  <div class="w-full h-full">
    <ProjectEntry
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
          title: 'Junior Software Dev @ Cult of Bits',
          description: `At Cult of Bits, I support operational teams by helping design and implement 
          client-specific solutions, streamline day-to-day work and developing more Intelligent Business Operations.<br> 
           <span class="font-semibold">Techstack:</span> Java | Groovy | JS | Vue`,
          image: "/cob_wizard.png",
          year: "2024-Now",
          links: []
        },
        {
          title: 'GlórIA: A European Portuguese Language Model',
          description: `As part of my <a href="https://run.unl.pt/handle/10362/163260" target="_blank">Master’s dissertation</a>, I developed and released GlórIA, a transformer-based language model
          focused on European Portuguese (PT-PT). Trained using data from sources like Arquivo.pt, the model aims to strengthen
          the foundation for advanced NLP research in Portuguese, including tasks like chain-of-thought and few-shot
          reasoning. Available on Hugging Face. The project was presented at PROPOR 2024.`,
          image: "/gloria.png",
          year: "2022-23",
          links: [
            {
              href: 'https://huggingface.co/NOVA-vision-language/GlorIA-1.3B',
              ariaLabel: 'Hugging Face',
              imgSrc: '/hf-logo.svg',
              alt: 'Hugging Face',
              class: "bg-orange-300"
            },
            {
              href: 'https://www.linkedin.com/posts/r-valverde_gl%C3%B3ria-a-generative-and-open-large-language-activity-7168018261622571008-JyyC?utm_source=share&utm_medium=member_desktop&rcm=ACoAACpR0ZcBZo4_J0z0W3hapXPJ3LJreB4SAbs',
              ariaLabel: 'LinkedIn',
              iconClass: 'fab fa-linkedin-in text-white',
              class: 'bg-blue-500 hover:bg-blue-600'
            },
            {
              href: 'https://aclanthology.org/2024.propor-1.45/',
              ariaLabel: 'ACL',
              iconClass: "fa-brands fa-google-scholar",
              class: "border-2 text-stone-800"
            },
          ]
        },
        {
          title: 'ArquiWiz.pt – Research Grant Project on QA and Web Archives',
          description: `Awarded a research grant to develop <a href="http://arquiwiz.pt/" target="_blank" class="font-semibold text-blue-600">ArquiWiz.pt</a>, a platform built in collaboration for the Arquivo.pt Prize. 
          It features QA-based information retrieval using cutting-edge language models and dynamic temporal graph visualizations.`,
          image: "/wiz_staff.png",
          year: "2022-23",
          links: [ ]
        }
      ]
    };
  }
};
</script>
