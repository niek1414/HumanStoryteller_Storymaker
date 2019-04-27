<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs6>
                    <v-input messages="Name of a map. Pick left if exists (generated & player visited)">
                        <v-text-field label="Map name" type="text" v-model="condition['mapName']"></v-text-field>
                    </v-input>
                </v-flex>
                <v-flex xs6>
                    <v-input messages="Name of the pawn">
                        <v-text-field label="Pawn name" type="text" v-model="condition['pawnName']"></v-text-field>
                    </v-input>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    props : ["condition"],
    name : "ColonistOnMap"
  }
</script>

<style scoped>
</style>