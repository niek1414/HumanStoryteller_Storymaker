<template>
    <div class="info-box">
        <v-input class="property-box" messages="Target pawns.">
            <PawnGroupField :myModel.sync="selected.properties['Pawns']"/>
        </v-input>
        <v-input class="property-box" messages="The break status to apply">
            <v-select
                    :items="mentalBreak"
                    v-model="selected.properties['MentalBreak']"
                    label="Mental break"
                    :clearable=true
            />
        </v-input>
    </div>
</template>

<script>
  import PawnGroupField from "../util/PawnGroupField";
  export default {
    components : {PawnGroupField},
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
    }
  }
</script>

<style scoped>
</style>