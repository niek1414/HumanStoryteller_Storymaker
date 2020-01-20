<template>
    <div class="info-box">
        <p>
            Rimworld times:<br>
            <kbd>Hours in a day: 24<br> Days in quadrums(season): 15<br> Quadrums in a year: 4</kbd>
        </p>
        <v-input class="property-box" messages="Forwards time by hours (-1 wil rewind time by one hour)">
            <NumberField label="Change in hours" :myModel.sync="selected.properties['HourChange']"/>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "TimeTravel"
  }
</script>

<style scoped>
</style>