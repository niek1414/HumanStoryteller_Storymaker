<template>
    <div class="info-box">
        <v-input messages="The faction to change relations with">
            <v-select
                    :items="factionTypes"
                    v-model="selected.properties['Faction']"
                    label="Faction"
            ></v-select>
        </v-input>
        <v-input messages="Relation change with faction (-20 will worsen the relation)">
            <v-text-field label="Change in goodwill" type="number" v-model="selected.properties['FactionRelation']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "SetRelation",
    data : function() {
      return {
        factionTypes : [
          // {value : "Ancients", text : "Ancients"},
          // {value : "AncientsHostile", text : "Ancients Hostile"},
          // {value : "Mechanoid", text : "Mechanoid"},
          // {value : "Insect", text : "Insect"},
          {value : "OutlanderCivil", text : "Outlander Civil"},
          {value : "OutlanderRough", text : "Outlander Rough"},
          {value : "TribeCivil", text : "Tribe Civil"},
          {value : "TribeRough", text : "Tribe Rough"},
          // {value : "Pirate", text : "Pirate"},
          // {value : "PlayerColony", text : "Player Colony"},
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