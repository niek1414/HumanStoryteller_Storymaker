<template>
    <div class="info-box">
        <v-input class="property-box" messages="Names of pawns to give thought.">
            <v-autocomplete
                    v-model="selected.properties['Names']"
                    :items="names"
                    multiple
                    small-chips
            ></v-autocomplete>
        </v-input>
        <v-input class="property-box" messages="Intent type">
            <v-autocomplete
                    v-model="selected.properties['IntentType']"
                    :items="thoughtTypes"
                    label="Intent"
            ></v-autocomplete>
        </v-input>
        <template v-if="selected.properties['IntentType'] === 'Joinable_MarriageCeremony'">
            <v-input class="property-box" messages="NOT OPTIONAL: Pawn name">
                <v-text-field label="First fiance" type="text" v-model="selected.properties['FirstStringParam']"></v-text-field>
            </v-input>
            <v-input class="property-box" messages="NOT OPTIONAL: Pawn name">
                <v-text-field label="Second fiance" type="text" v-model="selected.properties['SecondStringParam']"></v-text-field>
            </v-input>
        </template>
        <template v-else-if="selected.properties['IntentType'] === 'Siege'">
            <v-input class="property-box" messages="2 is twice the strength, 0.5 half and 1 is default (takes player difficulty & playtime in account)">
                <NumberField label="Strength as multiplier" :myModel.sync="selected.properties['FirstNumberParam']"></NumberField>
            </v-input>
        </template>
        <template v-else-if="selected.properties['IntentType'] === 'Wait'">
            <v-input class="property-box" messages="To clean queue without wait just put to 0">
                <NumberField label="Time in ticks to wait" :myModel.sync="selected.properties['FirstNumberParam']"></NumberField>
            </v-input>
        </template>
        <template v-else-if="selected.properties['IntentType'] === 'AttackMelee'
                            || selected.properties['IntentType'] === 'AttackStatic'
                            || selected.properties['IntentType'] === 'SocialFight'
                            || selected.properties['IntentType'] === 'Insult'
                            || selected.properties['IntentType'] === 'Strip'
                            || selected.properties['IntentType'] === 'TradeWithPawn'
                            || selected.properties['IntentType'] === 'Follow'
                            || selected.properties['IntentType'] === 'FollowClose'
                            || selected.properties['IntentType'] === 'Hunt'
                            || selected.properties['IntentType'] === 'Ignite'
                            || selected.properties['IntentType'] === 'Rescue'
                            || selected.properties['IntentType'] === 'Capture'
                            || selected.properties['IntentType'] === 'ReleasePrisoner'
                            || selected.properties['IntentType'] === 'Kidnap'
                            || selected.properties['IntentType'] === 'PrisonerExecution'
                            || selected.properties['IntentType'] === 'Slaughter'">
            <v-input class="property-box" messages="NOT OPTIONAL: Pawn name">
                <!--                TODO Names name-->
                <v-text-field label="Pawn to target" type="text" v-model="selected.properties['FirstStringParam']"></v-text-field>
            </v-input>
            <v-input class="property-box" messages="Time in ticks before job complete, empty is infinite">
                <NumberField label="Time in ticks" :myModel.sync="selected.properties['FirstNumberParam']"></NumberField>
            </v-input>
            <v-input class="property-box" messages="If enabled queue job">
                <v-switch
                        label="Should queue?"
                        v-model="selected.properties['Queue']"
                ></v-switch>
            </v-input>
        </template>
        <template v-else-if="selected.properties['IntentType'] === 'Vomit'
                            || selected.properties['IntentType'] === 'LayDown'
                            || selected.properties['IntentType'] === 'UnloadYourInventory'">
            <v-input class="property-box" messages="Time in ticks before job complete, empty is infinite">
                <NumberField label="Time in ticks" :myModel.sync="selected.properties['FirstNumberParam']"></NumberField>
            </v-input>
            <v-input class="property-box" messages="If enabled queue job. If off it also clears intent.">
                <v-switch
                        label="Should queue?"
                        v-model="selected.properties['Queue']"
                ></v-switch>
            </v-input>
        </template>
        <template v-else-if="selected.properties['IntentType'] === 'TravelAndExit'
                            || selected.properties['IntentType'] === 'Travel'
                            || selected.properties['IntentType'] === 'DefendPoint'">
            <v-input class="property-box" messages="Location, default is random">
                <LocationField :myModel.sync="selected.properties['Location']"></LocationField>
            </v-input>
            <v-input class="property-box" messages="How fast the pawn needs to act">
                <v-autocomplete
                        v-model="selected.properties['SecondStringParam']"
                        :items="urgency"
                        label="Urgency"
                ></v-autocomplete>
            </v-input>
        </template>
        <template v-else-if="selected.properties['IntentType'] === 'ExitMapBest'">
            <v-input class="property-box" messages="How fast the pawn needs to act">
                <v-autocomplete
                        v-model="selected.properties['FirstStringParam']"
                        :items="urgency"
                        label="Urgency"
                ></v-autocomplete>
            </v-input>
        </template>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";
  import NumberField from "../util/NumberField";
  import LocationField from "../util/LocationField";

  export default {
    components : {LocationField, NumberField},
    props : ["selected"],
    name : "IntentGiver",
    data : function() {
      return {
        urgency : [
          {value : "None", text : "None"},
          {value : "Amble", text : "Amble"},
          {value : "Walk", text : "Walk"},
          {value : "Jog", text : "Jog"},
          {value : "Jog", text : "Jog"},
          {value : "Sprint", text : "Sprint"},
        ],
        thoughtTypes : [
          {value : "AssaultColony", text : "Assault colony"},
          {value : "AssistColony", text : "Assist colony"},
          {value : "Capture", text : "Capture"},
          {value : "DefendAttackedTraderCaravan", text : "Defend attacked trader (must be trader in name group)"},
          {value : "DefendAndExpandHive", text : "Defend and expand hive"},
          {value : "DefendBase", text : "Defend base"},
          {value : "DefendPoint", text : "Defend point"},
          {value : "ExitMapBest", text : "Exit map"},
          {value : "Follow", text : "Follow pawn"},
          {value : "FollowClose", text : "Follow pawn closely"},
          {value : "Hunt", text : "Hunt pawn"},
          {value : "Ignite", text : "Ignite ( does not start a fire ): )"},
          {value : "Insult", text : "Insult"},
          {value : "Kidnap", text : "Kidnap / carry pawn to exit"},
          {value : "LayDown", text : "LayDown"},
          {value : "ManTurrets", text : "Man available turrets"},
          {value : "Joinable_MarriageCeremony", text : "Marriage ceremony (names are guests)"},
          {value : "AttackMelee", text : "Melee attack"},
          {value : "Joinable_Party", text : "Party"},
          {value : "PrisonBreak", text : "Prison break"},
          {value : "PrisonerExecution", text : "Prisoner execution"},
          {value : "AttackStatic", text : "Range attack"},
          {value : "ReleasePrisoner", text : "Release prisoner"},
          {value : "Rescue", text : "Rescue"},
          {value : "Siege", text : "Siege (also spawns resources & blueprints)"},
          {value : "Slaughter", text : "Slaughter"},
          {value : "SleepThenAssaultColony", text : "Sleep, assault if to close"},
          {value : "StageThenAttack", text : "Stage then attack (prepare)"},
          {value : "Steal", text : "Steal"},
          {value : "Strip", text : "Strip pawn"},
          {value : "TradeWithColony", text : "Trade with colony (only walks to colony edge)"},
          {value : "TradeWithPawn", text : "Trade with pawn"},
          {value : "TravelAndExit", text : "Travel to point then exit"},
          {value : "Travel", text : "Travel to point (can be used with condition 'Traveled')"},
          {value : "UnloadYourInventory", text : "Unload all inventory"},
          {value : "VisitColony", text : "Visit colony"},
          {value : "Vomit", text : "Vomit"},
          {value : "Wait", text : "Wait / clear queue"},
        ],
        positions : EventTypes.Positions
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
</style>