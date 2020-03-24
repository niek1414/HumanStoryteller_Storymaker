<template>
    <div class="info-box">
        <v-input class="property-box" messages="Target pawns">
            <PawnGroupField :myModel.sync="selected.properties['Pawns']"/>
        </v-input>
        <v-input class="property-box" messages="Intent type">
            <v-autocomplete
                    v-model="selected.properties['IntentType']"
                    :items="IntentTypes"
                    label="Intent"
            />
        </v-input>
        <template v-if="selected.properties['IntentType'] === 'Joinable_MarriageCeremony'">
            <v-input class="property-box" messages="NOT OPTIONAL: Pawn name">
                <v-autocomplete
                        v-model="selected.properties['FirstStringParam']"
                        :items="names"
                        small-chips
                        label="First fiance"
                />
            </v-input>
            <v-input class="property-box" messages="NOT OPTIONAL: Pawn name">
                <v-autocomplete
                        v-model="selected.properties['SecondStringParam']"
                        :items="names"
                        small-chips
                        label="Second fiance"
                />
            </v-input>
        </template>
        <template v-else-if="selected.properties['IntentType'] === 'Siege'">
            <v-input class="property-box"
                     messages="2 is twice the strength, 0.5 half and 1 is default (takes player difficulty & playtime in account)">
                <NumberField label="Strength as multiplier" :myModel.sync="selected.properties['FirstNumberParam']"/>
            </v-input>
        </template>
        <template v-else-if="selected.properties['IntentType'] === 'Wait'">
            <v-input class="property-box" messages="To clean queue without wait just put to 0">
                <NumberField label="Time in ticks to wait" :myModel.sync="selected.properties['FirstNumberParam']"/>
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
                <v-autocomplete
                        v-model="selected.properties['FirstStringParam']"
                        :items="names"
                        small-chips
                        label="Pawn to target"
                />
            </v-input>
            <v-input class="property-box" messages="Time in ticks before job complete, empty is infinite">
                <NumberField label="Time in ticks" :myModel.sync="selected.properties['FirstNumberParam']"/>
            </v-input>
            <v-input class="property-box" messages="If enabled queue job">
                <v-switch
                        label="Should queue?"
                        v-model="selected.properties['Queue']"
                />
            </v-input>
        </template>
        <template v-else-if="selected.properties['IntentType'] === 'Vomit'
                            || selected.properties['IntentType'] === 'LayDown'
                            || selected.properties['IntentType'] === 'UnloadYourInventory'">
            <v-input class="property-box" messages="Time in ticks before job complete, empty is infinite">
                <NumberField label="Time in ticks" :myModel.sync="selected.properties['FirstNumberParam']"/>
            </v-input>
            <v-input class="property-box" messages="If enabled queue job. If off it also clears intent.">
                <v-switch
                        label="Should queue?"
                        v-model="selected.properties['Queue']"
                />
            </v-input>
        </template>
        <template v-else-if="selected.properties['IntentType'] === 'TravelAndExit'
                            || selected.properties['IntentType'] === 'Travel'
                            || selected.properties['IntentType'] === 'DefendPoint'">
            <v-input class="property-box" messages="Location, default is random">
                <LocationField :myModel.sync="selected.properties['Location']"/>
            </v-input>
            <v-input class="property-box" messages="How fast the pawn needs to act">
                <v-autocomplete
                        v-model="selected.properties['SecondStringParam']"
                        :items="urgency"
                        label="Urgency"
                />
            </v-input>
        </template>
        <template v-else-if="selected.properties['IntentType'] === 'ExitMapBest'">
            <v-input class="property-box" messages="How fast the pawn needs to act">
                <v-autocomplete
                        v-model="selected.properties['FirstStringParam']"
                        :items="urgency"
                        label="Urgency"
                />
            </v-input>
        </template>
    </div>
</template>

<script>
    import DataFile from "../../storyGraph/DataFile";
    import NumberField from "../util/NumberField";
    import LocationField from "../util/LocationField";
    import PawnGroupField from "../util/PawnGroupField";

    export default {
        components: {PawnGroupField, LocationField, NumberField},
        props: ["selected"],
        name: "IntentGiver",
        data: function () {
            return {
                urgency: DataFile.Urgency,
                IntentTypes: DataFile.IntentTypes,
                positions: DataFile.Positions
            }
        },
        computed: {
            names: function () {
                return window.toolbar.view.getNames();
            }
        }
    }
</script>

<style scoped>
</style>