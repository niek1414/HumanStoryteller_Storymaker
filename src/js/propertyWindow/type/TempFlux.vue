<template>
    <div class="info-box">
        <p>
            Changes the temperature of the region. If the temp is set to under zero the cold snap message shows.<br>
            Otherwise the heat wave letter shows unless you override this of course using the mail icon on the left hand panel.
        </p>

        <v-input class="property-box" messages="Default: between 1.5 and 3.5 days">
            <NumberField label="Duration in days" :myModel.sync="selected.properties['Duration']"/>
        </v-input>
        <v-input class="property-box" messages="Default: -20 (cold snap), for a heat wave the default is 17">
            <NumberField label="Change in temperature" :myModel.sync="selected.properties['TempChange']"/>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "TempFlux"
  }
</script>

<style scoped>
</style>