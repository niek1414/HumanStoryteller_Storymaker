<template>
    <div class="info-box">
        <v-input class="property-box" messages="Explode pawns on death?">
            <v-switch
                    label="Explode on death"
                    v-model="selected.properties['ExplodeOnDeath']"
            />
        </v-input>

        <v-input class="property-box" v-if="selected.properties['ExplodeOnDeath'] !== undefined && selected.properties['ExplodeOnDeath']" messages="Explosion radius. Default ~6">
            <NumberField label="Explosion radius" :myModel.sync="selected.properties['ExplodeRadius']"/>
        </v-input>
        <v-input class="property-box" messages="Forbidden buildings. Clears old restrictions first.">
            <v-autocomplete
                    v-model="selected.properties['DisallowedBuildings']"
                    multiple
                    :items="buildings"
                    label="Forbidden buildings"
            />
        </v-input>
        <v-input class="property-box" messages="Forbidden actions. Clears old restrictions first.">
            <v-autocomplete
                    messages="Forbidden actions. Clears old restrictions first."
                    v-model="selected.properties['DisallowedDesignators']"
                    multiple
                    :items="actions"
                    label="Forbidden actions"
            />
        </v-input>
        <v-divider data-content="STATS"/>
        <v-input class="property-box" messages="Game stats" :key="refreshKey">
            <div style="width: 100%">
                <v-autocomplete
                        v-model="picked"
                        :items="availableStats"
                        label="Add stat"
                        :search-input.sync="search"
                />
                <template v-for="(val, name) in selected.properties['Stats']" >
                    <v-card :key="name">
                        <v-card-title primary-title>{{name}}</v-card-title>
                        <v-card-text>
                            <v-input messages="Stat factor (2 is STAT * 2). Default is 1 which makes the stat normal.">
                                <NumberField label="Factor" :myModel.sync="selected.properties['Stats'][name]"/>
                            </v-input>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn flat color="error" v-on:click="function() {
                                search = '';
                                delete selected.properties['Stats'][name];
                                refreshKey++;
                            }">
                                remove
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <br>
                </template>
            </div>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  import DataFile from "../../storyGraph/DataFile";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "Rules",
    data : function() {
      if (this.selected.properties["Stats"] === undefined) {
        this.selected.properties["Stats"] = {};
      }
      return {
        refreshKey : 0,
        actions : [
          {value : "Designator_ZoneAdd_Growing", text : "Add growing zone"},
          {value : "Designator_ZoneAddStockpile_Resources", text : "Add resource stockpile"},
          {value : "Designator_ZoneAddStockpile_Dumping", text : "Add dumping stockpile"},
          {value : "Designator_Build", text : "Build"},
          {value : "Designator_Claim", text : "Claim"},
          {value : "Designator_Haul", text : "Haul"},
          {value : "Designator_Hunt", text : "Hunt"},
          {value : "Designator_Mine", text : "Mine"},
          {value : "Designator_Slaughter", text : "Slaughter"},
          {value : "Designator_Strip", text : "Strip"},
          {value : "Designator_Tame", text : "Tame"},
        ],
        buildings : DataFile.Buildings,
        availableStats : DataFile.AvailableStats,
        picked : null,
        search : "",
        clearOnce : false,
      }
    },
    watch : {
      picked(val) {
        if (val !== null && val !== undefined && val !== "") {
          if (this.selected.properties["Stats"] === undefined) {
            this.selected.properties["Stats"] = {};
          }
          this.selected.properties["Stats"][val] = 1;
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
</style>