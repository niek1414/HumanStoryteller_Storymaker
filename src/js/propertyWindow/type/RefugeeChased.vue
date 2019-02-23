<template>
    <div class="info-box">
        <v-input messages="2 is twice the strength, 0.5 half and 1 is default (takes player difficulty & playtime in account)">
            <v-text-field label="Strength as multiplier" type="number" v-model="selected.properties['Points']"></v-text-field>
        </v-input>

        <v-input messages="Name of the chased refugee">
            <v-text-field label="Refugee name" type="text" v-model="selected.properties['ChasedName']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "RefugeeChased"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>