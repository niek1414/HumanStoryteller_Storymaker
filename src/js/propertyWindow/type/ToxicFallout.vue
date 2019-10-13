<template>
    <div class="info-box">
        <v-input class="property-box" messages="Default: between 2.5 and 10.5 days">
            <NumberField label="Duration in days" :myModel.sync="selected.properties['Duration']"></NumberField>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "ToxicFallout"
  }
</script>

<style scoped>
</style>