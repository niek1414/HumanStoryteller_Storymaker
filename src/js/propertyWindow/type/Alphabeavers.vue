<template>
    <div class="info-box">
        <v-input :messages="
            selected.properties['Amount'] ==='' ||
            selected.properties['Amount'] === undefined
            ?'Default: between 1 and 10 depending on colonist count'
            :'Amount of beavers'
        ">
            <v-text-field label="Beaver amount" type="number" v-model="selected.properties['Amount']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "Alphabeavers"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>