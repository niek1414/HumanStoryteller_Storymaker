<template>
    <div class="info-box">
        <v-switch
                label="Display letter"
                v-model="selected.properties.letter.show"
        ></v-switch>
        <template v-if="selected.properties.letter.show">
            <v-input>
                <v-select
                        :items="mailType"
                        v-model="selected.properties.letter.type"
                        label="Type"
                    :clearable=true
            ></v-select>
            </v-input>
            <template mt-3 v-if="selected.properties.letter.type !== 'Default'">
                <SmartTextArea
                        label="Mail title"
                        :myModel.sync="selected.properties.letter.title"
                ></SmartTextArea>
                <SmartTextArea
                        label="Mail message"
                        :myModel.sync="selected.properties.letter.message"
                        :start-big="true"
                ></SmartTextArea>
                <v-switch
                        label="Shake screen"
                        v-model="selected.properties.letter.shake"
                ></v-switch>
                <v-switch
                        label="Instantly popup"
                        v-model="selected.properties.letter.force"
                ></v-switch>
            </template>
        </template>
    </div>
</template>

<script>
  import SmartTextArea from "./util/SmartTextArea";
  export default {
    name : "mail",
    components : {SmartTextArea},
    props : ["canvas", "selected"],
    data : function() {
      return {
        mailType : [
          {text : "Show default letter & text", value : "Default"},
          {text : "Big threat", value : "ThreatBig"},
          {text : "Small threat", value : "ThreatSmall"},
          {text : "Negative event", value : "NegativeEvent"},
          {text : "Neutral event", value : "NeutralEvent"},
          {text : "Positive event", value : "PositiveEvent"},
          {text : "Death", value : "Death"},
        ],
      }
    }
  }
</script>

<style scoped>
</style>