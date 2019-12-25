<template>
    <div class="info-box">
        <v-input class="property-box" messages="Target pawns">
            <PawnGroupField :myModel.sync="selected.properties['Pawns']"/>
        </v-input>
    </div>
</template>

<script>
  import PawnGroupField from "../util/PawnGroupField";

  export default {
    components : {PawnGroupField},
    props : ["selected"],
    name : "TransferPawn",
  }
</script>

<style scoped>
</style>