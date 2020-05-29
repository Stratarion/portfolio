<template>
  <div class="text-center">
    <v-dialog
      v-model="showModal"
      width="1200"
      @click:outside="closeModal"
    >
      <v-card>
        <v-card-title
          class="headline cyan darken-3 white--text"
          primary-title
        >
          {{ project.title}}
          <v-spacer></v-spacer>
          <v-btn @click="closeModal" icon color="white">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-carousel
          v-if="project.gallery"
          cycle
          height="500"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(slide, i) in project.gallery"
            :key="i"
            :src="require('@/images/projects/' + project.gallery_folder + '/' + slide)"
          >
          </v-carousel-item>
        </v-carousel>

        <v-card-text class="mt-5">
          {{ project.description }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="project.links.pages"
            color="cyan darken-3"
            text
            :href="project.links.pages"
          >
            Link
          </v-btn>
          <v-btn
            v-if="project.links.git"
            color="cyan darken-3"
            text
            :href="project.links.git"
          >
            Git
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['showModal', 'project'],
  methods: {
    closeModal() {this.$emit('closeModal')}
  }
}
</script>