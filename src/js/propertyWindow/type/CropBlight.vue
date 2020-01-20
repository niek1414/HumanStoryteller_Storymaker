<template>
    <div class="info-box">
        <v-input class="property-box" :messages="
            selected.properties['Radius'] ==='' ||
            selected.properties['Radius'] === undefined
            ?'Default: 15 tiles from origin plant'
            :'Amount of tiles that the infection can spread (Max 56)'
        ">
            <NumberField label="Infection range" :myModel.sync="selected.properties['Radius']"/>
        </v-input>
        <v-input class="property-box" :messages="
            selected.properties['Chance'] ==='' ||
            selected.properties['Chance'] === undefined
            ?'Default: 0.4 (= 40%)'
            :'The change (between 0 and 1) of a plant being affected (every plan in the radius is checked once)'
        ">
            <NumberField label="Infection chance" :myModel.sync="selected.properties['Chance']"/>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "CropBlight"
  }
</script>

<style scoped>
</style>