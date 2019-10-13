<template>
    <div class="info-box">
        <p>
            HowTo:<br/>
        </p>
        <ol style="list-style: circle;">
            <li>Start RimWorld</li>
            <li>Enable creator tools in Human Storyteller mod settings</li>
            <li>Go in-game and mark the structure with the Home Area zone (clear Home Area first).</li>
            <li>Select the 'Creator tools' tab</li>
            <li>Click 'copy home area' and follow the instructions</li>
        </ol>
        <v-input class="property-box" messages="Paste here">
            <v-text-field label="Structure" type="text" v-model="selected.properties['Structure']"></v-text-field>
        </v-input>
        <v-input class="property-box" messages="Structure location offset (from structure origin), default is 0:0">
            <LocationField :myModel.sync="selected.properties['Location']"></LocationField>
        </v-input>
    </div>
</template>

<script>
  import LocationField from "../util/LocationField";

  export default {
    components : {LocationField},
    props : ["selected"],
    name : "CreateStructure"
  }
</script>

<style scoped>
</style>