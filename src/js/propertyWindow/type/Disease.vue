<template>
    <div class="info-box">
        <v-input class="property-box" :messages="
            selected.properties['Disease'] ==='' ||
            selected.properties['Disease'] === undefined
            ?'Default: random disease'
            :'Disease type'
        ">
            <v-autocomplete
                    v-model="selected.properties['Disease']"
                    :items="diseaseTypes"
                    label="Diseases"
            />
        </v-input>
        <v-input class="property-box" messages="Target pawns. If none given, a random amount (specified by disease type) will become sick.<br> Giving a human an animal sickness or the other way around is unspecified behavior.">
            <PawnGroupField :myModel.sync="selected.properties['Pawns']"/>
        </v-input>
    </div>
</template>

<script>
  import DataFile from "../../storyGraph/DataFile";
  import PawnGroupField from "../util/PawnGroupField";

  export default {
    components : {PawnGroupField},
    props : ["selected"],
    name : "Disease",
    data : function() {
      return {
        diseaseTypes : DataFile.DiseaseTypes,
      }
    }
  }
</script>

<style scoped>
</style>