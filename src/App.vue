<template>
  <v-app id="inspire">
   <Navigation />
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
              <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>

import Footer from '@/components/main/footer'
import Navigation from '@/components/main/navigation'

  export default {
    props: {
      source: String,
    },
    components: {
      Footer,
      Navigation,
    },
  }
</script>