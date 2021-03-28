<template>
    <v-card>
        <v-row>
            <v-col cols="8">
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                ></v-img>
            </v-col>
            <v-col cols="4">
                <v-card-title class="headline">
                    {{ project.name }}
                </v-card-title>

                <v-card-subtitle>{{ project.summary }}</v-card-subtitle>

                <v-card-actions>
                    <v-btn :href="'/projects/' + project.url_name">More info</v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    props: {
        project: {type: Object, default: null},
    },
}
</script>

<style>

</style>