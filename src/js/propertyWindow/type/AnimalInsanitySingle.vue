<template>
    <div class="info-box">
        <p>While called Animal insanity, if one or more pawn names are not animals they will still go berserk.</p>
        <v-input messages="Names of pawns. If none given, a random (weak if before day 7) animal will be picked.">
            <v-autocomplete
                    v-model="selected.properties['Names']"
                    :items="names"
                    multiple
                    small-chips
            ></v-autocomplete>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "AnimalInsanitySingle",
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