<template>
    <div class="info-box">
        <v-input class="property-box" messages="Target pawns.">
            <PawnGroupField :myModel.sync="selected.properties['Pawns']"/>
        </v-input>
        <v-input class="property-box" messages="The break status to apply">
            <v-select
                    :items="mentalBreak"
                    v-model="selected.properties['MentalBreak']"
                    label="Mental break"
                    :clearable=true
            />
        </v-input>
    </div>
</template>

<script>
  import PawnGroupField from "../util/PawnGroupField";
  import DataFile from "../../storyGraph/DataFile";
  export default {
    components : {PawnGroupField},
    props : ["selected"],
    name : "MentalBreak",
    data : function() {
      return {
        mentalBreak : DataFile.MentalBreakTypes,
      }
    }
  }
</script>

<style scoped>
</style>