<template>
  <v-app>
      <v-app-bar app hide-on-scroll color="cyan lighten-2">

      <v-toolbar-title>Brendan's Portfolio</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">Home</v-btn>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">Projects</v-btn>
    </v-app-bar>
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>

    <v-main>
      <!-- <v-container>
        <v-row dense>
          <v-col>
            <div v-for="project in projects" :key="project.name">
              <project-preview :project="project"/>
              <v-divider/>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <HelloWorld/> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import ProjectPreview from './components/ProjectPreview';
import {PROJECTS} from './projects';

export default {
  name: 'App',

  Components: {
    HelloWorld,
    ProjectPreview
  },
  data: () => ({
    
    ProjectPreview//
  }),
  computed: {
    projects() {
      return PROJECTS
    }
  },
};
</script>
