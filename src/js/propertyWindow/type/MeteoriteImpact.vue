<template>
    <div class="info-box">
        <v-input :messages="
            selected.properties['MineableRock'] ==='' ||
            selected.properties['MineableRock'] === undefined
            ?'Default: random kind of material'
            :'Mineable material'
        ">
            <v-autocomplete
                    v-model="selected.properties['MineableRock']"
                    :items="mineableMaterials"
                    label="Mineable material"
            ></v-autocomplete>
        </v-input>

        <v-input :messages="
            selected.properties['Amount'] ==='' ||
            selected.properties['Amount'] === undefined
            ?'Default: 1'
            :'The amount of meteors'
        ">
            <NumberField label="Amount" :myModel.sync="selected.properties['Amount']"></NumberField>
        </v-input>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";
  import NumberField from "../util/NumberField";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "MeteoriteImpact",
    data : function() {
      return {
        mineableMaterials : EventTypes.MineableMaterials,
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>