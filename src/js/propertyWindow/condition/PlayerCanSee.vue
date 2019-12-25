<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs6>
                    <v-input messages="Check location">
                        <LocationField :myModel.sync="condition['location']"></LocationField>
                    </v-input>
                </v-flex>
                <v-flex xs6>
                    <v-input messages="Type">
                        <v-select :items="seeConditions" label="Check if location is .." type="text" v-model="condition['seeConditions']"></v-select>
                    </v-input>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  import LocationField from "../util/LocationField";
  export default {
    components : {LocationField},
    props : ["condition"],
    name : "PlayerCanSee",
    data : () => ({
      seeConditions : [
        {value : "OnlyFog", text : "not fogged"},
        {value : "OnlyViewport", text : "within player screen"},
        {value : "FogAndViewport", text : "not fogged and within player screen"},
      ],
    })
  }
</script>

<style scoped>
</style>