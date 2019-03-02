<template>
    <div class="info-box">
        <v-input :messages="
            selected.properties['Amount'] ==='' ||
            selected.properties['Amount'] === undefined
            ?'Default: 1 crash part'
            :'The amount of crashed parts'
        ">
            <v-text-field label="Amount" type="number" v-model="selected.properties['Amount']"></v-text-field>
        </v-input>

        <v-input :messages="
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

  export default {
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
    .info-box {
        margin: 30px;
    }
</style>