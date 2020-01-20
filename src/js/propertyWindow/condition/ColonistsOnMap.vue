<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs4>
                    <v-input messages="Name of a map. If not exists compare is done with 0 colonists.">
                        <v-text-field label="Map name" type="text" v-model="condition['mapName']"/>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="The check type">
                        <v-select :items="numeralCompares" label="Compare check" type="text" v-model="condition['compareType']"/>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="Amount of colonists on that map. (Use `Colonists` check to count all colonists)">
                        <NumberField label="Constant" :myModel.sync="condition['constant']"/>
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
    name : "ColonistsOnMap",
    data : () => ({
      numeralCompares : [
        {value : 'Less', text : 'Less than'},
        {value : 'More', text : 'More than'},
        {value : 'Equal', text : 'Equal'}
      ]
    })
  }
</script>

<style scoped>
</style>