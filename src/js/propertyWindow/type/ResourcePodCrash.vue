<template>
    <div class="info-box">
        <ThingField
                label="Item to drop"
                message="Default: random item"
                :myModel.sync="selected.properties['Item']"
                :things="items"
                :has-amount="true">
        </ThingField>
        <v-input class="property-box" messages="If enabled items are placed not dropped.">
            <v-switch
                    label="Instantly place"
                    v-model="selected.properties['InstaPlace']"
            />
        </v-input>
        <v-input class="property-box" messages="Drop location, default is random">
            <LocationField :myModel.sync="selected.properties['Location']"/>
        </v-input>
    </div>
</template>

<script>
  import DataFile from "../../storyGraph/DataFile";
  import NumberField from "../util/NumberField";
  import LocationField from "../util/LocationField";
  import ThingField from "../util/ThingField";

  export default {
    components : {ThingField, LocationField, NumberField},
    props : ["selected"],
    name : "ResourcePodCrash",
    data : function() {
      return {
        items : DataFile.Items,
        positions : DataFile.Positions
      }
    }
  }
</script>

<style scoped>
</style>