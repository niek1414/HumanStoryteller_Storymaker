<template>
    <div class="info-box">
        <v-input class="property-box" messages="Target pawns.">
            <PawnGroupField :myModel.sync="selected.properties['Pawns']"/>
        </v-input>
        <v-input class="property-box" messages="The effect to apply">
            <v-autocomplete
                    :items="healthActions"
                    v-model="selected.properties['HealthAction']"
                    label="Effect"
                    :clearable=true
            />
        </v-input>
        <template v-if="selected.properties['HealthAction'] === 'MissingBodyPart' || selected.properties['HealthAction'] === 'StabBodyPart'">
            <v-input class="property-box" messages="The body part to apply the effect to">
                <v-autocomplete
                        :items="bodyParts"
                        v-model="selected.properties['BodyPart']"
                        label="Body part"
                        :clearable=true
                />
            </v-input>
        </template>
    </div>
</template>

<script>
  import PawnGroupField from "../util/PawnGroupField";
  import DataFile from "../../storyGraph/DataFile";
  export default {
    components : {PawnGroupField},
    props : ["selected"],
    name : "HealPawn",
    data : function() {
      return {
        healthActions : DataFile.HealthActions,
        bodyParts : DataFile.BodyParts,
      }
    }
  }
</script>

<style scoped>
</style>