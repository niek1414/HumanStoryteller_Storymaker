<template>
    <div class="info-box">
        <v-input messages="Default: between 0.75 and 1.25 days">
            <NumberField label="Duration in days" :myModel.sync="selected.properties['Duration']"></NumberField>
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
    .info-box {
        margin: 30px;
    }
</style>