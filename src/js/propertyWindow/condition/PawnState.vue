<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs6>
                    <v-input messages="Name of the pawn">
                        <v-autocomplete
                                v-model="condition['pawnName']"
                                :items="names"
                                small-chips
                        />
                    </v-input>
                </v-flex>
                <v-flex xs6>
                    <v-input messages="Condition of the pawn">
                        <v-select :items="pawnConditions" label="State" type="text" v-model="condition['pawnCondition']"/>
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
    }),
    computed : {
      names : function() {
        return window.toolbar.storyArc.getNames();
      }
    }
  }
</script>

<style scoped>
</style>