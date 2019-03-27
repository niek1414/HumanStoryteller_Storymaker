<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs6>
                    <v-input messages="The check type">
                        <v-select :items="numeralCompares" label="Compare check" type="text" v-model="condition['compareType']"></v-select>
                    </v-input>
                </v-flex>
                <v-flex xs6>
                    <v-input messages="Amount of colonists to compare to">
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
    name : "Colonists",
    data : () => ({
      numeralCompares : [
        {value : 'Less', text : 'Less than'},
        {value : 'More', text : 'More than'},
        {value : 'Equal', text : 'Equal than'}
      ],
    })
  }
</script>

<style scoped>
</style>