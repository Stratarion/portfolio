<template>
  <v-app id="inspire">
   <Navigation :links="links" />
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>

import Footer         from '@/components/main/footer'
import Navigation     from '@/components/main/navigation'

  export default {
    props: {
      source: String,
    },
    components: {
      Footer,
      Navigation,
    },
    data: () => ({
      links: [
        {
          text: 'В начало',
          address: '/',
          icon: 'mdi-home',
        },
        {
          text: 'Верстка',
          address: 'html-projects',
          icon: 'mdi-language-html5',
        },
        // {
        //   text: 'Приложения на ReactJS',
        //   address: '/',
        //   icon: 'mdi-react',
        // },
        {
          text: 'Приложения на VueJS',
          address: 'vue-projects',
          icon: 'mdi-vuejs',
        },
        {
          text: 'Нативный JS',
          address: 'js-projects',
          icon: 'mdi-language-javascript',
        },
        // {
        //   text: 'Другое',
        //   address: 'other-page',
        //   icon: 'mdi-archive',
        // },
        // {
        //   text: 'Замороженные проекты',
        //   address: 'freeze-projects',
        //   icon: 'mdi-snowflake-alert',
        // }
      ]
    })
  }
</script>