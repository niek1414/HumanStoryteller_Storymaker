<template>
    <div class="info-box">
        <v-input class="property-box" messages="Identifiable name of the pawn (can be empty, will use 'Narrator' icon and name)">
            <v-autocomplete
                    :items="names"
                    label="Current name"
                    small-chips
                    v-model="selected.properties['Name']"
                    :clearable=true
            ></v-autocomplete>
        </v-input>
        <SmartTextArea
                :myModel.sync="selected.properties['Message']"
                :start-big="true"
                label="Radio message"
        ></SmartTextArea>
    </div>
</template>

<script>
  import SmartTextArea from "../util/SmartTextArea";

  export default {
    components : {SmartTextArea},
    props : ["selected"],
    name : "RadioMessage",
    computed : {
      names : function() {
        return window.toolbar.view.getNames();
      }
    }
  }
</script>

<style scoped>
</style>