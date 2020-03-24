<template>
    <div class="info-box">
        <v-input class="property-box" messages="Target pawns">
            <PawnGroupField :myModel.sync="selected.properties['Pawns']"/>
        </v-input>
        <v-input class="property-box"
                 messages="Enable to despawn pawn. Disable to spawn pawn. (If pawn is already in this state, nothing happens.)">
            <v-switch
                    label="Despawn or spawn?"
                    v-model="selected.properties['Despawn']"
            />
        </v-input>
        <v-input class="property-box" messages="Pawn display name"
                 style="width: 100%; position: relative; display: flex; flex-wrap: wrap;">
            <v-text-field label="First name" type="text" v-model="selected.properties['FirstName']"/>
            <v-text-field label="Nick name" type="text" v-model="selected.properties['NickName']"/>
            <v-text-field label="Last name" type="text" v-model="selected.properties['LastName']"/>
        </v-input>
        <v-input class="property-box" messages="Hair">
            <v-select
                    :clearable=true
                    :items="hairTypes"
                    label="Hair type"
                    v-model="selected.properties['HairType']"
            />
            <v-text-field label="color e.g: #221111" type="text" v-model="selected.properties['HairColor']" :background-color="selected.properties['HairColor']"/>
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
        <v-input class="property-box" messages="Strip pawn?">
            <v-switch
                    label="Strip"
                    v-model="selected.properties['Strip']"
            />
        </v-input>
        <v-input class="property-box"
                 messages="Clear pawn mind? (Will stop with current job, stops mental breaks, wakes etc..)">
            <v-switch
                    label="Clear mind"
                    v-model="selected.properties['ClearMind']"
            />
        </v-input>
        <v-input class="property-box" messages="Banish pawn from colony?">
            <v-switch
                    label="Banish"
                    v-model="selected.properties['Banish']"
            />
        </v-input>
        <v-input class="property-box" messages="If selected, pawn will be drafted, otherwise undrafted if applicable">
            <v-switch
                    label="Set drafted"
                    v-model="selected.properties['SetDrafted']"
            />
        </v-input>
        <v-input class="property-box" messages="New faction of the pawn (empty is unchanged)">
            <v-select
                    :clearable=true
                    :items="factionTypes"
                    label="Faction"
                    v-model="selected.properties['Faction']"
            />
        </v-input>
        <v-input class="property-box" messages="Teleport to location, default does not teleport">
            <LocationField :myModel.sync="selected.properties['Location']"/>
        </v-input>
        <v-input class="property-box" messages="Pawns biological age (in years). Default is unchanged.">
            <NumberField :myModel.sync="selected.properties['AgeBioYear']" label="Biological age"/>
        </v-input>
        <v-input class="property-box"
                 messages="Pawn traits. Default does nothing. One or more selected will first clear existing traits.">
            <v-autocomplete
                    :items="pawnTraits"
                    label="Traits"
                    multiple
                    small-chips
                    v-model="selected.properties['Traits']"
            />
        </v-input>
        <v-divider data-content="GEAR"/>
        <v-btn block flat v-on:click="addGear()">
            Add
        </v-btn>
        <section :key="refreshKey">
            <template v-for="(item) in selected.properties['Gear']">
                <div :key="item.uuid" class="gear">
                    <ThingField
                            :myModel.sync="item"
                            :things="items"
                            label="Gear"
                            message="Apparel, weapon or inventory (Items treated in that order)">
                        <v-btn color="error" flat v-on:click="removeGear(item.uuid)">
                            remove
                        </v-btn>
                    </ThingField>
                </div>
            </template>
        </section>
        <v-divider data-content="SKILLS"/>
        <v-input class="property-box"
                 messages="If enabled skills (below) are added (or removed if - is used), otherwise it just sets the skill to the specified level.">
            <v-switch
                    label="Add skills"
                    v-model="selected.properties['SkillAdd']"
            />
        </v-input>
        <v-input class="property-box">
            <NumberField :myModel.sync="selected.properties['SkillAnimals']" label="Animals"/>
            <NumberField :myModel.sync="selected.properties['SkillArtistic']" label="Artistic"/>
            <NumberField :myModel.sync="selected.properties['SkillConstruction']" label="Construction"/>
            <NumberField :myModel.sync="selected.properties['SkillCooking']" label="Cooking"/>
        </v-input>
        <v-input class="property-box">
            <NumberField :myModel.sync="selected.properties['SkillCrafting']" label="Crafting"/>
            <NumberField :myModel.sync="selected.properties['SkillPlants']" label="Plants"/>
            <NumberField :myModel.sync="selected.properties['SkillMedicine']" label="Medicine"/>
            <NumberField :myModel.sync="selected.properties['SkillMelee']" label="Melee"/>
        </v-input>
        <v-input class="property-box">
            <NumberField :myModel.sync="selected.properties['SkillMining']" label="Mining"/>
            <NumberField :myModel.sync="selected.properties['SkillIntellectual']" label="Intellectual"/>
            <NumberField :myModel.sync="selected.properties['SkillShooting']" label="Shooting"/>
            <NumberField :myModel.sync="selected.properties['SkillSocial']" label="Social"/>
        </v-input>
    </div>
</template>

<script>
    import DataFile from "../../storyGraph/DataFile";
    import NumberField from "../util/NumberField";
    import LocationField from "../util/LocationField";
    import PawnGroupField from "../util/PawnGroupField";
    import ThingField from "../util/ThingField";

    export default {
        components: {ThingField, PawnGroupField, LocationField, NumberField},
        props: ["selected"],
        name: "EditPawn",
        beforeMount: function () {
            if (!this.selected.properties["Gear"]) {
                this.selected.properties["Gear"] = []
            }
        },
        data: function () {
            return {
                refreshKey: "",
                factionTypes: DataFile.Factions,
                positions: DataFile.Positions,
                pawnTraits: DataFile.PawnTraits,
                hairTypes: DataFile.HairTypes,
                bodyTypes: DataFile.BodyTypes,
                items: DataFile.Items,
            }
        },
        computed: {
            names: function () {
                return window.toolbar.view.getNames();
            }
        },
        methods: {
            addGear: function () {
                this.selected.properties["Gear"].push({uuid: Date.now()});
                this.refreshKey += "a";
            },
            removeGear: function (uuid) {
                this.selected.properties["Gear"] = this.selected.properties["Gear"].filter(function (el) {
                    return el.uuid !== uuid;
                });
                this.refreshKey += "a";
            }
        }
    }
</script>

<style scoped>
</style>