<template>
    <div class="info-box">
        <v-input class="property-box" :messages="
            selected.properties['Amount'] ==='' ||
            selected.properties['Amount'] === undefined
            ?'Default: 1 crash part'
            :'The amount of crashed parts'
        ">
            <NumberField label="Amount" :myModel.sync="selected.properties['Amount']"></NumberField>
        </v-input>

        <v-input class="property-box" :messages="
            selected.properties['ShipCrashedPart'] ==='' ||
            selected.properties['ShipCrashedPart'] === undefined
            ?'Default: Mechanoid ship part (Emanator)'
            :'The ship part to crash down onto the rim'
        ">
            <v-autocomplete
                    v-model="selected.properties['ShipCrashedPart']"
                    :items="parts"
                    label="Ship part"
            ></v-autocomplete>
        </v-input>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";
  import NumberField from "../util/NumberField";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "ShipPartCrash",
    data : function() {
      return {
        parts : EventTypes.ShipParts,
      }
    }
  }
</script>

<style scoped>
</style>