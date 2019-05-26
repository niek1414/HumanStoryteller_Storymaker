<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs4>
                    <v-input messages="The name of the variable">
                        <v-autocomplete
                                label="Variable"
                                :items="variables"
                                v-model="condition['name']"
                        ></v-autocomplete>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="The check type">
                        <v-select :items="numeralCompares" label="Compare check" type="text" v-model="condition['compareType']"></v-select>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="Value to compare to">
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
    name : "Variable",
    data : () => ({
      numeralCompares : [
        {value : 'Less', text : 'Less than'},
        {value : 'More', text : 'More than'},
        {value : 'Equal', text : 'Equal'}]
    }),
    computed : {
      variables : function(){
        return window.toolbar.view.getVariables();
      }
    }
  }
</script>

<style scoped>
</style>