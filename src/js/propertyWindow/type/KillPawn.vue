<template>
    <div class="info-box">
        <v-input class="property-box" messages="Names of pawns to kill.">
            <v-autocomplete
                    v-model="selected.properties['Names']"
                    :items="names"
                    multiple
                    small-chips
            ></v-autocomplete>
        </v-input>
        <v-input class="property-box" messages="If enabled pawn is deleted (without notification) and removed from the history.">
            <v-switch
                    label="Destroy"
                    v-model="selected.properties['Destroy']"
            ></v-switch>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "KillPawn",
    computed : {
      names : function() {
        return window.toolbar.view.getNames();
      }
    }
  }
</script>

<style scoped>
</style>