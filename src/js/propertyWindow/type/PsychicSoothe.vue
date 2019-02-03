<template>
    <div class="info-box">
        <v-input messages="Default: between 1.5 and 3 days">
            <v-text-field label="Duration in days" type="number" v-model="selected.properties['Duration']"></v-text-field>
        </v-input>

        <v-input>
            <v-select
                    :items="genderTypes"
                    v-model="selected.properties['Gender']"
                    label="Gender"
            ></v-select>
        </v-input>
    </div>
</template>

<script>
  export default {
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