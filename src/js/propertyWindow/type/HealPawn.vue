<template>
    <div class="info-box">
        <v-input class="property-box" messages="Names of pawns to heal.">
            <v-autocomplete
                    v-model="selected.properties['Names']"
                    :items="names"
                    multiple
                    small-chips
            ></v-autocomplete>
        </v-input>
        <v-input class="property-box" messages="If enabled even permanent injuries are healed.">
            <v-switch
                    label="Miracle"
                    v-model="selected.properties['Miracle']"
            ></v-switch>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "HealPawn",
    computed : {
      names : function() {
        return window.toolbar.view.getNames();
      }
    }
  }
</script>

<style scoped>
</style>