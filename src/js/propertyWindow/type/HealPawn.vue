<template>
    <div class="info-box">
        <v-input class="property-box" messages="Target pawns.">
            <PawnGroupField :myModel.sync="selected.properties['Pawns']"/>
        </v-input>
        <v-input class="property-box" messages="If enabled even permanent injuries are healed.">
            <v-switch
                    label="Miracle"
                    v-model="selected.properties['Miracle']"
            />
        </v-input>
    </div>
</template>

<script>
  import PawnGroupField from "../util/PawnGroupField";
  export default {
    components : {PawnGroupField},
    props : ["selected"],
    name : "HealPawn"
  }
</script>

<style scoped>
</style>