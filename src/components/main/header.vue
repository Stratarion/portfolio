<template>
  <v-app-bar
    app
    color="cyan darken-2"
    dark
  >
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title>Oleg Volkov</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {this.$emit('toggleDrawer')}
  }
}
</script>