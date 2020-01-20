<template>
    <div class="info-box">
        <p>
            A special event that adds an other event to a queue. That other event fires & is removed when the conditions below are met.<br>
            This event does not block events that are connected to it unless a special condition 'OnHitFired' is added to the conditions tab.
        </p>
        <v-input class="property-box" messages="Receiving pawn(s)">
            <PawnGroupField :myModel.sync="selected.properties['ReceivingPawns']"/>
        </v-input>
        <v-input class="property-box" messages="Firing pawn(s)">
            <PawnGroupField :myModel.sync="selected.properties['SendingPawns']"/>
        </v-input>
        <v-input class="property-box" messages="Whether to always mis, always hit or leave the chance unaltered">
            <v-select
                    :items="hitResponseTypes"
                    v-model="selected.properties['HitResponse']"
                    label="Response"
                    :clearable=true
            />
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  import PawnGroupField from "../util/PawnGroupField";

  export default {
    components : {PawnGroupField, NumberField},
    props : ["selected"],
    name : "OnHit",
    data : function() {
      return {
        hitResponseTypes : [
          {value : "AlwaysHit", text : "Always hit"},
          {value : "AlwaysMis", text : "Always mis"},
          {value : "Unaltered", text : "Unaltered"},
        ]
      }
    }
  }
</script>

<style scoped>
</style>