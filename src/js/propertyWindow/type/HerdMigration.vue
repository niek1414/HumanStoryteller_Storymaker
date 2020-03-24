<template>
    <div class="info-box">
        <v-input class="property-box" :messages="
            selected.properties['AnimalKind'] ==='' ||
            selected.properties['AnimalKind'] === undefined
            ?'Default: random kind of the larger animals'
            :'Animal kind'
        ">
            <v-autocomplete
                    v-model="selected.properties['AnimalKind']"
                    :items="animals"
                    label="Animal kind"
            />
        </v-input>

        <v-input class="property-box" :messages="
            selected.properties['Amount'] ==='' ||
            selected.properties['Amount'] === undefined
            ?'Default: between 3 and 5 depending on body size'
            :'The amount of animals'
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
    name : "HerdMigration",
    data : function() {
      return {
        animals : DataFile.AnimalTypes,
      }
    }
  }
</script>

<style scoped>
</style>