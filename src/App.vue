<template>
  <v-app>
      <v-app-bar app hide-on-scroll color="cyan lighten-2">

      <v-toolbar-title>Brendan's Portfolio</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text href="home">Home</v-btn>
      <v-btn text href="projects">Projects</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
