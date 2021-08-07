<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs6>
                    <v-input messages="Name of a map. Pick left if exists (generated & player visited)">
                        <v-text-field label="Map name" type="text" v-model="condition['mapName']"/>
                    </v-input>
                </v-flex>
                <v-flex xs6>
                    <v-input messages="Name of the pawn">
                        <v-autocomplete
                                v-model="condition['pawnName']"
                                :items="names"
                                small-chips
                        />
                    </v-input>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    props : ["condition"],
    name : "ColonistOnMap",
    computed : {
      names : function() {
        return window.toolbar.storyArc.getNames();
      }
    }
  }
</script>

<style scoped>
</style>