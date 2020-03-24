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
                    />
                </v-flex>
            </v-layout>
            <p>Uses same map the event is executed on.</p>
        </v-container>
    </div>
</template>

<script>
  import DataFile from "../../storyGraph/DataFile";

  export default {
    props : ["condition"],
    name : "Biome",
    data : () => ({
      biomes : DataFile.Biomes
    })
  }
</script>

<style scoped>
</style>