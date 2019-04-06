<template>
    <div class="info-box">
        <v-input messages="Names of pawns to edit.">
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
            ></v-select>
        </v-input>
        <v-input :messages="
                selected.properties['Location'] ==='' ||
                selected.properties['Location'] === undefined
                ?'Default: unchanged'
                :'Teleport location'
            ">
            <v-autocomplete
                    v-model="selected.properties['Location']"
                    :items="positions"
                    label="Position on map"
            ></v-autocomplete>
        </v-input>
        <v-input messages="Pawns biological age (in years). Default is unchanged.">
            <NumberField label="Biological age" :myModel.sync="selected.properties['AgeBioYear']"></NumberField>
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

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "EditPawn",
    data : function() {
      return {
        factionTypes : [
          {value : "OutlanderCivil", text : "Outlander Civil"},
          {value : "OutlanderRough", text : "Outlander Rough"},
          {value : "TribeCivil", text : "Tribe Civil"},
          {value : "TribeRough", text : "Tribe Rough"},
          {value : "Pirate", text : "Pirate"},
          {value : "PlayerColony", text : "Player Colony"},
        ],
        positions : EventTypes.Positions
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>