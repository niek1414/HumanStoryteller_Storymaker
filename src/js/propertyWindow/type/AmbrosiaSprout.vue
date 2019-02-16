<template>
    <div class="info-box">
        <v-input :messages="
            selected.properties['Amount'] ==='' ||
            selected.properties['Amount'] === undefined
            ?'Default: between 10 and 20'
            :'The amount of plants'
        ">
            <v-text-field label="Amount" type="number" v-model="selected.properties['Amount']"></v-text-field>
        </v-input>
        <v-input :messages="
            selected.properties['Range'] ==='' ||
            selected.properties['Range'] === undefined
            ?'Default: 6 tiles'
            :'Distance in tiles that the ambrosia can sprout'
        ">
            <v-text-field label="Sprout distance" type="number" v-model="selected.properties['Range']"></v-text-field>
        </v-input>
    </div>
</template>ú

<script>
  export default {
    props : ["selected"],
    name : "AmbrosiaSprout"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>