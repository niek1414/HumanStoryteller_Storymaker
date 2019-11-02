<template>
    <span>
        <div>
            when pawn is
        </div>
        <v-autocomplete
                multiple
                :items="Kind"
                v-model="filter['Kinds']"
                label="kind/race"
                :clearable=true
        ></v-autocomplete>
        <div>
            .
        </div>
    </span>
</template>

<script>
  import EventTypes from "../../../storyGraph/EventTypes";

  export default {
    props : ["filter"],
    name : "Kind",
    data : function() {
      return {
        Kind : EventTypes.PawnKind
      }
    }
  }
</script>

<style scoped>
</style>