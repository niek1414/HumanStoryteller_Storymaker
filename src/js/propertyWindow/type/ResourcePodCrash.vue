<template>
    <div class="info-box">
        <v-input :messages="
            selected.properties['Item'] ==='' ||
            selected.properties['Item'] === undefined
            ?'Default: random item'
            :'The item to drop'
        ">
            <v-autocomplete
                    v-model="selected.properties['Item']"
                    :items="items"
                    label="Item to drop"
            ></v-autocomplete>
        </v-input>
        <template v-if="!(selected.properties['Item'] ==='' ||
            selected.properties['Item'] === undefined)">
            <v-input :messages="
                selected.properties['ItemQuality'] ==='' ||
                selected.properties['ItemQuality'] === undefined
                ?'Default: per item random chance'
                :'Quality of the item (if applicable)'
            ">
                <v-autocomplete
                        v-model="selected.properties['ItemQuality']"
                        :items="qualities"
                        label="Item quality"
                ></v-autocomplete>
            </v-input>

            <v-input :messages="
                selected.properties['Stuff'] ==='' ||
                selected.properties['Stuff'] === undefined
                ?'Default: default material for item'
                :'Material of the item (if applicable)'
            ">
                <v-autocomplete
                        v-model="selected.properties['Stuff']"
                        :items="stuff"
                        label="Material"
                ></v-autocomplete>
            </v-input>

            <v-input :messages="
                selected.properties['Amount'] ==='' ||
                selected.properties['Amount'] === undefined
                ?'Default: 20'
                :'The amount of items'
            ">
                <NumberField label="Amount" :myModel.sync="selected.properties['Amount']"></NumberField>
            </v-input>
            <v-input messages="If enabled, items are placed not dropped.">
                <v-switch
                        label="Instantly place"
                        v-model="selected.properties['InstaPlace']"
                ></v-switch>
            </v-input>
            <v-input messages="Drop location, default is random">
                <LocationField :myModel.sync="selected.properties['Location']"></LocationField>
            </v-input>
        </template>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";
  import NumberField from "../util/NumberField";
  import LocationField from "../util/LocationField";

  export default {
    components : {LocationField, NumberField},
    props : ["selected"],
    name : "ResourcePodCrash",
    data : function() {
      return {
        items : EventTypes.Items,
        qualities : EventTypes.ItemQualities,
        stuff : EventTypes.Stuff,
        positions : EventTypes.Positions
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>