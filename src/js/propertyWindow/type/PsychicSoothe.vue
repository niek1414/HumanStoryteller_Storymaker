<template>
    <div class="info-box">
        <v-input messages="Default: between 1.5 and 3 days">
            <NumberField label="Duration in days" :myModel.sync="selected.properties['Duration']"></NumberField>
        </v-input>

        <v-input>
            <v-select
                    :items="genderTypes"
                    v-model="selected.properties['Gender']"
                    label="Gender"
                    clearable=true
            ></v-select>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "PsychicSoothe",
    data : function() {
      return {
        genderTypes : [
          {value : "MALE", text : "Male"},
          {value : "FEMALE", text : "Female"}
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