<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link v-for="(link, index) in links" :key="index" :to="link.address">
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
  props: ['links'],
  data: () => ({
    drawer: true,
    
  }),
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>