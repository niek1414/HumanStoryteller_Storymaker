<template>
    <div class="info-box">
        <p>If unnamed colonist is on, a random pawn of the colony is named. (One that does not have a custom name yet)<br>
            You can use the condition 'Colonists' to find out how many colonists there are.<br>
            This does <b>NOT</b> set the pawn display name. Only the identifiable name that can be used to reference it in your story!</p>
        <v-input class="property-box" messages="Name a unnamed colonist?">
            <v-switch
                    label="Unnamed colonist"
                    v-model="selected.properties['UnnamedColonist']"
            ></v-switch>
        </v-input>
        <template v-if="!selected.properties['UnnamedColonist']">
            <v-input class="property-box" messages="Target pawn, if multiple a random one is selected">
                <PawnGroupField :myModel.sync="selected.properties['Pawns']"/>
            </v-input>
        </template>
        <v-input class="property-box" messages="New identifiable name of the pawn, MANDATORY">
            <v-text-field label="New name" type="text" v-model="selected.properties['OutName']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  import PawnGroupField from "../util/PawnGroupField";

  export default {
    components : {PawnGroupField},
    props : ["selected"],
    name : "RenamePawn",
    computed : {
      names : function() {
        return window.toolbar.view.getNames();
      }
    }
  }
</script>

<style scoped>
</style>