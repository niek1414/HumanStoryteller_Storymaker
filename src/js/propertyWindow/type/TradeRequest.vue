<template>
    <div class="info-box">
        <v-input class="property-box" messages="Time until offer is gone.">
            <NumberField label="Duration in days" :myModel.sync="selected.properties['Duration']"/>
        </v-input>
        <v-divider data-content="REQUESTED ITEMS"/>
        <ThingField
                label="Item to trade"
                message="The item(s) that are requested. Default: random items"
                :myModel.sync="selected.properties['RequestItem']"
                :things="items"
                :has-amount="true"
                :has-no-quality="true"
                :has-no-stuff="true">
        </ThingField>
        <v-divider data-content="REWARDED ITEMS"/>
        <ThingField
                label="Item to reward"
                message="The item(s) that the player receives on trade completion. Default: matching the request"
                :myModel.sync="selected.properties['RewardItem']"
                :things="items"
                :has-amount="true">
        </ThingField>
    </div>
</template>

<script>
  import DataFile from "../../storyGraph/DataFile";
  import NumberField from "../util/NumberField";
  import ThingField from "../util/ThingField";

  export default {
    components : {ThingField, NumberField},
    props : ["selected"],
    name : "TradeRequest",
    data : function() {
      return {
        items : DataFile.Items,
      }
    }
  }
</script>

<style scoped>
</style>