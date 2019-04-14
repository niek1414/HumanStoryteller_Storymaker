<template>
    <div class="info-box">
        <v-switch
                label="Conditional flow"
                v-model="selected.right !== null"
                v-on:change="canvas.convertCondition(selected, selected.right === null)"
        ></v-switch>
        <template v-if="selected.right !== null">
            <v-autocomplete
                    v-model="picked"
                    :items="availableConditions.concat(EventTypes[selected.type.value.value].conditions)"
                    label="Add condition"
                    :search-input.sync="search"
            ></v-autocomplete>
            <v-divider v-if="selected.conditions.length > 0" data-content="PICK LEFT IF"></v-divider>
            <template v-for="(con, index) in selected.conditions">
                <v-card :class="availableConditions.concat(EventTypes[selected.type.value.value].conditions).filter(function (i) {return i.value === con.type}).length<1?'invalid':''">
                    <v-card-title primary-title>{{con.type}}</v-card-title>
                    <v-card-text>
                        <PawnHealth v-if="con.type === 'PawnHealth'" v-bind:condition="con"></PawnHealth>
                        <Dialog v-if="con.type === 'Dialog'" v-bind:condition="con"></Dialog>
                        <Audio v-if="con.type === 'Audio'" v-bind:condition="con"></Audio>
                        <Variable v-if="con.type === 'Variable'" v-bind:condition="con"></Variable>
                        <Random v-if="con.type === 'Random'" v-bind:condition="con"></Random>
                        <Difficulty v-if="con.type === 'Difficulty'" v-bind:condition="con"></Difficulty>
                        <Time v-if="con.type === 'Time'" v-bind:condition="con"></Time>
                        <Relation v-if="con.type === 'Relation'" v-bind:condition="con"></Relation>
                        <ItemMap v-if="con.type === 'ItemMap'" v-bind:condition="con"></ItemMap>
                        <ItemColony v-if="con.type === 'ItemColony'" v-bind:condition="con"></ItemColony>
                        <Biome v-if="con.type === 'Biome'" v-bind:condition="con"></Biome>
                        <Temperature v-if="con.type === 'Temperature'" v-bind:condition="con"></Temperature>
                        <Colonists v-if="con.type === 'Colonists'" v-bind:condition="con"></Colonists>
                        <ColonistsOnMap v-if="con.type === 'ColonistsOnMap'" v-bind:condition="con"></ColonistsOnMap>
                        <Cheat v-if="con.type === 'Cheat'" v-bind:condition="con"></Cheat>
                        <Research v-if="con.type === 'Research'" v-bind:condition="con"></Research>
                        <Colonies v-if="con.type === 'Colonies'" v-bind:condition="con"></Colonies>
                        <MapCreated v-if="con.type === 'MapCreated'" v-bind:condition="con"></MapCreated>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn flat color="error" v-on:click="selected.conditions = selected.conditions.filter(function(item) {return item !== con})">remove</v-btn>
                    </v-card-actions>
                </v-card>
                <v-divider v-if="index + 1 < selected.conditions.length" data-content="AND"></v-divider>
            </template>
        </template>
    </div>
</template>

<script>
  import PawnHealth from "./condition/PawnHealth";
  import Dialog from "./condition/Dialog";
  import EventTypes from "./../storyGraph/EventTypes";
  import Variable from "./condition/Variable";
  import Random from "./condition/Random";
  import Difficulty from "./condition/Difficulty";
  import Time from "./condition/Time";
  import Relation from "./condition/Relation";
  import ItemMap from "./condition/ItemMap";
  import ItemColony from "./condition/ItemColony";
  import Biome from "./condition/Biome";
  import Temperature from "./condition/Temperature";
  import Colonists from "./condition/Colonists";
  import Audio from "./condition/Audio";
  import Cheat from "./condition/Cheat";
  import Research from "./condition/Research";
  import Colonies from "./condition/Colonies";
  import MapCreated from "./condition/MapCreated";
  import ColonistsOnMap from "./condition/ColonistsOnMap";

  export default {
    name : "conditional",
    components : {
      ColonistsOnMap,
      MapCreated,
      Colonies,
      Research,
      Cheat,
      PawnHealth,
      Variable,
      Dialog,
      Random,
      Difficulty,
      Time,
      Relation,
      ItemMap,
      ItemColony,
      Biome,
      Temperature,
      Colonists,
      Audio
    },
    props : ["canvas", "selected"],
    data() {
      return {
        availableConditions : [
          {value : 'PawnHealth', text : 'Pawn health'},
          {value : 'Variable', text : 'Compare variable'},
          {value : 'Random', text : 'Random chance'},
          {value : 'Difficulty', text : 'Difficulty'},
          {value : 'Time', text : 'Time/Season'},
          {value : 'Relation', text : 'Faction relation'},
          {value : 'ItemMap', text : 'Items on map'},
          {value : 'ItemColony', text : 'Items on stockpiles'},
          {value : 'MapCreated', text : 'Map created'},
          {value : 'Biome', text : 'Biome'},
          {value : 'Temperature', text : 'Temperature'},
          {value : 'Colonists', text : 'Colonists'},
          {value : 'ColonistsOnMap', text : 'Colonists on map'},
          {value : 'Colonies', text : 'Colonies'},
          {value : 'Cheat', text : 'Cheat'},
          {value : 'Research', text : 'Research'},
        ],
        picked : null,
        search : "",
        clearOnce : false,
        EventTypes : EventTypes
      }
    },
    watch : {
      picked(val) {
        if (val !== null && val !== undefined && val !== "") {
          this.selected.conditions.push({type : val});
          this.picked = "";
          this.clearOnce = true;
        }
      },

      search(val) {
        if (this.clearOnce) {
          this.search = "";
          this.clearOnce = false;
        }
      }
    },
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }

    .invalid {
        background-color: #4c2b2b !important;
    }
</style>