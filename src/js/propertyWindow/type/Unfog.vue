<template>
    <div class="info-box">
        <p>
            If unfog is selected it will refog the map first to reset all fog.
        </p>
        <v-input class="property-box" messages="Unfog map, if disabled it fogs the map instead">
            <v-switch
                    :label="selected.properties['Unfog']?'Unfog':'Fog'"
                    v-model="selected.properties['Unfog']"
            />
        </v-input>
        <template v-if="selected.properties['Unfog']">
            <v-input class="property-box" messages="Location to start unfog, default is all colonists">
                <LocationField :myModel.sync="selected.properties['Location']"/>
            </v-input>
        </template>
    </div>
</template>

<script>
  import LocationField from "../util/LocationField";
  export default {
    components : {LocationField},
    props : ["selected"],
    name : "Unfog",
  }
</script>

<style scoped>
</style>