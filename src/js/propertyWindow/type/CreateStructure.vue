<template>
    <div class="info-box">
        <p>
            HowTo:<br/>
        </p>
        <ol style="list-style: circle;">
            <li>Start RimWorld</li>
            <li>Enable creator tools in Human Storyteller mod settings and load a game</li>
            <li>Connect the Storymaker with RimWorld (unselect this node to see the connect button)</li>
            <li>Click 'COPY ZONE FROM RIMWORLD' button below</li>
            <li>Go in-game and mark the structure with the Home Area zone (clear Home Area first)</li>
            <li>Confirm the in-game popup and return to the Storymaker</li>
        </ol>
        <v-input v-if="ConnectionState.CONNECTED === connectionState" class="property-box">
            <v-btn color="teal"
                   :outline="selected.properties['Structure'] === '' || selected.properties['Structure'] === undefined"
                   @click="askForStructure">
                Copy zone from RimWorld
            </v-btn>
        </v-input>
        <v-input v-else class="property-box" messages="Paste here">
            <v-text-field label="Structure" type="text" v-model="selected.properties['Structure']"/>
        </v-input>
        <v-input class="property-box" messages="Structure location offset (from structure origin), default is 0:0">
            <LocationField :myModel.sync="selected.properties['Location']"/>
        </v-input>
    </div>
</template>

<script>
  import LocationField from "../util/LocationField";

  export default {
    components : {LocationField},
    props : ["selected"],
    name : "CreateStructure",
    data() {
      return {
        ConnectionState : Object.freeze({"DISCONNECTED" : 1, "CONNECTING" : 2, "CONNECTED" : 3, "DISCONNECTING" : 4}),
      }
    },
    computed : {
      connectionState : function() {
        return window.toolbar.debug.remoteConnectionState;
      }
    },
    methods : {
      askForStructure : function() {
        window.inputReceiver = this.selected.properties;
        window.inputReceiverProp = 'Structure';
        window.inputReceiverRefresh = this;
        window.toolbar.debug.requestStructureInfo();
        window.toolbar.propertyPanel.$modal.show('dialog', {
          title : 'Waiting..',
          text : "Switch to RimWorld to copy the structure",
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
  }
</script>

<style scoped>
</style>