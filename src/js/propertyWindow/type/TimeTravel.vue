<template>
    <div class="info-box">
        <p>
            Rimworld times:
            <kbd>Hours in a day: 24<br> Days in quadrums(season): 15<br> Quadrums in a year: 4</kbd>
        </p>
        <v-input messages="Forwards time by hours (-1 wil rewind time by one hour)">
            <v-text-field label="Change in hours" type="number" v-model="selected.properties['HourChange']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "TimeTravel"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>