<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs4>
                    <v-input messages="Check location">
                        <LocationField :myModel.sync="condition['location']"/>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="Left if at least this amount is found in de location. Default: 1">
                        <NumberField label="At least present" :myModel.sync="condition['atLeastAmount']"/>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="Kind of thing to filter for">
                        <v-autocomplete
                                v-model="condition['filterCategory']"
                                :items="filterCategories"
                                small-chips
                        />
                    </v-input>
                </v-flex>
            </v-layout>
            <v-layout align-center justify-space-between row>
                <v-flex xs12 v-if="condition['filterCategory']">
                    <v-input v-if="condition['filterCategory']==='Pawn'" messages="Pawn(s) to check for">
                        <PawnGroupField :myModel.sync="condition['pawnGroup']"/>
                    </v-input>
                    <v-input v-if="condition['filterCategory']==='Item'" messages="Item type to check for">
                        <v-autocomplete v-model="condition['item']"
                                        :items="itemType"
                                        label="Item type"
                        />
                    </v-input>
                    <v-input v-if="condition['filterCategory']==='Category'" messages="Thing group to check for">
                        <v-autocomplete v-model="condition['thingRequestGroups']"
                                        :items="thingCategories"
                                        label="Categories"
                                        multiple
                        />
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
  import NumberField from "../util/NumberField";
  import PawnGroupField from "../util/PawnGroupField";

  export default {
    components : {PawnGroupField, NumberField, LocationField},
    props : ["condition"],
    name : "OnLocation",
    data : function() {
      return {
        positions : EventTypes.Positions,
        filterCategories : [
          {value : 'Pawn', text : 'Pawn'},
          {value : 'Item', text : 'Item'},
          {value : 'Category', text : 'Category'}
        ],
        itemType : EventTypes.Items,
        thingCategories : EventTypes.ThingCategories,
      }
    },
    computed : {
      names : function() {
        return window.toolbar.storyArc.getNames();
      }
    }
  }
</script>

<style scoped>
</style>