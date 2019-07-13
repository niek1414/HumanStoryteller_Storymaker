<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs4>
                    <v-input messages="Name of the pawn">
                        <v-autocomplete
                                v-model="condition['pawnName']"
                                :items="names"
                                small-chips
                        ></v-autocomplete>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="Check location">
                        <LocationField :myModel.sync="condition['location']"></LocationField>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="Check radius around point (has no effect if as location, á zone is selected)">
                        <v-text-field label="Radius" type="number" v-model="condition['radius']"></v-text-field>
                    </v-input>
                </v-flex>
            </v-layout>
            <p>Uses same map the event is executed on.</p>
        </v-container>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";
  import LocationField from "../util/LocationField";

  export default {
    components : {LocationField},
    props : ["condition"],
    name : "PawnLocation",
    data : function() {
      return {
        positions : EventTypes.Positions,
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
</style>