<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs12>
                    <p>Pick left if structure creation is completed.<br>NOTE: Every tick a max of 50 items are spawned therefor creation time depends on framerate.</p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    props : ["condition"],
    name : "CreatedStructure"
  }
</script>

<style scoped>
</style>