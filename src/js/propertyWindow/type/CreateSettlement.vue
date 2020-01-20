<template>
    <div class="info-box">
        <v-input class="property-box"
                messages="Map name. Not displayed but can be used to referenced in story. (Before executing an event it is smart to check if it is generated & visable by the player using `created map` check.)">
            <v-text-field label="Map name" type="text" v-model="selected.properties['MapName']"/>
        </v-input>

        <v-input class="property-box" messages="Faction of the settlement">
            <v-select
                    :items="factionTypes"
                    v-model="selected.properties['Faction']"
                    label="Faction"
                    :clearable=true
            />
        </v-input>

        <v-input class="property-box" messages="Settlement name that is displayed">
            <v-text-field label="Settlement name" type="text" v-model="selected.properties['SettlementName']"/>
        </v-input>

        <v-input class="property-box" messages="If enabled the map is generated directly instead of when the user enters.">
            <v-switch
                    label="Pre-generate map"
                    v-model="selected.properties['PreGenerate']"
            />
        </v-input>
        <template v-if="selected.properties['PreGenerate']">
            <v-input class="property-box" messages="Normally between 200 and 400 (= 40000 to 160000 tiles).">
                <v-text-field label="Map size width" type="number" v-model="selected.properties['SiteSizeX']"/>
                <v-text-field label="Map size height" type="number" v-model="selected.properties['SiteSizeY']"/>
            </v-input>

            <v-input class="property-box" messages="">
                <v-autocomplete
                        v-model="selected.properties['SiteType']"
                        :items="siteTypes"
                        label="Site type"
                />
            </v-input>
            <v-input class="property-box" messages="If enabled the map is decoupled from the world (time stands still & user can't see it). On entering of the site the map will be coupled again.<br>If disabled the map will NEVER be cleaned up automatically.">
                <v-switch
                        label="Decouple on generation"
                        v-model="selected.properties['DecoupleNow']"
                />
            </v-input>
        </template>

        <v-input class="property-box" messages="Number can be found in-game top-left on world selection screen (with DevMode enabled).">
            <v-text-field label="Map tile" type="number" v-model="selected.properties['Site']"/>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "CreateSettlement",
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
        siteTypes : [
          {value : "Base", text : "Base"},
          {value : "Encounter", text : "Encounter (empty)"},
          {value : "SpaceShip", text : "Space ship"}
        ],
      }
    }
  }
</script>

<style scoped>
</style>