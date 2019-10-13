<template>
    <div class="info-box">
        <v-input class="property-box"
                messages="Map name. Not displayed but can be used to referenced in story. (Before executing an event it is smart to check if it is generated & visable by the player using `created map` check.)">
            <v-text-field label="Map name" type="text" v-model="selected.properties['MapName']"></v-text-field>
        </v-input>
        <v-input class="property-box" messages="Quest type. Specifies whats at the core of the quest map.">
            <v-select
                    :items="questTypes"
                    v-model="selected.properties['QuestType']"
                    label="QuestType"
                    :clearable=true
            ></v-select>
        </v-input>
        <template v-if="selected.properties['QuestType'] === 'DownedRefugee'
        || selected.properties['QuestType'] === 'PrisonerWillingToJoin'">
            <v-input class="property-box" messages="Identifiable name for pawn in map center.">
                <v-text-field label="Pawn name" type="text" v-model="selected.properties['OutName']"></v-text-field>
            </v-input>
            <v-input class="property-box" messages="Display name for pawn in map center." style="width: 100%; position: relative; display: flex; flex-wrap: wrap;">
                <v-text-field label="First name" type="text" v-model="selected.properties['FirstName']"></v-text-field>
                <v-text-field label="Nick name" type="text" v-model="selected.properties['NickName']"></v-text-field>
                <v-text-field label="Last name" type="text" v-model="selected.properties['LastName']"></v-text-field>
            </v-input>
        </template>
        <v-input class="property-box" messages="Kind of threat on the quest map. Default: no threat.">
            <v-select
                    :items="threatTypes"
                    v-model="selected.properties['ThreatType']"
                    label="ThreatType"
                    :clearable=true
            ></v-select>
        </v-input>
        <v-input class="property-box" messages="2 is twice the strength, 0.5 half and 1 is default (takes player difficulty & playtime in account)">
            <NumberField label="Strength as multiplier" :myModel.sync="selected.properties['Points']"></NumberField>
        </v-input>
        <v-input class="property-box" messages="Time until quest is gone.">
            <NumberField label="Duration in days" :myModel.sync="selected.properties['Duration']"></NumberField>
        </v-input>
        <v-input class="property-box" messages="Minimal tile distance from target colony.">
            <NumberField label="Minimal distance in tiles" :myModel.sync="selected.properties['MinTileDist']"></NumberField>
        </v-input>
        <v-input class="property-box" messages="Maximal tile distance from target colony (needs to be bigger than 1)">
            <NumberField label="Maximal distance in tiles" :myModel.sync="selected.properties['MaxTileDist']"></NumberField>
        </v-input>
        <template v-if="selected.properties['QuestType'] === 'ItemStash'">
            <v-divider data-content="QUEST REWARD"></v-divider>
            <ThingField
                    label="Item to place"
                    message="The item(s) that spawn in the center of the map. Default: random items"
                    :myModel.sync="selected.properties['MapItem']"
                    :things="items"
                    :has-amount="true">
            </ThingField>
        </template>
        <template v-if="selected.properties['QuestType'] === 'PreciousLump'">
            <v-divider data-content="QUEST REWARD"></v-divider>
            <v-input class="property-box" :messages="
            selected.properties['MineableRock'] ==='' ||
            selected.properties['MineableRock'] === undefined
            ?'Default: random kind of material'
            :'Mineable material'
        ">
                <v-autocomplete
                        v-model="selected.properties['MineableRock']"
                        :items="mineableMaterials"
                        label="Mineable material"
                ></v-autocomplete>
            </v-input>
        </template>
        <template v-if="selected.properties['ThreatType'] === 'Outpost'
         || selected.properties['ThreatType'] === 'Turrets'
         || selected.properties['ThreatType'] === 'AmbushHidden'
         || selected.properties['ThreatType'] === 'AmbushEdge'">
            <v-input class="property-box" messages="If the faction is friendly at the time, they will not attack">
                <v-select
                        :items="factionTypes"
                        v-model="selected.properties['Faction']"
                        label="Faction"
                        :clearable=true
                ></v-select>
            </v-input>
            <v-divider data-content="ELIMINATE CAMP REWARD"></v-divider>
            <v-input class="property-box" messages="If enabled a reward is given for eliminating all threats.">
                <v-switch
                        label="Kill quest"
                        v-model="selected.properties['KillReward']"
                ></v-switch>
            </v-input>
            <template v-if="selected.properties['KillReward']">
                <ThingField
                        label="Item to reward"
                        message="The item(s) that are rewarded on killing every threat. Default: default reward"
                        :myModel.sync="selected.properties['RewardItem']"
                        :things="items"
                        :has-amount="true">
                </ThingField>
                <v-input class="property-box" messages="Faction that wanted enemy eliminated.">
                    <v-select
                            :items="factionTypes"
                            v-model="selected.properties['RewardFaction']"
                            label="Friendly faction"
                            :clearable=true
                    ></v-select>
                </v-input>
                <v-input class="property-box" :messages="
                selected.properties['RewardFactionRelation'] ==='' ||
                selected.properties['RewardFactionRelation'] === undefined
                ?'Relation improvement with friendly faction on eliminating all threats. Default: 0'
                :'Relation improvement on eliminating all threats.'
            ">
                    <NumberField label="Amount" :myModel.sync="selected.properties['RewardFactionRelation']"></NumberField>
                </v-input>
            </template>
        </template>
        <template v-if="selected.properties['ThreatType'] !== ''
        && selected.properties['ThreatType'] !== undefined">
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
        </template>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";
  import NumberField from "../util/NumberField";
  import ThingField from "../util/ThingField";

  export default {
    components : {ThingField, NumberField},
    props : ["selected"],
    name : "Quest",
    data : function() {
      return {
        items : EventTypes.Items,
        mineableMaterials : EventTypes.MineableMaterials,
        questTypes : [
          {value : "DownedRefugee", text : "Downed refugee"},
          {value : "ItemStash", text : "Item stash"},
          {value : "Nothing", text : "No objective"},
          {value : "PreciousLump", text : "Precious mineable lump"},
          {value : "PrisonerWillingToJoin", text : "Prisoner willing to join"},
        ],
        threatTypes : [
          {value : "AmbushHidden", text : "Ambush hidden"},
          {value : "AmbushEdge", text : "Ambush edge"},
          {value : "Manhunters", text : "Manhunters"},
          {value : "Outpost", text : "Outpost"},
          {value : "SleepingMechanoids", text : "Sleeping mechanoids"},
          {value : "Turrets", text : "Turrets"},
        ],
        factionTypes : [
          {value : "OutlanderCivil", text : "Outlander Civil"},
          {value : "OutlanderRough", text : "Outlander Rough"},
          {value : "Pirate", text : "Pirate"},
          {value : "TribeCivil", text : "Tribe Civil"},
          {value : "TribeRough", text : "Tribe Rough"},
        ],
      }
    }
  }
</script>

<style scoped>
</style>