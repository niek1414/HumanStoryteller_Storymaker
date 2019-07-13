<template>
    <div class="info-box">
        <v-input messages="Names of pawns to apply the effect.">
            <v-autocomplete
                    v-model="selected.properties['Names']"
                    :items="names"
                    multiple
                    small-chips
            ></v-autocomplete>
        </v-input>
        <v-input messages="The break status to apply">
            <v-select
                    :items="mentalBreak"
                    v-model="selected.properties['MentalBreak']"
                    label="Mental break"
                    clearable=true
            ></v-select>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "MentalBreak",
    data : function() {
      return {
        mentalBreak : [
          {value : "BedroomTantrum", text : "Bedroom tantrum"},
          {value : "Berserk", text : "Berserk"},
          {value : "Binging_Food", text : "Binging food"},
          {value : "Catatonic", text : "Catatonic"},
          {value : "CorpseObsession", text : "Corpse obsession"},
          {value : "GiveUpExit", text : "Give up (to exit)"},
          {value : "InsultingSpree", text : "Insulting spree"},
          {value : "Jailbreaker", text : "Jailbreaker"},
          {value : "MurderousRage", text : "Murderous rage"},
          {value : "RunWild", text : "Run wild"},
          {value : "SadisticRage", text : "Sadistic tage"},
          {value : "Slaughterer", text : "Slaughterer"},
          {value : "FireStartingSpree", text : "Starting fire spree"},
          {value : "Tantrum", text : "Tantrum"},
          {value : "TargetedTantrum", text : "Targeted tantrum"},
          {value : "TargetedInsultingSpree", text : "Targeted insulting spree"},
          {value : "Wander_Psychotic", text : "Wander - Psychotic"},
          {value : "Wander_Sad", text : "Wander - Sad"},
          {value : "Wander_OwnRoom", text : "Wander - Own room"},
        ],
      }
    },
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