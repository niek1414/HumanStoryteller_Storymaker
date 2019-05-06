<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs6>
                    <v-input messages="Name of the pawn">
                        <v-text-field label="Pawn name" type="text" v-model="condition['pawnName']"></v-text-field>
                    </v-input>
                </v-flex>
                <v-flex xs6>
                    <v-input messages="Condition of the pawn">
                        <v-select :items="pawnConditions" label="State" type="text" v-model="condition['pawnCondition']"></v-select>
                    </v-input>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    props : ["condition"],
    name : "PawnState",
    data : () => ({
      pawnConditions : ['Colonist', 'Prisoner']
    })
  }
</script>

<style scoped>
</style>