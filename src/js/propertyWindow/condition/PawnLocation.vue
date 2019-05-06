<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs4>
                    <v-input messages="Name of the pawn">
                        <v-text-field label="Pawn name" type="text" v-model="condition['pawnName']"></v-text-field>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="Check location (Select from list, type pawn name or enter tile as x:y:z)">
                        <v-combobox
                                v-model="condition['location']"
                                :items="positions"
                                label="Position on map"
                                :return-object="false"
                        ></v-combobox>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="Check radius around point">
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

  export default {
    props : ["condition"],
    name : "PawnLocation",
    data : function() {
      return {
        positions : EventTypes.Positions,
      }
    }
  }
</script>

<style scoped>
</style>