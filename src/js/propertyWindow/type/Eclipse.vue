<template>
    <div class="info-box">
        <v-input class="property-box" messages="Default: between 0.75 and 1.25 days">
            <NumberField label="Duration in days" :myModel.sync="selected.properties['Duration']"/>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "Eclipse"
  }
</script>

<style scoped>
</style>