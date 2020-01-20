<template>
    <span>
        <div>
        when pawn belongs to
        </div>
        <v-select
                :clearable=true
                :items="factionTypes"
                label="faction"
                multiple
                v-model="filter['Factions']"
        />
        <div>
            .
        </div>
    </span>
</template>

<script>
  export default {
    props : ["filter"],
    name : "Faction",
    data : function() {
      return {
        factionTypes : [
          {value : "Ancients", text : "Ancients"},
          {value : "AncientsHostile", text : "Ancients Hostile"},
          {value : "Insect", text : "Insect"},
          {value : "Mechanoid", text : "Mechanoid"},
          {value : "OutlanderCivil", text : "Outlander Civil"},
          {value : "OutlanderRough", text : "Outlander Rough"},
          {value : "Pirate", text : "Pirate"},
          {value : "PlayerColony", text : "Player Colony"},
          {value : "TribeCivil", text : "Tribe Civil"},
          {value : "TribeRough", text : "Tribe Rough"},
        ],
      }
    }
  }
</script>

<style scoped>
</style>