<template>
    <div class="info-box">
        <v-input class="property-box" messages="The faction to change relations with">
            <v-select
                    :items="factionTypes"
                    v-model="selected.properties['Faction']"
                    label="Faction"
                    :clearable=true
            />
        </v-input>
        <v-input class="property-box" messages="Relation change with faction (-20 will worsen the relation)">
            <NumberField label="Change in goodwill" :myModel.sync="selected.properties['FactionRelation']"/>
        </v-input>
        <v-input class="property-box" messages="Use this field if you want to rename the faction. (Leave empty otherwise)">
            <v-text-field label="New faction name" type="text" v-model="selected.properties['NewName']"/>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  import DataFile from "../../storyGraph/DataFile";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "SetRelation",
    data : function() {
      return {
        factionTypes : DataFile.Factions
      }
    }
  }
</script>

<style scoped>
</style>