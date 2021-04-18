<template>
  <div>
    <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax> -->
    <!-- <v-parallax src="https://www.desktopbackground.org/download/o/2014/08/31/817851_black-backgrounds-wood-i-wallpapers-2560x1440-pixel-hd-pattern_2560x1440_h.jpg"></v-parallax> -->
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