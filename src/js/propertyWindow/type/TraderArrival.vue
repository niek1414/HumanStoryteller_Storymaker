<template>
    <div class="info-box">
        <v-input class="property-box" messages="Trader defence strength, 0.5 half and 1 is default (takes player difficulty & playtime in account)">
            <NumberField label="Strength as multiplier" :myModel.sync="selected.properties['Points']"/>
        </v-input>

        <v-input class="property-box" :messages="
            selected.properties['TraderKind'] ==='' ||
            selected.properties['TraderKind'] === undefined
            ?'Default: random trader (can be orbital)'
            :'A trader kind. If orbital the player may not notice if it does not have a Comms console'
        ">
            <v-autocomplete
                    v-model="selected.properties['TraderKind']"
                    :items="traders"
                    label="Trader kind"
            />
        </v-input>
        <v-input class="property-box" messages="Assigned from top to bottom. Name overflow will be ignored.">
            <v-combobox
                    v-model="selected.properties['OutNames']"
                    :items="[]"
                    label="Identifiable names"
                    multiple
                    small-chips
            >
                <template slot="no-data">
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                Press <kbd>enter</kbd> to create a new name
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-combobox>
        </v-input>
    </div>
</template>

<script>
  import DataFile from "../../storyGraph/DataFile";
  import NumberField from "../util/NumberField";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "TraderArrival",
    data : function() {
      return {
        traders : DataFile.Traders,
      }
    }
  }
</script>

<style scoped>
</style>