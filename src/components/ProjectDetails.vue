<template>
    <div>
       <v-fab-transition>
            <v-btn
                fab
                small
                top
                left
                @click="$router.go(-1)"
            >
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
        </v-fab-transition>
        <h1>{{ project.name }}</h1>
        <div v-if="project.embed_html" class="main-content">
            <v-sheet v-if="!showEmbed" class="embedded-content" color="grey">
                <v-btn @click="toggleEmbed">Play</v-btn>
            </v-sheet>
            <iframe v-else class="embedded-content" :src="project.embed_html" frameBorder="0" scrolling="no"></iframe>
        </div>
        <h4>{{ project.summary }}</h4>
        <p>{{ project.description}}</p>
        <v-row>
            <v-column cols="6" class="mx-auto">
                <v-card>
                    <v-card-subtitle>Tools</v-card-subtitle>
                    <v-btn v-for="tool in project.tools" :key="tool">
                        {{ tool }}
                    </v-btn>
                </v-card>
            </v-column>
            <v-column cols="auto" class="mx-auto">
                <v-card>
                    <v-card-subtitle>Categories</v-card-subtitle>
                    <v-chip class="ma-2" label v-for="category in project.categories" :key="category">
                        {{ category }}
                    </v-chip>
                </v-card>
            </v-column>
        </v-row>
    </div>
</template>

<script>
import {get_project} from "../projects"

export default {
    data() {
        return { 
            project: get_project(this.$route.params.project),
            showEmbed: false,
        }
    },
    methods: {
        toggleEmbed() {
            this.showEmbed = true
        }
    }
}
</script>

<style>
.main-content {
    /* width: 90%;
    height: calc(100vw * 600/960); */
    width: 960px;
    height: 638px;
    /* width: 90%;
    max-width: 960px;
    padding-top: 57%; */
    margin: auto;
}

.embedded-content {
    /* position: absolute;
    top: 0;
    left: 0; */
    width: 100%;
    height: 100%;
}
</style>