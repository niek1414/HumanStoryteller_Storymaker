<template>
    <div class="info-box">
        <v-input messages="Identifiable name of the pawn (can be empty, will show 'unknown')">
            <v-autocomplete
                    v-model="selected.properties['Name']"
                    :items="names"
                    small-chips
                    label="Current name"
            ></v-autocomplete>
        </v-input>
        <v-textarea
                outline
                label="Radio message"
                v-model="selected.properties['Message']"
        ></v-textarea>
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
    .info-box {
        margin: 30px;
    }
</style>