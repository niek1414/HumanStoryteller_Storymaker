<template>
    <div class="info-box">
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
            />
        </v-input>
    </div>
</template>

<script>
  import DataFile from "../../storyGraph/DataFile";
  import NumberField from "../util/NumberField";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "ShipPartCrash",
    data : function() {
      return {
        parts : DataFile.ShipParts,
      }
    }
  }
</script>

<style scoped>
</style>