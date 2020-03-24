<template>
    <div class="info-box">
        <p>Does not have a default mail notification.</p>
        <v-input class="property-box" :messages="
            selected.properties['Difficulty'] ==='' ||
            selected.properties['Difficulty'] === undefined
            ?'Default: does nothing'
            :'Set difficulty, can be set back manually though'
        ">
            <v-autocomplete
                    v-model="selected.properties['Difficulty']"
                    :items="difficulties"
                    label="Difficulty level"
            />
        </v-input>
    </div>
</template>

<script>
  import DataFile from "../../storyGraph/DataFile";

  export default {
    props : ["selected"],
    name : "Difficulty",
    data : function() {
      return {
        difficulties : DataFile.DifficultyLevel,
      }
    }
  }
</script>

<style scoped>
</style>