<template>
    <span>
        <div>
            when your relation to the pawn is
        </div>
        <v-select
                multiple
                :items="relationKind"
                v-model="filter['Type']"
                label="relation"
                :clearable=true
        />
        <div>
            .
        </div>
    </span>
</template>

<script>
  export default {
    props : ["filter"],
    name : "Relation",
    data : function() {
      return {
        relationKind : [
          {value : "Hostile", text : "Hostile"},
          {value : "Neutral", text : "Neutral"},
          {value : "Ally", text : "Ally"}
        ],
      }
    }
  }
</script>

<style scoped>
</style>