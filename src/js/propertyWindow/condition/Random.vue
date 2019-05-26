<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs12>
                    <v-input messages="Chance in % (0 or lower is always RIGHT, 100 or higher is always LEFT, 50 is an even mix.)">
                        <NumberField label="Chance" :myModel.sync="condition['chance']"></NumberField>
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
    name : "Random"
  }
</script>

<style scoped>
</style>