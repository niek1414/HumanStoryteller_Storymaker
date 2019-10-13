<template>
    <div class="info-box">
        <v-input class="property-box" :messages="
            selected.properties['AnimalKind'] ==='' ||
            selected.properties['AnimalKind'] === undefined
            ?'Default: random kind of the larger animals'
            :'Animal kind'
        ">
            <v-autocomplete
                    v-model="selected.properties['AnimalKind']"
                    :items="animals"
                    label="Animal kind"
            ></v-autocomplete>
        </v-input>

        <v-input class="property-box" messages="2 is twice the strength, 0.5 half and 1 is default (takes player difficulty & playtime in account)">
            <NumberField label="Strength as multiplier" :myModel.sync="selected.properties['Points']"></NumberField>
        </v-input>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";
  import NumberField from "../util/NumberField";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "ManhunterPack",
    data : function() {
      return {
        animals : EventTypes.AnimalTypes,
      }
    }
  }
</script>

<style scoped>
</style>