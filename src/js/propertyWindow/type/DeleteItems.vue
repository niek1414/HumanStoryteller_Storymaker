<template>
    <div class="info-box">
        <v-input class="property-box" :messages="
            selected.properties['Item'] ==='' ||
            selected.properties['Item'] === undefined
            ?'Default: random item'
            :'The item to drop'
        ">
            <v-autocomplete
                    v-model="selected.properties['Item']"
                    :items="items"
                    label="Item to remove"
            />
        </v-input>

        <v-input class="property-box" :messages="
            selected.properties['Amount'] ==='' ||
            selected.properties['Amount'] === undefined
            ?'Default: 1'
            :'The amount of items'
        ">
            <NumberField label="Amount" :myModel.sync="selected.properties['Amount']"/>
        </v-input>
    </div>
</template>

<script>
  import DataFile from "../../storyGraph/DataFile";
  import NumberField from "../util/NumberField";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "DeleteItems",
    data : function() {
      return {
        items : DataFile.Items
      }
    }
  }
</script>

<style scoped>
</style>