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
      {
        title: 'Credit center (landing)',
        description: 'Order from the freelance exchange. He made an adaptive for mobile devices and widescreen monitors. Used only css',
        preview: 'Made adaptive for mobile devices',
        gallery_folder: 'credit_center_landing',
        gallery: ['mainpage.jpg', 'calculator.jpg', 'feedback.jpg'],
        links: {
          git: 'https://github.com/Stratarion/-credit_center_landing',
          pages: 'https://stratarion.github.io/-credit_center_landing/'
        },
        src: 'credit_center_landing.jpg',
      },
      {
        title: 'pro_manager',
        description: 'One more task abused on freelance. The customer needed to make up a series of landing pages. Website design provided by the customer. The layout is built in https://tilda.cc/',
        preview: 'HTML + CSS',
        gallery_folder: 'mlmlanding',
        gallery: ['Screenshot_1.jpg', 'Screenshot_2.jpg', 'Screenshot_3.jpg', 'Screenshot_4.jpg'],
        links: {
          git: 'https://github.com/Stratarion/mlmlanding',
          pages: 'https://stratarion.github.io/mlmlanding/'
        },
        src: 'pro_manager.jpg',
      },
      {
        title: 'Mlmlanding (landing)',
        description: 'One more task abused on freelance. The customer needed to make up a series of landing pages. Website design provided by the customer. The layout is built in https://tilda.cc/',
        preview: 'HTML + CSS',
        gallery_folder: 'mlmlanding',
        gallery: ['Screenshot_1.jpg', 'Screenshot_2.jpg', 'Screenshot_3.jpg', 'Screenshot_4.jpg'],
        links: {
          git: 'https://github.com/Stratarion/mlmlanding',
          pages: 'https://stratarion.github.io/mlmlanding/'
        },
        src: 'mlmlanding.jpg',
      },
      {
        title: 'Antares',
        description: 'First commerc work',
        preview: 'HTML + CSS + Joomla',
        gallery_folder: 'antares',
        gallery: ['Screenshot_1.jpg', 'Screenshot_2.jpg', 'Screenshot_3.jpg'],
        links: {
          git: 'https://github.com/Stratarion/antares_for_gihub',
          pages: 'https://stratarion.github.io/antares_for_gihub/'
        },
        src: 'antares.jpg',
      },
      {
        title: 'VR Glass (landing)',
        description: 'Training task, when I was just learning layout',
        preview: 'HTML + CSS',
        gallery_folder: 'vr-glass',
        gallery: ['Screenshot_1.jpg', 'Screenshot_2.jpg', 'Screenshot_3.jpg', 'Screenshot_4.jpg'],
        links: {
          git: 'https://github.com/Stratarion/vr-glass',
          pages: 'https://stratarion.github.io/vr-glass/'
        },
        src: 'vr-glass.jpg',
      },
      {
        title: 'Gipsolit (landing)',
        description: 'Training task, when I was just learning layout',
        preview: 'HTML + CSS',
        gallery_folder: 'gipsolit',
        gallery: ['Screenshot_1.jpg', 'Screenshot_2.jpg', 'Screenshot_3.jpg', 'Screenshot_4.jpg', 'Screenshot_5.jpg', 'Screenshot_6.jpg'],
        links: {
          git: 'https://github.com/Stratarion/gipsolit_landing',
          pages: 'https://stratarion.github.io/gipsolit_landing/'
        },
        src: 'gipsolit.jpg',
      },
    ]
  })
}
</script>