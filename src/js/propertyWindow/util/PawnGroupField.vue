<template>
    <span style="width: 100%; position: relative; display: flex; flex-wrap: wrap;" :key="refreshKey">
        <PawnGroupSourceField :myModel.sync="myModel['Source']"/><br/>
        <v-autocomplete
                v-model="picked"
                :items="availableFilters"
                label="Add condition"
                :search-input.sync="search"
        />
        <template v-for="(filter) in myModel.Filters">
           <div class="filter-rule" :key="filter.uuid">
               <b>
                   <v-switch
                           :label="filter['Include']?'Include ':'Exclude '"
                           v-model="filter['Include']"
                   />
               </b>
               <Awake v-if="filter.type === 'Awake'" v-bind:filter="filter"/>
               <Downed v-if="filter.type === 'Downed'" v-bind:filter="filter"/>
               <Drafted v-if="filter.type === 'Drafted'" v-bind:filter="filter"/>
               <Faction v-if="filter.type === 'Faction'" v-bind:filter="filter"/>
               <Fighting v-if="filter.type === 'Fighting'" v-bind:filter="filter"/>
               <Indoors v-if="filter.type === 'Indoors'" v-bind:filter="filter"/>
               <Kind v-if="filter.type === 'Kind'" v-bind:filter="filter"/>
               <Male v-if="filter.type === 'Male'" v-bind:filter="filter"/>
               <Prisoner v-if="filter.type === 'Prisoner'" v-bind:filter="filter"/>
               <Relation v-if="filter.type === 'Relation'" v-bind:filter="filter"/>
               <Starving v-if="filter.type === 'Starving'" v-bind:filter="filter"/>
               <CanReach v-if="filter.type === 'CanReach'" v-bind:filter="filter"/>
               <IsHumanlike v-if="filter.type === 'IsHumanlike'" v-bind:filter="filter"/>
               <InBed v-if="filter.type === 'InBed'" v-bind:filter="filter"/>
               <IsKidnapped v-if="filter.type === 'IsKidnapped'" v-bind:filter="filter"/>
               <OnFire v-if="filter.type === 'OnFire'" v-bind:filter="filter"/>
               <UnderRoof v-if="filter.type === 'UnderRoof'" v-bind:filter="filter"/>
               <NaturalAgeUnder v-if="filter.type === 'NaturalAgeUnder'" v-bind:filter="filter"/>
               <PrisonerInCell v-if="filter.type === 'PrisonerInCell'" v-bind:filter="filter"/>
               <CanSeeOneOf v-if="filter.type === 'CanSeeOneOf'" v-bind:filter="filter"/>
               <Location v-if="filter.type === 'Location'" v-bind:filter="filter"/>
               <div class="delete-filter">
                   <v-btn flat color="error" v-on:click="deleteFilter(filter.uuid)">
                       remove
                   </v-btn>
               </div>
            </div>
        </template>
        <v-input messages="Default is no limit">
            <NumberField label="Pawn limit" :myModel.sync="myModel['Limit']"/>
        </v-input>
    </span>
</template>

<script>
  import NumberField from "./NumberField";
  import PawnGroupSourceField from "./PawnGroupSourceField";
  import Drafted from "./filter/Drafted";
  import Awake from "./filter/Awake";
  import Downed from "./filter/Downed";
  import Faction from "./filter/Faction";
  import Fighting from "./filter/Fighting";
  import Indoors from "./filter/Indoors";
  import Kind from "./filter/Kind";
  import Male from "./filter/Male";
  import Prisoner from "./filter/Prisoner";
  import Relation from "./filter/Relation";
  import Starving from "./filter/Starving";
  import CanReach from "./filter/CanReach";
  import InBed from "./filter/InBed";
  import IsHumanlike from "./filter/IsHumanlike";
  import OnFire from "./filter/OnFire";
  import UnderRoof from "./filter/UnderRoof";
  import NaturalAgeUnder from "./filter/NaturalAgeUnder";
  import PrisonerInCell from "./filter/PrisonerInCell";
  import CanSeeOneOf from "./filter/CanSeeOneOf";
  import IsKidnapped from "./filter/IsKidnapped";
  import Location from "./filter/Location";

  export default {
    components : {
      Location,
      IsHumanlike,
      CanSeeOneOf,
      PrisonerInCell,
      NaturalAgeUnder,
      UnderRoof,
      OnFire,
      IsKidnapped,
      InBed,
      CanReach,
      Starving,
      Relation,
      Prisoner,
      Male,
      Kind,
      Indoors,
      Fighting,
      Faction,
      Downed,
      Awake,
      Drafted,
      PawnGroupSourceField,
      NumberField
    },
    props : ["myModel"],
    name : "PawnGroupField",
    beforeMount : function() {
      if (!(this.myModel && typeof this.myModel === 'object')) {
        this.myModel = {Filters : []};
      }
    },
    data() {
      return {
        refreshKey : 0,
        availableFilters : [
          {value : 'Faction', text : 'Belongs to faction...'},
          {value : 'CanReach', text : 'Can reach...'},
          {value : 'CanSeeOneOf', text : 'Can see one of...'},
          {value : 'NaturalAgeUnder', text : 'Has a natural age under...'},
          {value : 'Relation', text : 'Has faction relation...'},
          {value : 'Awake', text : 'Is awake'},
          {value : 'Downed', text : 'Is downed'},
          {value : 'Drafted', text : 'Is drafted'},
          {value : 'Fighting', text : 'Is fighting'},
          {value : 'IsHumanlike', text : 'Is humanlike'},
          {value : 'InBed', text : 'Is in bed'},
          {value : 'Indoors', text : 'Is indoors'},
          {value : 'IsKidnapped', text : 'Is kidnapped'},
          {value : 'Kind', text : 'Is Kind/Race...'},
          {value : 'Male', text : 'Is male'},
          {value : 'Location', text : 'Is within location'},
          {value : 'OnFire', text : 'Is on fire'},
          {value : 'Prisoner', text : 'Is prisoner'},
          {value : 'Starving', text : 'Is starving'},
          {value : 'UnderRoof', text : 'Is Under a roof'},
          {value : 'PrisonerInCell', text : 'Prisoner in a cell'},
        ],
        picked : null,
        search : "",
        clearOnce : false,
      }
    },
    methods : {
      deleteFilter: function(uuid) {
        this.search = '';
        this.myModel.Filters = this.myModel.Filters.filter(function(el) {
          return el.uuid !== uuid;
        });
        this.refreshKey++;
      }
    },
    watch : {
      myModel : {
        handler : function(newVal) {
          this.$emit('update:myModel', newVal);
        },
        deep : true
      },

      picked(val) {
        if (val !== null && val !== undefined && val !== "") {
          this.myModel.Filters.push({type : val, uuid : Date.now()});
          this.clearOnce = true;
        }
      },

      search(val) {
        if (this.clearOnce) {
          this.search = "";
          this.picked = "";
          this.clearOnce = false;
        }
      }
    }
  }
</script>

<style scoped>
    .filter-rule {
        width: 100%;
        display: flex;
        box-shadow: inset 0 -2px 0 0 #ffffff0d;
    }

    .filter-rule:nth-child(odd) {
        width: 100%;
        display: flex;
    }

    /deep/ .filter-rule > span {
        width: 100%;
        display: flex;
    }

    /deep/ .filter-rule > span > div:first-child {
        white-space: nowrap;
    }

    /deep/ .filter-rule > span > div {
        font-weight: bold;
        line-height: 4;
        padding-left: 5px;
    }

    .delete-filter {
        line-height: 1 !important;;
        display: flex;
        place-items: center;
        margin-left: auto;
    }
</style>