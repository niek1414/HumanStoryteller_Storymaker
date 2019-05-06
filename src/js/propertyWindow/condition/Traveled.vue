<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs12>
                    <p>Pick left if pawn has arrived after giving the travel intent.<br>NOTE: This can ONLY be used with the 'travel to point' intent!!</p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    props : ["condition"],
    name : "Traveled"
  }
</script>

<style scoped>
</style>