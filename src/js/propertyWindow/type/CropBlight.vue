<template>
    <div class="info-box">
        <v-input :messages="
            selected.properties['Amount'] ==='' ||
            selected.properties['Amount'] === undefined
            ?'Default: between 10 and 20'
            :'The amount of plants affected'
        ">
            <v-text-field label="Max amount infected" type="number" v-model="selected.properties['Amount']"></v-text-field>
        </v-input>
        <v-input :messages="
            selected.properties['Range'] ==='' ||
            selected.properties['Range'] === undefined
            ?'Default: 6 tiles'
            :'Amount of tiles that the infection can spread'
        ">
            <v-text-field label="Infection range" type="number" v-model="selected.properties['Range']"></v-text-field>
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