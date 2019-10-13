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
                        <Audio v-if="con.type === 'Audio'" v-bind:condition="con"></Audio>
                        <Biome v-if="con.type === 'Biome'" v-bind:condition="con"></Biome>
                        <Cheat v-if="con.type === 'Cheat'" v-bind:condition="con"></Cheat>
                        <Colonies v-if="con.type === 'Colonies'" v-bind:condition="con"></Colonies>
                        <ColonistOnMap v-if="con.type === 'ColonistOnMap'" v-bind:condition="con"></ColonistOnMap>
                        <Colonists v-if="con.type === 'Colonists'" v-bind:condition="con"></Colonists>
                        <ColonistsOnMap v-if="con.type === 'ColonistsOnMap'" v-bind:condition="con"></ColonistsOnMap>
                        <Dialog v-if="con.type === 'Dialog'" v-bind:condition="con"></Dialog>
                        <Difficulty v-if="con.type === 'Difficulty'" v-bind:condition="con"></Difficulty>
                        <ItemColony v-if="con.type === 'ItemColony'" v-bind:condition="con"></ItemColony>
                        <ItemMap v-if="con.type === 'ItemMap'" v-bind:condition="con"></ItemMap>
                        <MapCreated v-if="con.type === 'MapCreated'" v-bind:condition="con"></MapCreated>
                        <PawnHealth v-if="con.type === 'PawnHealth'" v-bind:condition="con"></PawnHealth>
                        <Random v-if="con.type === 'Random'" v-bind:condition="con"></Random>
                        <Relation v-if="con.type === 'Relation'" v-bind:condition="con"></Relation>
                        <Research v-if="con.type === 'Research'" v-bind:condition="con"></Research>
                        <Temperature v-if="con.type === 'Temperature'" v-bind:condition="con"></Temperature>
                        <Time v-if="con.type === 'Time'" v-bind:condition="con"></Time>
                        <Quest v-if="con.type === 'Quest'" v-bind:condition="con"></Quest>
                        <Trade v-if="con.type === 'Trade'" v-bind:condition="con"></Trade>
                        <Traveled v-if="con.type === 'Traveled'" v-bind:condition="con"></Traveled>
                        <CreatedStructure v-if="con.type === 'CreatedStructure'" v-bind:condition="con"></CreatedStructure>
                        <Variable v-if="con.type === 'Variable'" v-bind:condition="con"></Variable>
                        <PawnState v-if="con.type === 'PawnState'" v-bind:condition="con"></PawnState>
                        <PawnLocation v-if="con.type === 'PawnLocation'" v-bind:condition="con"></PawnLocation>
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
  import ColonistOnMap from "./condition/ColonistOnMap";
  import Quest from "./condition/Quest";
  import Trade from "./condition/Trade";
  import Traveled from "./condition/Traveled";
  import PawnState from "./condition/PawnState";
  import PawnLocation from "./condition/PawnLocation";
  import CreatedStructure from "./condition/CreatedStructure";

  export default {
    name : "conditional",
    components : {
      CreatedStructure,
      PawnLocation,
      PawnState,
      Traveled,
      Trade,
      Quest,
      ColonistOnMap,
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
          {value : 'Biome', text : 'Biome'},
          {value : 'Cheat', text : 'Cheat'},
          {value : 'Colonies', text : 'Colonies'},
          {value : 'ColonistOnMap', text : 'Colonist on map'},
          {value : 'Colonists', text : 'Colonists'},
          {value : 'ColonistsOnMap', text : 'Colonists on map'},
          {value : 'Variable', text : 'Compare variable'},
          {value : 'Difficulty', text : 'Difficulty'},
          {value : 'Relation', text : 'Faction relation'},
          {value : 'PawnHealth', text : 'Health of pawn '},
          {value : 'ItemMap', text : 'Items on map'},
          {value : 'ItemColony', text : 'Items on stockpiles'},
          {value : 'PawnLocation', text : 'Location of pawn'},
          {value : 'MapCreated', text : 'Map created'},
          {value : 'Random', text : 'Random chance'},
          {value : 'Research', text : 'Research'},
          {value : 'PawnState', text : 'State of pawn'},
          {value : 'Temperature', text : 'Temperature'},
          {value : 'Time', text : 'Time/Season'},
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
    .invalid {
        background-color: #4c2b2b !important;
    }
</style>