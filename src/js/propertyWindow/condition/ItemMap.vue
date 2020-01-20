<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs4>
                    <v-input messages="The type to count on the map">
                        <v-autocomplete v-model="condition['item']"
                                        :items="itemType"
                                        label="Item type"
                        />
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="The check type">
                        <v-select :items="numeralCompares" label="Compare check" type="text" v-model="condition['compareType']"/>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="Amount value to compare to">
                        <NumberField label="Constant" :myModel.sync="condition['constant']"/>
                    </v-input>
                </v-flex>
            </v-layout>
            <p>
                Note 1: This could be demanding if used frequently
                Note 2: Uses same map the event is executed on.
            </p>
        </v-container>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";
  import NumberField from "../util/NumberField";

  export default {
    components : {NumberField},
    props : ["condition"],
    name : "ItemMap",
    data : () => ({
      numeralCompares : [
        {value : 'Less', text : 'Less than'},
        {value : 'More', text : 'More than'},
        {value : 'Equal', text : 'Equal'}
      ],
      itemType : EventTypes.Items
    })
  }
</script>

<style scoped>
</style>