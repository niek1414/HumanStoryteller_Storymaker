<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs4>
                    <v-input messages="The faction">
                        <v-select
                                :items="factionTypes"
                                v-model="condition['faction']"
                                label="Faction"
                    :clearable=true
            ></v-select>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="The check type">
                        <v-select :items="numeralCompares" label="Compare check" type="text" v-model="condition['compareType']"></v-select>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="Relation with player (-100 to 100 cap)">
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
    name : "Relation",
    data : () => ({
      numeralCompares : [
        {value : 'Less', text : 'Less than'},
        {value : 'More', text : 'More than'},
        {value : 'Equal', text : 'Equal'}
      ],
      factionTypes : [
        {value : "OutlanderCivil", text : "Outlander Civil"},
        {value : "OutlanderRough", text : "Outlander Rough"},
        {value : "TribeCivil", text : "Tribe Civil"},
        {value : "TribeRough", text : "Tribe Rough"},
        {value : "Pirate", text : "Pirate"},
      ],
    })
  }
</script>

<style scoped>
</style>