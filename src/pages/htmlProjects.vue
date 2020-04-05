<template>
  <div>
    <h1>HTML</h1>
    <ProjectsList :projects="projects" />
  </div>
</template>

<script>

import ProjectsList     from '@/components/projects/projectsList'

export default {
  components: {
    ProjectsList
  },
  data: () => ({
    projects: [
      {
        title: 'EW Real Estate',
        description: 'Test task for OHDESIGN Studio. HTML + CSS  + Bootstrap, without design',
        preview: 'Test task for OHDESIGN Studio. HTML + CSS  + Bootstrap, without design',
        gallery_folder: 'ew_real_estate',
        gallery: ['main_page.jpg', 'footer.jpg', 'serach.jpg', 'slider.jpg'],
        links: {
          git: 'https://github.com/Stratarion/testOHDESIGN',
          pages: 'https://stratarion.github.io/testOHDESIGN/'
        },
        src: 'ew_real_estate.png',
      },
    ]
  })
}
</script>