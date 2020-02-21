<template>
    <div class="info-box">
        <v-input class="property-box"
                 messages="Create the pawn but don't spawn it on the map. Can be used for radio messages or to spawn later. Note: Unspawned pawns without an identifiable name can not be used and will be deleted.">
            <v-switch
                    label="Don't spawn"
                    v-model="selected.properties['NoSpawn']"
            />
        </v-input>
        <v-input class="property-box" messages="The type of pawn.">
            <v-autocomplete
                    v-model="selected.properties['PawnKind']"
                    :items="pawnKind"
                    label="Pawn kind"
            />
        </v-input>
        <v-input class="property-box" messages="Identifiable name of the created pawn">
            <v-text-field label="Pawn name" type="text" v-model="selected.properties['OutName']"/>
        </v-input>
        <v-input class="property-box" messages="Pawn display name"
                 style="width: 100%; position: relative; display: flex; flex-wrap: wrap;">
            <v-text-field label="First name" type="text" v-model="selected.properties['FirstName']"/>
            <v-text-field label="Nick name" type="text" v-model="selected.properties['NickName']"/>
            <v-text-field label="Last name" type="text" v-model="selected.properties['LastName']"/>
        </v-input>
        <v-input class="property-box"
                 messages="The faction of the pawn. If colony, the pawn will join. WARNING: If the pawn type is not compatible with the faction, the pawn may not spawn or worse!">
            <v-select
                    :items="factionTypes"
                    v-model="selected.properties['Faction']"
                    label="Faction"
                    :clearable=true
            />
        </v-input>
        <v-input class="property-box" messages="Hair">
            <v-select
                    :clearable=true
                    :items="hairTypes"
                    label="Hair type"
                    v-model="selected.properties['HairType']"
            />
            <v-text-field label="color e.g: #221111" type="text" v-model="selected.properties['HairColor']"
                          :background-color="selected.properties['HairColor']"/>
        </v-input>
        <v-input class="property-box" messages="Body, melanin between 0 (light) and 1 (darker)">
            <v-select
                    :clearable=true
                    :items="bodyTypes"
                    label="Body type"
                    v-model="selected.properties['BodyType']"
            />
            <NumberField :myModel.sync="selected.properties['Melanin']" label="Melanin"/>
        </v-input>
        <v-input class="property-box" messages="Restricted area">
            <location-field :my-model.sync="selected.properties['RestrictedArea']"/>
        </v-input>
        <v-input class="property-box" messages="Spawn at location, default is at the edge">
            <LocationField :myModel.sync="selected.properties['Location']"/>
        </v-input>
        <v-input class="property-box" messages="Create new born?">
            <v-switch
                    label="New born"
                    v-model="selected.properties['NewBorn']"
            />
        </v-input>
        <v-input class="property-box" messages="Select if pawn must be able to fight">
            <v-switch
                    label="Must be capable of violence"
                    v-model="selected.properties['MustBeCapableOfViolence']"
            />
        </v-input>
        <v-input class="property-box" messages="Pawns biological age. Defaults to a random (logical age).">
            <NumberField label="Biological age" :myModel.sync="selected.properties['BiologicalAge']"/>
        </v-input>
        <v-input class="property-box" messages="Pawns chronological age. Defaults to a random (logical age).">
            <NumberField label="Chronological age" :myModel.sync="selected.properties['ChronologicalAge']"/>
        </v-input>
        <v-input class="property-box">
            <v-select
                    :items="genderTypes"
                    v-model="selected.properties['Gender']"
                    label="Gender"
                    :clearable=true
            />
        </v-input>
        <ThingField
                message="Weapon the pawn has equipped"
                label="Weapon"
                :myModel.sync="selected.properties['Weapon']"
                :things="weapons">
        </ThingField>
        <v-input class="property-box"
                 messages="2 is twice the budget, 0.5 half and 1 is default. Default (1) is defined by group type.">
            <NumberField label="Apparel budget" :myModel.sync="selected.properties['ApparelMoney']"/>
        </v-input>
        <v-input class="property-box" messages="The minimal health points on the gear. On 0 it deteriorates.">
            <NumberField label="Minimal apparel points" :myModel.sync="selected.properties['GearHealthMin']"/>
        </v-input>
        <v-input class="property-box"
                 messages="The max health points on the gear. 1 is 100%. If you want to increase the likelihood of 100% but still want low values you can set this to more then 1 to increase the odds of 100%">
            <NumberField label="Maximal apparel points" :myModel.sync="selected.properties['GearHealthMax']"/>
        </v-input>
    </div>
</template>

<script>
    import EventTypes from "../../storyGraph/EventTypes";
    import NumberField from "../util/NumberField";
    import ThingField from "../util/ThingField";
    import LocationField from "../util/LocationField";

    export default {
        components: {LocationField, ThingField, NumberField},
        props: ["selected"],
        name: "CreatePawn",
        data: function () {
            return {
                factionTypes: [
                    {value: "Ancients", text: "Ancients"},
                    {value: "AncientsHostile", text: "Ancients Hostile"},
                    {value: "Insect", text: "Insect"},
                    {value: "Mechanoid", text: "Mechanoid"},
                    {value: "OutlanderCivil", text: "Outlander Civil"},
                    {value: "OutlanderRough", text: "Outlander Rough"},
                    {value: "Pirate", text: "Pirate"},
                    {value: "PlayerColony", text: "Player Colony"},
                    {value: "TribeCivil", text: "Tribe Civil"},
                    {value: "TribeRough", text: "Tribe Rough"},
                ],
                pawnKind: EventTypes.PawnKind,
                weapons: EventTypes.Weapons,
                hairTypes: EventTypes.HairTypes,
                bodyTypes: EventTypes.BodyTypes,
                genderTypes: [
                    {value: "MALE", text: "Male"},
                    {value: "FEMALE", text: "Female"}
                ]
            }
        }
    }
</script>

<style scoped>
</style>