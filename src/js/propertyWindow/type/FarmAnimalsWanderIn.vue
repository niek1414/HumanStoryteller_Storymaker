<template>
    <div class="info-box">
        <v-input class="property-box" :messages="
            selected.properties['Amount'] ==='' ||
            selected.properties['Amount'] === undefined
            ?'Default: between 2 and 10 depending on body size'
            :'Amount of animals'
        ">
            <NumberField label="Animal amount" :myModel.sync="selected.properties['Amount']"/>
        </v-input>

        <v-input class="property-box" :messages="
            selected.properties['AnimalKind'] ==='' ||
            selected.properties['AnimalKind'] === undefined
            ?'Default: random non-wild animal'
            :'Animal kind'
        ">
            <v-autocomplete
                    v-model="selected.properties['AnimalKind']"
                    :items="animals"
                    label="Animal kind"
            />
        </v-input>

        <v-input class="property-box" messages="Assigned from top to bottom. Name overflow will be ignored.">
            <v-combobox
                    v-model="selected.properties['OutNames']"
                    :items="[]"
                    label="Identifiable names"
                    multiple
                    small-chips
            >
                <template slot="no-data">
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>
                               Press <kbd>enter</kbd> to create a new name
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-combobox>
        </v-input>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";
  import NumberField from "../util/NumberField";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "FarmAnimalsWanderIn",
    data : function() {
      return {
        animals : EventTypes.AnimalTypes,
      }
    }
  }
</script>

<style scoped>
</style>