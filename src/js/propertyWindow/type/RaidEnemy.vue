<template>
    <div class="info-box">
        <v-input messages="2 is twice the strength, 0.5 half and 1 is default (takes player difficulty & playtime in account)">
            <NumberField label="Strength as multiplier" :myModel.sync="selected.properties['Points']"></NumberField>
        </v-input>

        <v-input messages="If the faction is friendly at the time, they will come but not attack">
            <v-select
                    :items="factionTypes"
                    v-model="selected.properties['Faction']"
                    label="Faction"
            ></v-select>
        </v-input>

        <v-input messages="Not all factions are usable for all strategies and arrive modes">
            <v-select
                    :items="strategyTypes"
                    v-model="selected.properties['Strategy']"
                    label="Strategy"
            ></v-select>
        </v-input>

        <v-input>
            <v-select
                    :items="arriveModeTypes"
                    v-model="selected.properties['ArriveMode']"
                    label="Arrive mode"
            ></v-select>
        </v-input>

        <v-input messages="Assigned from top to bottom. Name overflow will be ignored.">
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
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "RaidEnemy",
    data : function() {
      return {
        factionTypes : [
          // {value : "Ancients", text : "Ancients"},
          // {value : "AncientsHostile", text : "Ancients Hostile"},
          {value : "Mechanoid", text : "Mechanoid"},
          // {value : "Insect", text : "Insect"},
          {value : "OutlanderCivil", text : "Outlander Civil"},
          {value : "OutlanderRough", text : "Outlander Rough"},
          {value : "TribeCivil", text : "Tribe Civil"},
          {value : "TribeRough", text : "Tribe Rough"},
          {value : "Pirate", text : "Pirate"},
          // {value : "PlayerColony", text : "Player Colony"},
        ],

        strategyTypes : [
          {value : "ImmediateAttack", text : "Immediate attack"},
          {value : "StageThenAttack", text : "Stage then attack"},
          {value : "ImmediateAttackSmart", text : "Immediate attack smart"},
          {value : "ImmediateAttackSappers", text : "Immediate attack sappers"},
          {value : "Siege", text : "Siege"},
        ],

        arriveModeTypes : [
          {value : "EdgeWalkIn", text : "Edge walk in"},
          {value : "EdgeDrop", text : "Edge drop"},
          {value : "EdgeWalkInGroups", text : "Edge walk in groups"},
          {value : "EdgeDropGroups", text : "Edge drop groups"},
          {value : "CenterDrop", text : "Center drop"},
          {value : "RandomDrop", text : "Random drop"},
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