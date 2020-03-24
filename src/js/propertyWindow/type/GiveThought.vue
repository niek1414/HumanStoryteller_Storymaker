<template>
    <div class="info-box">
        <v-input class="property-box" messages="Target pawns">
            <PawnGroupField :myModel.sync="selected.properties['Pawns']"/>
        </v-input>
        <v-input class="property-box" messages="Thought type (Select *custom* to make your own)">
            <v-autocomplete
                    v-model="selected.properties['ThoughtType']"
                    :items="thoughtTypes"
                    label="Thoughts"
            />
        </v-input>
        <template v-if="selected.properties['ThoughtType'] === 'custom'">
            <v-input class="property-box" messages="Label of thought">
                <v-text-field label="Label text" type="text" v-model="selected.properties['ThoughtLabel']"/>
            </v-input>
            <v-input class="property-box" messages="Description of thought">
                <v-text-field label="Description text" type="text" v-model="selected.properties['ThoughtDescription']"/>
            </v-input>
            <v-input class="property-box" messages="Mood boost (if bigger than 0) or mood loss (if lower than 0)">
                <NumberField label="Thought effect" :myModel.sync="selected.properties['ThoughtEffect']"/>
            </v-input>
            <v-input class="property-box" messages="Thought duration in days">
                <NumberField label="Thought duration" :myModel.sync="selected.properties['ThoughtDuration']"/>
            </v-input>
        </template>
        <template v-else-if="selected.properties['ThoughtType'] !=='' && selected.properties['ThoughtType'] !== undefined && selected.properties['ThoughtType'] !== 'custom'">
            <v-input class="property-box" messages="Name of other pawn (if type contains {0})">
                <v-autocomplete
                        v-model="selected.properties['OtherPawn']"
                        :items="names"
                        label="Other pawn"
                        small-chips
                />
            </v-input>
        </template>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  import PawnGroupField from "../util/PawnGroupField";
  import DataFile from "../../storyGraph/DataFile";

  export default {
    components : {PawnGroupField, NumberField},
    props : ["selected"],
    name : "GiveThought",
    data : function() {
      return {
        thoughtTypes : DataFile.ThoughtTypes
      }
    },
    computed : {
      names : function() {
        return window.toolbar.view.getNames();
      }
    }
  }
</script>

<style scoped>
</style>