<template>
    <div class="info-box">
        <v-input messages="Name pawn to spawn on. (If empty or unknown position is random)">
            <v-text-field label="Pawn name" type="text" v-model="selected.properties['Name']"></v-text-field>
        </v-input>
        <v-input messages="Orbital strike type">
            <v-select
                    :items="orbitalType"
                    v-model="selected.properties['OrbitalType']"
                    label="Type"
            ></v-select>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "OrbitalStrike",
    data : function() {
      return {
        orbitalType : [
          {value : "Tornado", text : "Tornado"},
          {value : "PowerBeam", text : "Orbital power beam"},
          {value : "Bombardment", text : "Orbital bombardment"},
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