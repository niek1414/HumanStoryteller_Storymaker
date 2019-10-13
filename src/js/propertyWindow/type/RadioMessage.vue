<template>
    <div class="info-box">
        <v-input class="property-box" messages="Identifiable name of the pawn (can be empty, will use 'Narrator' icon and name)">
            <v-autocomplete
                    v-model="selected.properties['Name']"
                    :items="names"
                    small-chips
                    label="Current name"
            ></v-autocomplete>
        </v-input>
        <v-input class="property-box" messages="Message content">
            <v-textarea
                    outline
                    label="Radio message"
                    v-model="selected.properties['Message']"
            ></v-textarea>
        </v-input>
    </div>
</template>

<script>
  export default {
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