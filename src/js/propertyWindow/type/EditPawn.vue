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
                selected.properties['Position'] ==='' ||
                selected.properties['Position'] === undefined
                ?'Default: unchanged'
                :'Teleport location'
            ">
            <v-autocomplete
                    v-model="selected.properties['Position']"
                    :items="positions"
                    label="Position on map"
            ></v-autocomplete>
        </v-input>
        <v-input messages="Pawns biological age (in years). Default is unchanged.">
            <v-text-field label="Biological age" type="number" v-model="selected.properties['AgeBioYear']"></v-text-field>
        </v-input>

        <v-divider data-content="SKILLS"></v-divider>
        <v-input messages="If enabled, skills (below) are added (or removed if - is used), otherwise it just sets the skill to the specified level.">
            <v-switch
                    label="Add skills"
                    v-model="selected.properties['SkillAdd']"
            ></v-switch>
        </v-input>
        <v-input>
            <v-text-field label="Animals" type="number" v-model="selected.properties['SkillAnimals']"></v-text-field>
            <v-text-field label="Artistic" type="number" v-model="selected.properties['SkillArtistic']"></v-text-field>
            <v-text-field label="Construction" type="number" v-model="selected.properties['SkillConstruction']"></v-text-field>
            <v-text-field label="Cooking" type="number" v-model="selected.properties['SkillCooking']"></v-text-field>
        </v-input>
        <v-input>
            <v-text-field label="Crafting" type="number" v-model="selected.properties['SkillCrafting']"></v-text-field>
            <v-text-field label="Plants" type="number" v-model="selected.properties['SkillPlants']"></v-text-field>
            <v-text-field label="Medicine" type="number" v-model="selected.properties['SkillMedicine']"></v-text-field>
            <v-text-field label="Melee" type="number" v-model="selected.properties['SkillMelee']"></v-text-field>
        </v-input>
        <v-input>
            <v-text-field label="Mining" type="number" v-model="selected.properties['SkillMining']"></v-text-field>
            <v-text-field label="Intellectual" type="number" v-model="selected.properties['SkillIntellectual']"></v-text-field>
            <v-text-field label="Shooting" type="number" v-model="selected.properties['SkillShooting']"></v-text-field>
            <v-text-field label="Social" type="number" v-model="selected.properties['SkillSocial']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";

  export default {
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