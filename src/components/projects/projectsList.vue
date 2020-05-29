<template>
  <div v-if="projects">
    <v-row dense>
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="12"
        lg="3"
        md="4"
        sm="6"
      >
      <v-hover v-slot:default="{ hover }">
        <v-card>
          <v-img
            :src="require('@/images/projects/' + project.src)"
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="350px"
          >
            <v-expand-transition>
              <div
                @click="() => showProject(project)"
                v-if="hover"
                class="px-10 subtitle-1 d-flex transition-fast-in-fast-out cyan lighten-1 darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                {{ project.preview }}
              </div>
            </v-expand-transition>
            <v-card-title v-text="project.title"></v-card-title>
          </v-img>
          <v-card-actions>
            <v-btn
              @click="() => showProject(project)"
              color="cyan darken-3"
              class="white--text"
            >
              Details
            </v-btn>
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
        </v-hover>
      </v-col>
    </v-row>
    <ProjectModal
      v-if="currentProject"
      :showModal="showModal"
      :project="currentProject"
      @closeModal="() => this.showModal = false"
    />
  </div>
</template>

<script>

  import ProjectModal     from '@/components/projects/projectModal'

  export default {
    props: ['projects'],
    data: () => ({
      showModal: false,
      currentProject: null,
    }),
    components: {
      ProjectModal
    },
    methods: {
      closeProjectModal() {
        this.showModal = false
      },
      showProject(project) {
        this.currentProject = project
        this.showModal = true
      }
    }
  }
</script>

<style scoped>

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .7;
  position: absolute;
  width: 100%;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
}
</style>