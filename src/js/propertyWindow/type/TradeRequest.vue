<template>
    <div class="info-box">
        <v-input messages="Time until offer is gone.">
            <NumberField label="Duration in days" :myModel.sync="selected.properties['Duration']"></NumberField>
        </v-input>
        <v-divider data-content="REQUESTED ITEMS"></v-divider>
        <v-input :messages="
            selected.properties['RequestItem'] ==='' ||
            selected.properties['RequestItem'] === undefined
            ?'Default: random items'
            :'The item(s) that are requested'
        ">
            <v-autocomplete
                    v-model="selected.properties['RequestItem']"
                    :items="items"
                    label="Item to trade"
            ></v-autocomplete>
        </v-input>
        <template v-if="!(selected.properties['RequestItem'] ===''
            || selected.properties['RequestItem'] === undefined)">
            <v-input :messages="
                selected.properties['RequestAmount'] ==='' ||
                selected.properties['RequestAmount'] === undefined
                ?'Default: 5'
                :'The amount of items'
            ">
                <NumberField label="Amount" :myModel.sync="selected.properties['RequestAmount']"></NumberField>
            </v-input>
        </template>
        <v-divider data-content="REWARDED ITEMS"></v-divider>
        <v-input :messages="
            selected.properties['RewardItem'] ==='' ||
            selected.properties['RewardItem'] === undefined
            ?'Default: matching the request'
            :'The item(s) that the player receives on trade completion.'
        ">
            <v-autocomplete
                    v-model="selected.properties['RewardItem']"
                    :items="items"
                    label="Item to reward"
            ></v-autocomplete>
        </v-input>
        <template v-if="!(selected.properties['RewardItem'] ===''
            || selected.properties['RewardItem'] === undefined)">
            <v-input :messages="
                selected.properties['RewardItemQuality'] ==='' ||
                selected.properties['RewardItemQuality'] === undefined
                ?'Default: per item random chance'
                :'Quality of the item (if applicable)'
            ">
                <v-autocomplete
                        v-model="selected.properties['RewardItemQuality']"
                        :items="qualities"
                        label="Item quality"
                ></v-autocomplete>
            </v-input>

            <v-input :messages="
                selected.properties['RewardStuff'] ==='' ||
                selected.properties['RewardStuff'] === undefined
                ?'Default: default material for item'
                :'Material of the item (if applicable)'
            ">
                <v-autocomplete
                        v-model="selected.properties['RewardStuff']"
                        :items="stuff"
                        label="Material"
                ></v-autocomplete>
            </v-input>

            <v-input :messages="
                selected.properties['RewardAmount'] ==='' ||
                selected.properties['RewardAmount'] === undefined
                ?'Default: 20'
                :'The amount of items'
            ">
                <NumberField label="Amount" :myModel.sync="selected.properties['RewardAmount']"></NumberField>
            </v-input>
        </template>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";
  import NumberField from "../util/NumberField";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "TradeRequest",
    data : function() {
      return {
        items : EventTypes.Items,
        qualities : EventTypes.ItemQualities,
        stuff : EventTypes.Stuff,
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>