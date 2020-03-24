<template>
    <div class="info-box">
        <v-input class="property-box" messages="2 is twice the strength, 0.5 half and 1 is default (takes player difficulty & playtime in account)">
            <NumberField label="Strength as multiplier" :myModel.sync="selected.properties['Points']"/>
        </v-input>

        <v-input class="property-box" messages="If the faction is friendly at the time, they will come but not attack">
            <v-select
                    clearable
                    :items="factionTypes"
                    v-model="selected.properties['Faction']"
                    label="Faction"
            />
        </v-input>

        <v-input class="property-box" messages="Not all factions are usable for all strategies and arrive modes">
            <v-select
                    clearable
                    :items="strategyTypes"
                    v-model="selected.properties['Strategy']"
                    label="Strategy"
            />
        </v-input>

        <v-input class="property-box">
            <v-select
                    clearable
                    :items="arriveModeTypes"
                    v-model="selected.properties['ArriveMode']"
                    label="Arrive mode"
            />
        </v-input>
        <v-input class="property-box" messages="ATTENTION: This will generate batches with above parameters until enough and remove redundant if too much. This means it MAY NOT be in line with set difficulty!">
            <NumberField label="Amount of pawns" :myModel.sync="selected.properties['Amount']"/>
        </v-input>
        <v-input class="property-box" messages="Assigned from top to bottom. Name overflow will be ignored.">
            <v-combobox
                    v-model="selected.properties['OutNames']"
                    :items="[]"
                    label="Identifiable names"
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
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  import DataFile from "../../storyGraph/DataFile";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "RaidEnemy",
    data : function() {
      return {
        factionTypes : DataFile.Factions,
        strategyTypes : DataFile.StrategyTypes,
        arriveModeTypes : DataFile.ArriveModeTypes,
      }
    }
  }
</script>

<style scoped>
</style>