<template>
    <div class="info-box">
        <v-input messages="Names of pawns to apply the effect.">
            <v-combobox
                    v-model="selected.properties['Names']"
                    :items="[]"
                    multiple
                    small-chips
            >
                <template slot="no-data">
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                Press <kbd>enter</kbd> to create a new name
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-combobox>
        </v-input>
        <v-input messages="The break status to apply">
            <v-select
                    :items="mentalBreak"
                    v-model="selected.properties['MentalBreak']"
                    label="Mental break"
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
          {value : "Berserk", text : "Berserk"},
          {value : "FireStartingSpree", text : "Starting fire spree"},
          {value : "Binging_Food", text : "Binging food"},
          {value : "Catatonic", text : "Catatonic"},
          {value : "Jailbreaker", text : "Jailbreaker"},
          {value : "Slaughterer", text : "Slaughterer"},
          {value : "MurderousRage", text : "Murderous rage"},
          {value : "RunWild", text : "Run wild"},
          {value : "GiveUpExit", text : "Give up (to exit)"},
          {value : "Wander_Psychotic", text : "Wander - Psychotic"},
          {value : "Tantrum", text : "Tantrum"},
          {value : "TargetedTantrum", text : "Targeted tantrum"},
          {value : "BedroomTantrum", text : "Bedroom tantrum"},
          {value : "SadisticRage", text : "Sadistic tage"},
          {value : "CorpseObsession", text : "Corpse obsession"},
          {value : "Wander_Sad", text : "Wander - Sad"},
          {value : "Wander_OwnRoom", text : "Wander - Own room"},
          {value : "InsultingSpree", text : "Insulting spree"},
          {value : "TargetedInsultingSpree", text : "Targeted insulting spree"},
        ],
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>