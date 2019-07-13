<template>
    <div class="info-box">
        <v-input messages="Identifiable name of the wild man">
            <v-text-field label="Pawn name" type="text" v-model="selected.properties['OutName']"></v-text-field>
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
  export default {
    props : ["selected"],
    name : "WildManWandersIn",
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