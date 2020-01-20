<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs6>
                    <v-input messages="The check type">
                        <v-select :items="numeralCompares" label="Compare check" type="text" v-model="condition['compareType']"/>
                    </v-input>
                </v-flex>
                <v-flex xs6>
                    <v-input messages="Temperature to compare to">
                        <NumberField label="Constant" :myModel.sync="condition['constant']"/>
                    </v-input>
                </v-flex>
            </v-layout>
            <p>Uses same map the event is executed on.</p>
        </v-container>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField},
    props : ["condition"],
    name : "Temperature",
    data : () => ({
      numeralCompares : [
        {value : 'Less', text : 'Less than'},
        {value : 'More', text : 'More than'},
        {value : 'Equal', text : 'Equal'}
      ],
    })
  }
</script>

<style scoped>
</style>