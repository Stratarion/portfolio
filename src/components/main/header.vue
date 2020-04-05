<template>
  <v-app-bar
    app
    color="indigo"
    dark
  >
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title>Stratarion git-hub portfolio</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {this.$emit('toggleDrawer')}
  }
}
</script>