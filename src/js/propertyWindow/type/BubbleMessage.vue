<template>
    <div class="info-box">
        <v-input class="property-box" messages="Identifiable name of the pawn (if pawn is dead, it won't speak..)">
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
                label="Bubble message"
        ></SmartTextArea>
        <v-input class="property-box" messages="Type of text bubble">
            <v-select
                    :items="bubbleTypes"
                    v-model="selected.properties['BubbleType']"
                    label="Bubble type"
                    :clearable=true
            ></v-select>
        </v-input>
    </div>
</template>

<script>
  import SmartTextArea from "../util/SmartTextArea";

  export default {
    components : {SmartTextArea},
    props : ["selected"],
    name : "BubbleMessage",
    data : function() {
      return {
        bubbleTypes : [
          {value : "Normal", text : "Normal"},
          {value : "Think", text : "Think"},
          {value : "Shout", text : "Shout"},
          {value : "Whisper", text : "Whisper"},
        ],
      }
    },
    computed : {
      names : function() {
        return window.toolbar.view.getNames();
      }
    }
  }
</script>

<style scoped>
</style>