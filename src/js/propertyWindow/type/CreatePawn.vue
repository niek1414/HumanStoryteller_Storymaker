<template>
    <div class="info-box">
        <v-input messages="The faction of the pawn. If colony, the pawn will join.">
            <v-autocomplete
                    v-model="selected.properties['PawnKind']"
                    :items="pawnKind"
                    label="Pawn kind"
            ></v-autocomplete>
        </v-input>
        <v-input messages="Name of the created pawn">
            <v-text-field label="Pawn name" type="text" v-model="selected.properties['Name']"></v-text-field>
        </v-input>
        <v-input messages="The faction of the pawn. If colony, the pawn will join. WARNING: If the pawn type is not compatible with the faction, the pawn may not spawn or worse!">
            <v-select
                    :items="factionTypes"
                    v-model="selected.properties['Faction']"
                    label="Faction"
            ></v-select>
        </v-input>
        <v-input messages="Create new born?">
            <v-switch
                    label="New born"
                    v-model="selected.properties['NewBorn']"
            ></v-switch>
        </v-input>
        <v-input messages="Select if pawn must be able to fight">
            <v-switch
                    label="Must be capable of violence"
                    v-model="selected.properties['MustBeCapableOfViolence']"
            ></v-switch>
        </v-input>
        <v-input messages="Pawns biological age. Defaults to a random (logical age).">
            <v-text-field label="Biological age" type="number" v-model="selected.properties['BiologicalAge']"></v-text-field>
        </v-input>
        <v-input messages="Pawns chronological age. Defaults to a random (logical age).">
            <v-text-field label="chronological age" type="number" v-model="selected.properties['ChronologicalAge']"></v-text-field>
        </v-input>
        <v-input>
            <v-select
                    :items="genderTypes"
                    v-model="selected.properties['Gender']"
                    label="Gender"
            ></v-select>
        </v-input>
        <v-input>
            <v-autocomplete
                    v-model="selected.properties['Weapon']"
                    :items="weapons"
                    label="Weapon"
            ></v-autocomplete>
        </v-input>
        <template v-if="selected.properties['Weapon'] !=='' && selected.properties['Weapon'] !== undefined">
            <v-input>
                <v-select
                        :items="itemQuality"
                        v-model="selected.properties['ItemQuality']"
                        label="Weapon quality (if applicable)"
                ></v-select>
            </v-input>
            <v-input>
                <v-autocomplete
                        v-model="selected.properties['Stuff']"
                        :items="stuff"
                        label="Weapon material (if applicable)"
                ></v-autocomplete>
            </v-input>
        </template>
        <v-input messages="2 is twice the budget, 0.5 half and 1 is default. Default (1) is defined by group type.">
            <v-text-field label="Apparel budget" type="number" v-model="selected.properties['ApparelMoney']"></v-text-field>
        </v-input>
        <v-input messages="The minimal health points on the gear. On 0 it deteriorates.">
            <v-text-field label="Minimal apparel points" type="number" v-model="selected.properties['GearHealthMin']"></v-text-field>
        </v-input>
        <v-input
                messages="The max health points on the gear. 1 is 100%. If you want to increase the likelihood of 100% but still want low values you can set this to more then 1 to increase the odds of 100%">
            <v-text-field label="Maximal apparel points" type="number" v-model="selected.properties['GearHealthMax']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";

  export default {
    props : ["selected"],
    name : "CreatePawn",
    data : function() {
      return {
        factionTypes : [
          {value : "Ancients", text : "Ancients"},
          {value : "AncientsHostile", text : "Ancients Hostile"},
          {value : "Mechanoid", text : "Mechanoid"},
          {value : "Insect", text : "Insect"},
          {value : "OutlanderCivil", text : "Outlander Civil"},
          {value : "OutlanderRough", text : "Outlander Rough"},
          {value : "TribeCivil", text : "Tribe Civil"},
          {value : "TribeRough", text : "Tribe Rough"},
          {value : "Pirate", text : "Pirate"},
          {value : "PlayerColony", text : "Player Colony"},
        ],
        pawnKind : EventTypes.PawnKind,
        weapons : EventTypes.Weapons,
        itemQuality : EventTypes.ItemQualities,
        genderTypes : [
          {value : "MALE", text : "Male"},
          {value : "FEMALE", text : "Female"}
        ]
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>