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
            ></v-autocomplete>
        </v-input>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";

  export default {
    props : ["selected"],
    name : "Difficulty",
    data : function() {
      return {
        difficulties : EventTypes.DifficultyLevel,
      }
    }
  }
</script>

<style scoped>
</style>