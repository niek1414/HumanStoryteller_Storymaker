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
                    label="Item to remove"
            ></v-autocomplete>
        </v-input>

        <v-input :messages="
            selected.properties['Amount'] ==='' ||
            selected.properties['Amount'] === undefined
            ?'Default: 1'
            :'The amount of items'
        ">
            <NumberField label="Amount" :myModel.sync="selected.properties['Amount']"></NumberField>
        </v-input>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";
  import NumberField from "../util/NumberField";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "DeleteItems",
    data : function() {
      return {
        items : EventTypes.Items
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>