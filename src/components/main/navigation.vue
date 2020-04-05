<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link v-for="link in links" :key="link" :to="link.address">
          <!-- <router-link tag="div" :to="{ name: link.address }"> -->
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          <!-- </router-link> -->
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <Header @toggleDrawer="toggleDrawer" />
  </div>
</template>

<script>
import Header from '@/components/main/header'

export default {
  components: {
    Header
  },
  data: () => ({
    drawer: true,
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
      {
        text: 'Другое',
        address: 'other-page',
        icon: 'mdi-archive',
      },
      {
        text: 'Замороженные проекты',
        address: 'freeze-projects',
        icon: 'mdi-snowflake-alert',
      }
    ]
  }),
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>