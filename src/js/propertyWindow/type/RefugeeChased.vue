<template>
    <div class="info-box">
        <v-input class="property-box" messages="2 is twice the strength, 0.5 half and 1 is default (takes player difficulty & playtime in account)">
            <NumberField label="Strength as multiplier" :myModel.sync="selected.properties['Points']"/>
        </v-input>

        <v-input class="property-box" messages="Identifiable name of the chased refugee">
            <v-text-field label="Refugee name" type="text" v-model="selected.properties['OutName']"/>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "RefugeeChased"
  }
</script>

<style scoped>
</style>