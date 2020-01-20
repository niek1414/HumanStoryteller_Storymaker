<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs12>
                    <v-input messages="Status of the dialog response">
                        <v-select :items="dialogResponse" label="Response status" type="text" v-model="condition['response']"/>
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
      dialogResponse : ['Accepted', 'Denied', 'Pending']
    })
  }
</script>

<style scoped>
</style>