<template>
    <div class="info-box">
        <v-input messages="2 is twice the strength, 0.5 half and 1 is default (takes player difficulty & playtime in account)">
            <v-text-field label="Strength as multiplier" type="number" v-model="selected.properties['Points']"></v-text-field>
        </v-input>

        <v-input :messages="
            selected.properties['AnimalKind'] ==='' ||
            selected.properties['AnimalKind'] === undefined
            ?'Default: random kind with minimal three on the map'
            :'Animal kind'
        ">
            <v-autocomplete
                    v-model="selected.properties['AnimalKind']"
                    :items="animals"
                    label="Animal kind"
            ></v-autocomplete>
        </v-input>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";

  export default {
    props : ["selected"],
    name : "AnimalInsanityMass",
    data : function() {
      return {
        animals : EventTypes.AnimalTypes,
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>