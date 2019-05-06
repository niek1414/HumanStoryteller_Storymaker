<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs4>
                    <v-input messages="Name of a map. If not exists compare is done with 0 colonists.">
                        <v-text-field label="Map name" type="text" v-model="condition['mapName']"></v-text-field>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="The check type">
                        <v-select :items="numeralCompares" label="Compare check" type="text" v-model="condition['compareType']"></v-select>
                    </v-input>
                </v-flex>
                <v-flex xs4>
                    <v-input messages="Amount of colonists on that map. (Use `Colonists` check to count all colonists)">
                        <v-text-field label="Constant" type="number" v-model="condition['constant']"></v-text-field>
                    </v-input>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
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