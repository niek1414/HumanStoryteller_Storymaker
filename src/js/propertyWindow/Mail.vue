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
                ></v-select>
            </v-input>
            <template mt-3 v-if="selected.properties.letter.type !== 'Default'">
                <v-text-field
                        outline
                        label="Mail title"
                        v-model="selected.properties.letter.title"
                ></v-text-field>
                <v-textarea
                        outline
                        label="Mail message"
                        v-model="selected.properties.letter.message"
                ></v-textarea>
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
  export default {
    name : "mail",
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
    .info-box {
        margin: 30px;
    }
</style>