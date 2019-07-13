<template>
    <div class="info-box">
        <p>If 'current name' is empty, a random pawn of the colony is named. (One that does not have a custom name yet)<br>
        You can use the condition 'Colonists' to find out how many colonists there are.<br>
        This does <b>NOT</b> set the pawn display name. Only the identifiable name that can be used to reference it in your story!</p>
        <v-input messages="Current name of the pawn (can be empty, see above)">
            <v-autocomplete
                    v-model="selected.properties['Name']"
                    :items="names"
                    small-chips
                    label="Current name"
            ></v-autocomplete>
        </v-input>
        <v-input messages="New identifiable name of the pawn, MANDATORY">
            <v-text-field label="New name" type="text" v-model="selected.properties['OutName']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  export default {
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
    .info-box {
        margin: 30px;
    }
</style>