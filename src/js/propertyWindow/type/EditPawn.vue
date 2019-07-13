<template>
    <div class="info-box">
        <v-input messages="Names of pawns to edit.">
            <v-autocomplete
                    v-model="selected.properties['Names']"
                    :items="names"
                    multiple
                    small-chips
            ></v-autocomplete>
        </v-input>
        <span style="width: 100%; position: relative; display: flex; flex-wrap: wrap;">
            <v-text-field label="First name" type="text" v-model="selected.properties['FirstName']"></v-text-field>
            <v-text-field label="Nick name" type="text" v-model="selected.properties['NickName']"></v-text-field>
            <v-text-field label="Last name" type="text" v-model="selected.properties['LastName']"></v-text-field>
        </span>
        <v-input messages="Strip pawn?">
            <v-switch
                    label="Strip"
                    v-model="selected.properties['Strip']"
            ></v-switch>
        </v-input>
        <v-input messages="Clear pawn mind? (Will stop with current job, stops mental breaks, wakes etc..)">
            <v-switch
                    label="Clear mind"
                    v-model="selected.properties['ClearMind']"
            ></v-switch>
        </v-input>
        <v-input messages="Banish pawn from colony?">
            <v-switch
                    label="Banish"
                    v-model="selected.properties['Banish']"
            ></v-switch>
        </v-input>
        <v-input messages="If selected, pawn will be drafted">
            <v-switch
                    label="Set drafted"
                    v-model="selected.properties['SetDrafted']"
            ></v-switch>
        </v-input>
        <v-input messages="New faction of the pawn (empty is unchanged)">
            <v-select
                    :items="factionTypes"
                    v-model="selected.properties['Faction']"
                    label="Faction"
                    clearable=true
            ></v-select>
        </v-input>
        <v-input messages="Teleport to location, default does not teleport">
            <LocationField :myModel.sync="selected.properties['Location']"></LocationField>
        </v-input>
        <v-input messages="Pawns biological age (in years). Default is unchanged.">
            <NumberField label="Biological age" :myModel.sync="selected.properties['AgeBioYear']"></NumberField>
        </v-input>
        <v-input messages="Pawn traits. Default does nothing. One or more selected will first clear existing traits.">
            <v-autocomplete
                    v-model="selected.properties['Traits']"
                    :items="pawnTraits"
                    multiple
                    small-chips
            ></v-autocomplete>
        </v-input>

        <v-divider data-content="SKILLS"></v-divider>
        <v-input messages="If enabled, skills (below) are added (or removed if - is used), otherwise it just sets the skill to the specified level.">
            <v-switch
                    label="Add skills"
                    v-model="selected.properties['SkillAdd']"
            ></v-switch>
        </v-input>
        <v-input>
            <NumberField label="Animals" :myModel.sync="selected.properties['SkillAnimals']"></NumberField>
            <NumberField label="Artistic" :myModel.sync="selected.properties['SkillArtistic']"></NumberField>
            <NumberField label="Construction" :myModel.sync="selected.properties['SkillConstruction']"></NumberField>
            <NumberField label="Cooking" :myModel.sync="selected.properties['SkillCooking']"></NumberField>
        </v-input>
        <v-input>
            <NumberField label="Crafting" :myModel.sync="selected.properties['SkillCrafting']"></NumberField>
            <NumberField label="Plants" :myModel.sync="selected.properties['SkillPlants']"></NumberField>
            <NumberField label="Medicine" :myModel.sync="selected.properties['SkillMedicine']"></NumberField>
            <NumberField label="Melee" :myModel.sync="selected.properties['SkillMelee']"></NumberField>
        </v-input>
        <v-input>
            <NumberField label="Mining" :myModel.sync="selected.properties['SkillMining']"></NumberField>
            <NumberField label="Intellectual" :myModel.sync="selected.properties['SkillIntellectual']"></NumberField>
            <NumberField label="Shooting" :myModel.sync="selected.properties['SkillShooting']"></NumberField>
            <NumberField label="Social" :myModel.sync="selected.properties['SkillSocial']"></NumberField>
        </v-input>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";
  import NumberField from "../util/NumberField";
  import LocationField from "../util/LocationField";

  export default {
    components : {LocationField, NumberField},
    props : ["selected"],
    name : "EditPawn",
    data : function() {
      return {
        factionTypes : [
          {value : "OutlanderCivil", text : "Outlander Civil"},
          {value : "OutlanderRough", text : "Outlander Rough"},
          {value : "Pirate", text : "Pirate"},
          {value : "PlayerColony", text : "Player Colony"},
          {value : "TribeCivil", text : "Tribe Civil"},
          {value : "TribeRough", text : "Tribe Rough"},
        ],
        positions : EventTypes.Positions,
        pawnTraits : EventTypes.PawnTraits
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
    .info-box {
        margin: 30px;
    }
</style>