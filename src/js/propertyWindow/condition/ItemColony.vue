<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs4>
                    <v-input messages="The type to count in stockpiles">
                        <v-autocomplete v-model="condition['item']"
                                        :items="itemType"
                                        label="Item type"
                        ></v-autocomplete>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="The check type">
                        <v-select :items="numeralCompares" label="Compare check" type="text" v-model="condition['compareType']"></v-select>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="Amount value to compare to">
                        <v-text-field label="Constant" type="number" v-model="condition['constant']"></v-text-field>
                    </v-input>
                </v-flex>
            </v-layout>
            <p>Note: This could be demanding if used frequently</p>
        </v-container>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";

  export default {
    props : ["condition"],
    name : "ItemColony",
    data : () => ({
      numeralCompares : [
        {value : 'Less', text : 'Less than'},
        {value : 'More', text : 'More than'},
        {value : 'Equal', text : 'Equal than'}
      ],
      itemType : EventTypes.Items
    })
  }
</script>

<style scoped>
</style>