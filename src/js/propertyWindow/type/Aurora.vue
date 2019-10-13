<template>
    <div class="info-box">
        <v-input class="property-box" messages="Default: between 0.125 and 0.35 days. May be cut short due to the time of day.">
            <NumberField label="Duration in days" :myModel.sync="selected.properties['Duration']"></NumberField>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "Aurora"
  }
</script>

<style scoped>
</style>