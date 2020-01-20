<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs12>
                    <v-input messages="The research to check. If researched picking left.">
                        <v-select :items="projects" label="Project" type="text" v-model="condition['project']"/>
                    </v-input>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";

  export default {
    props : ["condition"],
    name : "Research",
    data : () => ({
      projects : EventTypes.ResearchProject
    })
  }
</script>

<style scoped>
</style>