<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs12>
                    <v-input messages="The selected difficulty">
                        <v-select :items="difficulties" label="Difficulty type" type="text" v-model="condition['difficulty']"></v-select>
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
    name : "Difficulty",
    data : () => ({
      difficulties : EventTypes.DifficultyLevel
    })
  }
</script>

<style scoped>
</style>