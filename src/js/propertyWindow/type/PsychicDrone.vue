<template>
    <div class="info-box">
        <v-input messages="Default: between 0.75 and 1.75 days">
            <NumberField label="Duration in days" :myModel.sync="selected.properties['Duration']"></NumberField>
        </v-input>

        <v-input>
            <v-select
                    :items="genderTypes"
                    v-model="selected.properties['Gender']"
                    label="Gender"
            ></v-select>
        </v-input>

        <v-input>
            <v-select
                    :items="levels"
                    v-model="selected.properties['PsyLevel']"
                    label="Severity level"
            ></v-select>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "PsychicDrone",
    data : function() {
      return {
        genderTypes : [
          {value : "MALE", text : "Male"},
          {value : "FEMALE", text : "Female"}
        ],
        levels : [
          {value : "LOW", text : "Low"},
          {value : "MEDIUM", text : "Medium"},
          {value : "HIGH", text : "High"},
          {value : "EXTREME", text : "Extreme"}
        ]
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>