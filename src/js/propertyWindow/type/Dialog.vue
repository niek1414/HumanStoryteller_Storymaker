<template>
    <div class="info-box">
        <p>To customize the message title and text, use the mail icon on the left.<br>
        To react to the user decision add the event specific condition `Dialog` in the condition tab (just above the mail icon).</p>
        <v-input class="property-box" :messages="
            selected.properties['Silver'] ==='' ||
            selected.properties['Silver'] === undefined
            ?'Default: free'
            :'Price that needs to be paid to select `accept`'
        ">
            <NumberField label="Silver price" :myModel.sync="selected.properties['Silver']"></NumberField>
        </v-input>
        <v-input class="property-box" :messages="
            selected.properties['Duration'] ==='' ||
            selected.properties['Duration'] === undefined
            ?'Default: 1 day (to show instantly just input 0.001 and never expire is 0)'
            :'Amount of days the proposal can be postponed (b.v.: 0.5 for half a day). To show instantly just input 0.001 and never expire is 0.'
        ">
            <NumberField label="Proposal duration" :myModel.sync="selected.properties['Duration']"></NumberField>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "Dialog"
  }
</script>

<style scoped>
</style>