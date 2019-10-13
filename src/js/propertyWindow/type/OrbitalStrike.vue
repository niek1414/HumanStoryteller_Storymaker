<template>
    <div class="info-box">
        <v-input class="property-box" messages="Orbital strike type">
            <v-select
                    :items="orbitalType"
                    v-model="selected.properties['OrbitalType']"
                    label="Type"
                    :clearable=true
            ></v-select>
        </v-input>
        <v-input class="property-box" messages="Strike location, default is random">
            <LocationField :myModel.sync="selected.properties['Location']"></LocationField>
        </v-input>
    </div>
</template>

<script>
  import LocationField from "../util/LocationField";

  export default {
    components : {LocationField},
    props : ["selected"],
    name : "OrbitalStrike",
    data : function() {
      return {
        orbitalType : [
          {value : "PowerBeam", text : "Orbital power beam"},
          {value : "Bombardment", text : "Orbital bombardment"},
          {value : "Tornado", text : "Tornado"},
        ]
      }
    }
  }
</script>

<style scoped>
</style>