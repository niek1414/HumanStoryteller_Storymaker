<template>
    <div class="info-box">
        <v-input messages="Default: between 0.75 and 1.75 days">
            <v-text-field label="Duration in days" type="number" v-model="selected.properties['Duration']"></v-text-field>
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
  export default {
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