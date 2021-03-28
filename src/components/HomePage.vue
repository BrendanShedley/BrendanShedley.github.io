<template>
  <div>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
    <v-container>
        <v-row dense>
            <v-col>
            <div v-for="project in projects" :key="project.name">
                <project-preview :project="project"/>
                <v-divider/>
            </div>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import ProjectPreview from './ProjectPreview';
import {PROJECTS} from '../projects';

export default {
    components: {
        ProjectPreview
    },
    computed: {
        projects() {
            return PROJECTS
        }
    },
}
</script>

<style>

</style>