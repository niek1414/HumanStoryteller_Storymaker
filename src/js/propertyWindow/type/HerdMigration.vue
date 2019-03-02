<template>
    <div class="info-box">
        <v-input :messages="
            selected.properties['AnimalKind'] ==='' ||
            selected.properties['AnimalKind'] === undefined
            ?'Default: random kind of the larger animals'
            :'Animal kind'
        ">
            <v-autocomplete
                    v-model="selected.properties['AnimalKind']"
                    :items="animals"
                    label="Animal kind"
            ></v-autocomplete>
        </v-input>

        <v-input :messages="
            selected.properties['Amount'] ==='' ||
            selected.properties['Amount'] === undefined
            ?'Default: between 3 and 5 depending on body size'
            :'The amount of animals'
        ">
            <v-text-field label="Amount" type="number" v-model="selected.properties['Amount']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";

  export default {
    props : ["selected"],
    name : "HerdMigration",
    data : function() {
      return {
        animals : EventTypes.AnimalTypes,
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>