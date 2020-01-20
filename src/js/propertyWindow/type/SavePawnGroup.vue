<template>
    <div class="info-box">
        <p>Note that the found pawns will be saved, not the filter itself.</p>
        <v-input class="property-box" messages="Target pawns">
            <PawnGroupField :myModel.sync="selected.properties['Pawns']"/>
        </v-input>
        <v-input class="property-box" messages="Name of the group">
            <v-text-field label="Group name" type="text" v-model="selected.properties['OutGroup']"/>
        </v-input>
    </div>
</template>

<script>
  import PawnGroupField from "../util/PawnGroupField";
  export default {
    components : {PawnGroupField},
    props : ["selected"],
    name : "SavePawnGroup"
  }
</script>

<style scoped>
</style>