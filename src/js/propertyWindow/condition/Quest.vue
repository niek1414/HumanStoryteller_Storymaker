<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs12>
                    <v-input messages="Status of the quest">
                        <v-select :items="questResponse" label="Quest status" type="text" v-model="condition['questState']"></v-select>
                    </v-input>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    props : ["condition"],
    name : "Dialog",
    data : () => ({
      questResponse : [
        'Pending',
        'Entered',
        'KilledAll',
        'Expired'
      ]
    })
  }
</script>

<style scoped>
</style>