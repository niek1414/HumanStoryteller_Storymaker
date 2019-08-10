<template>
    <div class="info-box">
        <v-input messages="The faction to change relations with">
            <v-select
                    :items="factionTypes"
                    v-model="selected.properties['Faction']"
                    label="Faction"
                    :clearable=true
            ></v-select>
        </v-input>
        <v-input messages="Relation change with faction (-20 will worsen the relation)">
            <NumberField label="Change in goodwill" :myModel.sync="selected.properties['FactionRelation']"></NumberField>
        </v-input>
        <v-input messages="Use this field if you want to rename the faction. (Leave empty otherwise)">
            <v-text-field label="New faction name" type="text" v-model="selected.properties['NewName']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "SetRelation",
    data : function() {
      return {
        factionTypes : [
          {value : "OutlanderCivil", text : "Outlander Civil"},
          {value : "OutlanderRough", text : "Outlander Rough"},
          {value : "TribeCivil", text : "Tribe Civil"},
          {value : "TribeRough", text : "Tribe Rough"},
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