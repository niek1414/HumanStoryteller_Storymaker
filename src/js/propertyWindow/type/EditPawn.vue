<template>
    <div class="info-box">
        <v-input class="property-box" messages="Target pawns">
            <PawnGroupField :myModel.sync="selected.properties['Pawns']"/>
        </v-input>
        <v-input class="property-box" messages="Enable to despawn pawn. Disable to spawn pawn. (If pawn is already in this state, nothing happens.)">
            <v-switch
                    label="Despawn or spawn?"
                    v-model="selected.properties['Despawn']"
            ></v-switch>
        </v-input>
        <v-input class="property-box" messages="Pawn display name" style="width: 100%; position: relative; display: flex; flex-wrap: wrap;">
            <v-text-field label="First name" type="text" v-model="selected.properties['FirstName']"></v-text-field>
            <v-text-field label="Nick name" type="text" v-model="selected.properties['NickName']"></v-text-field>
            <v-text-field label="Last name" type="text" v-model="selected.properties['LastName']"></v-text-field>
        </v-input>
        <v-input class="property-box" messages="Strip pawn?">
            <v-switch
                    label="Strip"
                    v-model="selected.properties['Strip']"
            ></v-switch>
        </v-input>
        <v-input class="property-box" messages="Clear pawn mind? (Will stop with current job, stops mental breaks, wakes etc..)">
            <v-switch
                    label="Clear mind"
                    v-model="selected.properties['ClearMind']"
            ></v-switch>
        </v-input>
        <v-input class="property-box" messages="Banish pawn from colony?">
            <v-switch
                    label="Banish"
                    v-model="selected.properties['Banish']"
            ></v-switch>
        </v-input>
        <v-input class="property-box" messages="If selected, pawn will be drafted, otherwise undrafted if applicable">
            <v-switch
                    label="Set drafted"
                    v-model="selected.properties['SetDrafted']"
            ></v-switch>
        </v-input>
        <v-input class="property-box" messages="New faction of the pawn (empty is unchanged)">
            <v-select
                    :clearable=true
                    :items="factionTypes"
                    label="Faction"
                    v-model="selected.properties['Faction']"
            ></v-select>
        </v-input>
        <v-input class="property-box" messages="Teleport to location, default does not teleport">
            <LocationField :myModel.sync="selected.properties['Location']"></LocationField>
        </v-input>
        <v-input class="property-box" messages="Pawns biological age (in years). Default is unchanged.">
            <NumberField :myModel.sync="selected.properties['AgeBioYear']" label="Biological age"></NumberField>
        </v-input>
        <v-input class="property-box" messages="Pawn traits. Default does nothing. One or more selected will first clear existing traits.">
            <v-autocomplete
                    :items="pawnTraits"
                    label="Traits"
                    multiple
                    small-chips
                    v-model="selected.properties['Traits']"
            ></v-autocomplete>
        </v-input>
        <v-divider data-content="GEAR"></v-divider>
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
        <v-divider data-content="SKILLS"></v-divider>
        <v-input class="property-box" messages="If enabled skills (below) are added (or removed if - is used), otherwise it just sets the skill to the specified level.">
            <v-switch
                    label="Add skills"
                    v-model="selected.properties['SkillAdd']"
            ></v-switch>
        </v-input>
        <v-input class="property-box">
            <NumberField :myModel.sync="selected.properties['SkillAnimals']" label="Animals"></NumberField>
            <NumberField :myModel.sync="selected.properties['SkillArtistic']" label="Artistic"></NumberField>
            <NumberField :myModel.sync="selected.properties['SkillConstruction']" label="Construction"></NumberField>
            <NumberField :myModel.sync="selected.properties['SkillCooking']" label="Cooking"></NumberField>
        </v-input>
        <v-input class="property-box">
            <NumberField :myModel.sync="selected.properties['SkillCrafting']" label="Crafting"></NumberField>
            <NumberField :myModel.sync="selected.properties['SkillPlants']" label="Plants"></NumberField>
            <NumberField :myModel.sync="selected.properties['SkillMedicine']" label="Medicine"></NumberField>
            <NumberField :myModel.sync="selected.properties['SkillMelee']" label="Melee"></NumberField>
        </v-input>
        <v-input class="property-box">
            <NumberField :myModel.sync="selected.properties['SkillMining']" label="Mining"></NumberField>
            <NumberField :myModel.sync="selected.properties['SkillIntellectual']" label="Intellectual"></NumberField>
            <NumberField :myModel.sync="selected.properties['SkillShooting']" label="Shooting"></NumberField>
            <NumberField :myModel.sync="selected.properties['SkillSocial']" label="Social"></NumberField>
        </v-input>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";
  import NumberField from "../util/NumberField";
  import LocationField from "../util/LocationField";
  import PawnGroupField from "../util/PawnGroupField";
  import ThingField from "../util/ThingField";

  export default {
    components : {ThingField, PawnGroupField, LocationField, NumberField},
    props : ["selected"],
    name : "EditPawn",
    beforeMount : function() {
      if (!this.selected.properties["Gear"]) {
        this.selected.properties["Gear"] = []
      }
    },
    data : function() {
      return {
        refreshKey : "",
        factionTypes : [
          {value : "OutlanderCivil", text : "Outlander Civil"},
          {value : "OutlanderRough", text : "Outlander Rough"},
          {value : "Pirate", text : "Pirate"},
          {value : "PlayerColony", text : "Player Colony"},
          {value : "TribeCivil", text : "Tribe Civil"},
          {value : "TribeRough", text : "Tribe Rough"},
        ],
        positions : EventTypes.Positions,
        pawnTraits : EventTypes.PawnTraits,
        items : EventTypes.Items,
      }
    },
    computed : {
      names : function() {
        return window.toolbar.view.getNames();
      }
    },
    methods : {
      addGear : function() {
        this.selected.properties["Gear"].push({uuid : Date.now()});
        this.refreshKey += "a";
      },
      removeGear : function(uuid) {
        this.selected.properties["Gear"] = this.selected.properties["Gear"].filter(function(el) {
          return el.uuid !== uuid;
        });
        this.refreshKey += "a";
      }
    }
  }
</script>

<style scoped>
</style>