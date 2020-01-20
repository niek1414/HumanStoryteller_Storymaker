<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs12>
                    <v-input messages="Status of the trade (If expired before expiry time you can conclude it has been used).">
                        <v-select :items="tradeResponse" label="Quest status" type="text" v-model="condition['tradeState']"/>
                    </v-input>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    props : ["condition"],
    name : "Trade",
    data : () => ({
      tradeResponse : [
        'Pending',
        'Expired'
      ]
    })
  }
</script>

<style scoped>
</style>