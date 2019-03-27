<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs12>
                    <v-autocomplete messages="If biome is among:"
                                    v-model="condition['biomes']"
                                    multiple
                                    :items="biomes"
                                    label="Biomes"
                    ></v-autocomplete>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";

  export default {
    props : ["condition"],
    name : "Biome",
    data : () => ({
      biomes : EventTypes.Biomes
    })
  }
</script>

<style scoped>
</style>