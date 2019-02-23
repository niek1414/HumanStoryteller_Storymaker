<template>
    <div class="info-box">
        <v-input :messages="
            selected.properties['Radius'] ==='' ||
            selected.properties['Radius'] === undefined
            ?'Default: 15 tiles from origin plant'
            :'Amount of tiles that the infection can spread'
        ">
            <v-text-field label="Infection range" type="number" v-model="selected.properties['Radius']"></v-text-field>
        </v-input>
        <v-input :messages="
            selected.properties['Chance'] ==='' ||
            selected.properties['Chance'] === undefined
            ?'Default: 0.4 (= 40%)'
            :'The change (between 0 and 1) of a plant being affected (every plan in the radius is checked once)'
        ">
            <v-text-field label="Infection chance" type="number" v-model="selected.properties['Chance']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "CropBlight"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>