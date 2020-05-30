<template>
  <div>
    <h1>JS</h1>
    <ProjectsList :projects="projects" />
  </div>
</template>

<script>

import ProjectsList     from '@/components/projects/projectsList'

export default {
  components: {
    ProjectsList
  },
  data() {
    return {
      projects: [
        {
          title: 'Code and Magic',
          description: 'Учебное задание. С курсов HTML Academy по JS. Данную игру наставники рассчитывали развивать в следующих курсах, но я на них не попал, поэтому она находится в таком, "недопиленном" виде',
          preview: 'Учебное задание. С курсов HTML Academy по JS',
          gallery_folder: 'codeAndMagic',
          gallery: ['Screenshot_1.jpg', 'Screenshot_2.jpg', 'Screenshot_3.jpg'],
          links: {
            git: 'https://github.com/Stratarion/Stratarion.github.io/tree/master/codeAndMagic',
            pages: 'https://stratarion.github.io/codeAndMagic/'
          },
          src: 'codeAndMagic.jpg',
        },
        {
          title: 'Keksobuking',
          description: 'Учебное задание. С курсов HTML Academy по JS. Кексобукинг это приложение, позволяющее подобрать съемное жилище в Токио. Предложения запрашиваются с ресурса HTML Academy',
          preview: 'Учебное задание. С курсов HTML Academy по JS',
          gallery_folder: 'keksoBooking',
          gallery: ['Screenshot_1.jpg', 'Screenshot_2.jpg', 'Screenshot_3.jpg'],
          links: {
            git: 'https://github.com/Stratarion/Stratarion.github.io/tree/master/keksoboocking',
            pages: 'https://stratarion.github.io/keksoboocking/'
          },
          src: 'keksoBooking.jpg',
        },
        {
          title: 'OX-game',
          description: 'Делал, когда самостоятельно изучал JS. В планах было сделать возможность кастомизации поля (резмеры) и условия победы. Все параметры на данный момент, задаются через конфиг, осталось только добавить возможность их менять через пользовательский интерфейс',
          preview: 'Крестики нолики',
          gallery_folder: 'oxgame',
          gallery: ['Screenshot_1.jpg', 'Screenshot_2.jpg'],
          links: {
            git: 'https://github.com/Stratarion/Stratarion.github.io/tree/master/OXgame',
            pages: 'https://stratarion.github.io/OXgame/index.html'
          },
          src: 'oxgame.jpg',
        },
      ]
    }
  }
}
</script>