<template>
    <span style="width: 100%; position: relative; display: flex; flex-wrap: wrap;">
        <v-select
                :items="types"
                v-model="myModel.Type"
                label="Pawn source"
                :clearable=true
                v-on:change="clean()"
        />
        <template v-if="myModel.Type === 'Pawns'">
            <v-autocomplete
                    :items="names"
                    v-model="myModel.Names"
                    label="Pawn name"
                    :clearable=true
                    multiple
            />
        </template>
        <template v-else-if="myModel.Type === 'PawnGroup'">
            <v-autocomplete
                    :items="groups"
                    v-model="myModel.Groups"
                    label="Pawn group"
                    :clearable=true
                    multiple
            />
        </template>
    </span>
</template>

<script>
  import NumberField from "./NumberField";

  export default {
    components : {NumberField},
    props : ["myModel"],
    name : "PawnGroupSourceField",
    beforeMount : function() {
      if (!(this.myModel && typeof this.myModel === 'object')) {
        this.myModel = {};
      }
    },
    beforeUpdate : function() {
      if (!(this.myModel && typeof this.myModel === 'object')) {
        this.myModel = {};
      }
    },
    data() {
      if (!(this.myModel && typeof this.myModel === 'object')) {
        this.myModel = {};
      }
      return {
        types : [
          {value : "All", text : "All pawns (most inefficient)"},
          {value : "AllOnMap", text : "All pawns on map"},
          {value : "Pawns", text : "Named pawns"},
          {value : "PawnGroup", text : "Predefined group"},
        ],
      }
    },
    computed : {
      names : function() {
        return window.toolbar.view.getNames();
      },
      groups : function() {
        return window.toolbar.view.getGroups();
      },
    },
    methods : {
      clean : function() {
        if (!(this.myModel && typeof this.myModel === 'object')) {
          this.myModel = {};
        }
        var temp = this.myModel.Type;
        this.myModel = {};
        this.myModel.Type = temp;
      }
    },
    watch : {
      myModel : {
        handler : function(newVal) {
          this.$emit('update:myModel', newVal);
        },
        deep : true
      }
    }
  }
</script>

<style scoped>
</style>