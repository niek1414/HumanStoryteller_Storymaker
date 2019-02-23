<template>
    <div class="info-box">
        <p>
            Changes the temperature of the region. If the temp is set to under zero the cold snap message shows.<br>
            Otherwise the heat wave letter shows unless you override this of course using the mail icon on the left hand panel.
        </p>

        <v-input messages="Default: between 1.5 and 3.5 days">
            <v-text-field label="Duration in days" type="number" v-model="selected.properties['Duration']"></v-text-field>
        </v-input>
        <v-input messages="Default: -20 (cold snap), for a heat wave the default is 17">
            <v-text-field label="Change in temperature" type="number" v-model="selected.properties['TempChange']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "TempFlux"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>