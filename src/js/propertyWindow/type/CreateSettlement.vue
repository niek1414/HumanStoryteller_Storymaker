<template>
    <div class="info-box">
        <v-input messages="Map name. Not displayed but can be used to referenced in story. (Before executing an event it is smart to check if it is generated & visable by the player using `created map` check.)">
            <v-text-field label="Map name" type="text" v-model="selected.properties['MapName']"></v-text-field>
        </v-input>

        <v-input messages="Faction of the settlement">
            <v-select
                    :items="factionTypes"
                    v-model="selected.properties['Faction']"
                    label="Faction"
            ></v-select>
        </v-input>

        <v-input messages="Settlement name that is displayed">
            <v-text-field label="Settlement name" type="text" v-model="selected.properties['SettlementName']"></v-text-field>
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
          {value : "PlayerColony", text : "Player Colony"},
          {value : "OutlanderCivil", text : "Outlander Civil"},
          {value : "OutlanderRough", text : "Outlander Rough"},
          {value : "TribeCivil", text : "Tribe Civil"},
          {value : "TribeRough", text : "Tribe Rough"},
          {value : "Pirate", text : "Pirate"},
        ],
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>