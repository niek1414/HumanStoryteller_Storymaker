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
                    :items="availableConditions"
                    label="Add condition"
                    :search-input.sync="search"
            ></v-autocomplete>
            <v-divider v-if="selected.conditions.length > 0" data-content="PICK LEFT IF"></v-divider>
            <template v-for="(con, index) in selected.conditions">
                <v-card>
                    <v-card-title primary-title>{{con.type}}</v-card-title>
                    <v-card-text>
                        <PawnHealth v-if="con.type === 'PawnHealth'" v-bind:condition="con"></PawnHealth>
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

  export default {
    name : "conditional",
    components : {PawnHealth},
    props : ["canvas", "selected"],
    data() {
      return {
        availableConditions : ['PawnHealth'],
        picked : null,
        search : "",
        clearOnce : false,
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
</style>