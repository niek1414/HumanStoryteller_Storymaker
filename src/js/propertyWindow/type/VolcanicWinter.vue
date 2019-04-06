<template>
    <div class="info-box">
        <v-input messages="Default: between 7.5 and 40 days">
            <NumberField label="Duration in days" :myModel.sync="selected.properties['Duration']"></NumberField>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "VolcanicWinter"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>