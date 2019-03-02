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
                selected.properties['Amount'] ==='' ||
                selected.properties['Amount'] === undefined
                ?'Default: 20'
                :'The amount of items'
            ">
                <v-text-field label="Amount" type="number" v-model="selected.properties['Amount']"></v-text-field>
            </v-input>
        </template>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";

  export default {
    props : ["selected"],
    name : "ResourcePodCrash",
    data : function() {
      return {
        items : EventTypes.Items,
        qualities : EventTypes.ItemQualities
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>