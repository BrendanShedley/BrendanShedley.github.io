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
        <v-sheet
            color="grey"
            height="400px"
        >
        </v-sheet>
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
            project: get_project(this.$route.params.project)
        }
    },
    methods: {
    }
}
</script>

<style>

</style>