<template>
    <div class="info-box">
        <v-input :messages="
            selected.properties['Disease'] ==='' ||
            selected.properties['Disease'] === undefined
            ?'Default: random disease'
            :'Disease type'
        ">
            <v-autocomplete
                    v-model="selected.properties['Disease']"
                    :items="diseaseTypes"
                    label="Diseases"
            ></v-autocomplete>
        </v-input>
        <v-input messages="Names of pawns. If none given, a random amount (specified by disease type) will become sick.<br> Giving a human an animal sickness or the other way around is unspecified behavior.">
            <v-combobox
                    v-model="selected.properties['Names']"
                    :items="names"
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
    name : "Disease",
    data : function() {
      return {
        diseaseTypes : EventTypes.DiseaseTypes,
      }
    },
    computed : {
      names : function() {
        return window.toolbar.view.getNames();
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>