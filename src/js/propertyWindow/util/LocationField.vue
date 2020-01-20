<template>
    <span style="width: 100%; position: relative; display: flex; flex-wrap: wrap; font-weight: normal; line-height: 1;">
        <v-select
                :items="isOffset ? offsetTypes : types"
                v-model="myModel.Type"
                :label="isOffset ? 'Offset type' : 'Location type'"
                :clearable=true
                v-on:change="clean()"
        />
        <template v-if="myModel.Type === 'Preset'">
            <v-select
                    :items="positions"
                    v-model="myModel.Value"
                    label="Preset type"
                    :clearable=true
            />
        </template>
        <template v-else-if="myModel.Type === 'Pawn'">
            <v-autocomplete
                    :items="names"
                    v-model="myModel.Value"
                    label="Pawn name"
                    :clearable=true
            />
        </template>
        <template v-else-if="myModel.Type === 'Precise'">
            <NumberField label="X" :myModel.sync="myModel.X" :dynamic="true"/>
            <NumberField label="Z" :myModel.sync="myModel.Z" :dynamic="true"/>
        </template>
        <template v-else-if="myModel.Type === 'Zone'">
            <v-text-field
                    label="Zone (paste from in-game)"
                    type="text"
                    v-model="myModel.Value"
                    :clearable=true
            />
            <LocationField :myModel.sync="myModel.Offset" :isOffset="true"/>
        </template>
    </span>
</template>

<script>
  import NumberField from "./NumberField";
  import EventTypes from "../../storyGraph/EventTypes";

  export default {
    components : {NumberField},
    props : ["myModel", "isOffset"],
    name : "LocationField",
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
      return {
        types : [
          {value : "Preset", text : "Preset"},
          {value : "Pawn", text : "Pawn"},
          {value : "Precise", text : "Precise"},
          {value : "Zone", text : "Zone"},
        ],
        offsetTypes : [
          {value : "Preset", text : "Preset"},
          {value : "Pawn", text : "Pawn"},
          {value : "Precise", text : "Precise"},
        ],
        positions : EventTypes.Positions
      }
    },
    computed : {
      names : function() {
        return window.toolbar.view.getNames();
      }
    },
    methods : {
      clean : function() {
        this.myModel.Value = undefined;
        this.myModel.Offset = undefined;
        this.myModel.X = undefined;
        this.myModel.Y = undefined;
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