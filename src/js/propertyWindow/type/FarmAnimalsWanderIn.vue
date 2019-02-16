<template>
    <div class="info-box">
        <v-input :messages="
            selected.properties['Amount'] ==='' ||
            selected.properties['Amount'] === undefined
            ?'Default: between 2 and 10 depending on body size'
            :'Amount of animals'
        ">
            <v-text-field label="Animal amount" type="number" v-model="selected.properties['Amount']"></v-text-field>
        </v-input>

        <v-input :messages="
            selected.properties['Kind'] ==='' ||
            selected.properties['Kind'] === undefined
            ?'Default: random non-wild animal'
            :'Animal kind'
        ">
            <v-autocomplete
                    v-model="selected.properties['Kind']"
                    :items="animals"
                    label="Animal kind"
            ></v-autocomplete>
        </v-input>

        <v-input messages="Assigned from top to bottom. Name overflow will be ignored.">
            <v-combobox
                    v-model="selected.properties['Names']"
                    :items="[]"
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

  export default {
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
    .info-box {
        margin: 30px;
    }
</style>