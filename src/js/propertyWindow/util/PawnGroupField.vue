<template>
    <span style="width: 100%; position: relative; display: flex; flex-wrap: wrap;" :key="refreshKey">
        <PawnGroupSourceField :myModel.sync="myModel['Source']"></PawnGroupSourceField><br/>
        <v-autocomplete
                v-model="picked"
                :items="availableFilters"
                label="Add condition"
                :search-input.sync="search"
        ></v-autocomplete>
        <template v-for="(filter) in myModel.Filters">
           <div class="filter-rule" :key="filter.uuid">
               <b>
                   <v-switch
                           :label="filter['Include']?'Include ':'Exclude '"
                           v-model="filter['Include']"
                   ></v-switch>
               </b>
               <Drafted v-if="filter.type === 'Drafted'" v-bind:filter="filter"></Drafted>
               <div class="delete-filter">
                   <v-btn flat color="error" v-on:click="deleteFilter(filter.uuid)">
<!--                       TODO fix delete-->
                       remove
                   </v-btn>
               </div>
            </div>
        </template>
        <v-input messages="Default is no limit">
            <NumberField label="Pawn limit" :myModel.sync="myModel['Limit']"></NumberField>
        </v-input>
    </span>
</template>

<script>
  import NumberField from "./NumberField";
  import PawnGroupSourceField from "./PawnGroupSourceField";
  import Drafted from "./filter/Drafted";

  export default {
    components : {
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
          {value : 'InBed', text : 'Is in bed'},
          {value : 'Indoors', text : 'Is indoors'},
          {value : 'IsKidnapped', text : 'Is kidnapped'},
          {value : 'Kind', text : 'Is Kind/Race...'},
          {value : 'Male', text : 'Is male'},
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
    }

    .filter-rule div {
        font-weight: bold;
        line-height: 4;
        padding-left: 5px;
    }

    .delete-filter {
        display: flex;
        place-items: center;
        margin-left: auto;
    }
</style>