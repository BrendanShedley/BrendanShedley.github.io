import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from "../components/HomePage.vue"
import ProjectSearch from "../components/ProjectSearch.vue"
import ProjectDetails from "../components/ProjectDetails.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HomePage 
        },
        {
            path: '/projects',
            name: 'project-search',
            component: ProjectSearch 
        },
        {
            path: '/projects/:project',
            name: 'project-details',
            component: ProjectDetails
        },
        {
            path: '',
            redirect: '/home',
        },
        {
            path: '/',
            redirect: '/home',
        }
    ]
})