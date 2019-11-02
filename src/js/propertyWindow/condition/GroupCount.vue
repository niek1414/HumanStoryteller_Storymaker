<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs4>
                    <v-input messages="The pawn group to count">
                        <v-autocomplete
                                :items="groups"
                                v-model="condition['group']"
                                label="Pawn group"
                                :clearable=true
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
                        <NumberField label="Constant" :myModel.sync="condition['constant']"></NumberField>
                    </v-input>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";

  export default {
    components : {NumberField},
    props : ["condition"],
    name : "GroupCount",
    data : () => ({
      numeralCompares : [
        {value : 'Less', text : 'Less than'},
        {value : 'More', text : 'More than'},
        {value : 'Equal', text : 'Equal'}
      ],
    }),
    computed : {
      groups : function() {
        return window.toolbar.view.getGroups();
      },
    },
  }
</script>

<style scoped>
</style>