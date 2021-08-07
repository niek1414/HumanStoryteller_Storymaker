<template>
    <span style="width: 100%; position: relative; display: flex; flex-wrap: wrap; font-weight: normal; line-height: 1;">
        <v-select
                :items="isOffset ? offsetTypes : types"
                v-model="myModel.Type"
                :label="isOffset ? 'Offset type' : 'Location type'"
                :clearable=true
                v-on:change="clean()"
        />
        <template v-if="myModel.Type === 'Preset'">
            <v-select
                    :items="positions"
                    v-model="myModel.Value"
                    label="Preset type"
                    :clearable=true
            />
        </template>
        <template v-else-if="myModel.Type === 'Pawn'">
            <v-autocomplete
                    :items="names"
                    v-model="myModel.Value"
                    label="Pawn name"
                    :clearable=true
            />
        </template>
        <template v-else-if="myModel.Type === 'Precise'">
            <NumberField label="X" :myModel.sync="myModel.X" :dynamic="true"/>
            <NumberField label="Z" :myModel.sync="myModel.Z" :dynamic="true"/>
        </template>
        <template v-else-if="myModel.Type === 'Zone'">
             <v-btn v-if="ConnectionState.CONNECTED === connectionState"
                    color="teal"
                    :outline="myModel.Value === '' || myModel.Value === undefined"
                    @click="askForZone">
                Copy zone from RimWorld
            </v-btn>
            <v-text-field v-else
                    label="Zone (paste from in-game)"
                    type="text"
                    v-model="myModel.Value"
                    :clearable=true
            />

            <LocationField :myModel.sync="myModel.Offset" :isOffset="true"/>
        </template>
    </span>
</template>

<script>
  import NumberField from "./NumberField";
  import EventTypes from "../../storyGraph/EventTypes";

  export default {
    components : {NumberField},
    props : ["myModel", "isOffset"],
    name : "LocationField",
    beforeMount : function() {
      if (!(this.myModel && typeof this.myModel === "object")) {
        this.myModel = {};
      }
    },
    beforeUpdate : function() {
      if (!(this.myModel && typeof this.myModel === 'object')) {
        this.myModel = {};
      }
    },
    data() {
      return {
        types : [
          {value : "Preset", text : "Preset"},
          {value : "Pawn", text : "Pawn"},
          {value : "Precise", text : "Precise"},
          {value : "Zone", text : "Zone"},
        ],
        offsetTypes : [
          {value : "Preset", text : "Preset"},
          {value : "Pawn", text : "Pawn"},
          {value : "Precise", text : "Precise"},
        ],
        positions : EventTypes.Positions,
        ConnectionState : Object.freeze({"DISCONNECTED" : 1, "CONNECTING" : 2, "CONNECTED" : 3, "DISCONNECTING" : 4}),
      }
    },
    computed : {
      names : function() {
        return window.toolbar.storyArc.getNames();
      },
      connectionState : function() {
        return window.toolbar.debug.remoteConnectionState;
      }
    },
    methods : {
      clean : function() {
        this.myModel.Value = undefined;
        this.myModel.Offset = undefined;
        this.myModel.X = undefined;
        this.myModel.Y = undefined;
      },
      askForZone : function() {
        window.inputReceiver = this.myModel;
        window.inputReceiverProp = 'Value';
        window.inputReceiverRefresh = this;
        window.toolbar.debug.requestZoneInfo();
        window.toolbar.propertyPanel.$modal.show('dialog', {
          title : 'Waiting..',
          text : "Switch to RimWorld to copy the zone",
          buttons : [
            {
              title : 'Cancel',
              default : true,
              handler : () => {
                window.inputReceiver = null;
                window.toolbar.propertyPanel.$modal.hide('dialog');
              }
            }
          ]
        });
      }
    },
    watch : {
      myModel : {
        handler : function(newVal) {
          this.$emit('update:myModel', newVal);
        },
        deep : true
      }
    }
  }
</script>

<style scoped>
</style>