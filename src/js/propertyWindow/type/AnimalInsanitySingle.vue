<template>
    <div class="info-box">
        <p>While called Animal insanity, if one or more pawn names are not animals they will still go berserk.</p>
        <v-input class="property-box" messages="Target pawns. If none given, a random (weak if before day 7) animal will be picked.">
            <PawnGroupField :myModel.sync="selected.properties['Pawns']"/>
        </v-input>
    </div>
</template>

<script>
  import PawnGroupField from "../util/PawnGroupField";
  export default {
    components : {PawnGroupField},
    props : ["selected"],
    name : "AnimalInsanitySingle"
  }
</script>

<style scoped>
</style>