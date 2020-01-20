<template>
    <div class="info-box">
        <v-input class="property-box" :messages="
            selected.properties['Amount'] ==='' ||
            selected.properties['Amount'] === undefined
            ?'Default: between 10 and 20'
            :'The amount of plants'
        ">
            <NumberField label="Amount" :myModel.sync="selected.properties['Amount']"/>
        </v-input>
        <v-input class="property-box" :messages="
            selected.properties['Range'] ==='' ||
            selected.properties['Range'] === undefined
            ?'Default: 6 tiles'
            :'Distance in tiles that the ambrosia can sprout'
        ">
            <NumberField label="Sprout distance" :myModel.sync="selected.properties['Range']"/>
        </v-input>

        <v-input class="property-box" :messages="
            selected.properties['PlantKind'] ==='' ||
            selected.properties['PlantKind'] === undefined
            ?'Default: Amrosia'
            :'Plant kind'
        ">
            <v-autocomplete
                    v-model="selected.properties['PlantKind']"
                    :items="plants"
                    label="Plant kind"
            />
        </v-input>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";
  import NumberField from "../util/NumberField";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "AmbrosiaSprout",
    data : function() {
      return {
        plants : EventTypes.Plants,
      }
    }
  }
</script>

<style scoped>
</style>