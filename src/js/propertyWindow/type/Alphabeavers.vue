<template>
    <div class="info-box">
        <v-input class="property-box"
                :messages="
            selected.properties['Amount'] ==='' ||
            selected.properties['Amount'] === undefined
            ?'Default: between 1 and 10 depending on colonist count'
            :'Amount of beavers'
        ">
            <NumberField label="Beaver amount" :myModel.sync="selected.properties['Amount']"/>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "Alphabeavers"
  }
</script>

<style scoped>
</style>