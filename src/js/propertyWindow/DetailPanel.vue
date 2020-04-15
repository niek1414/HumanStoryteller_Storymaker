<template>
    <div>
        <property-header>Story settings</property-header>

        <div class="info-box">
            <v-text-field
                    class="mb-3"
                    label="Story title"
                    v-model="project.name"
            />
            <v-textarea
                    outline
                    label="Description"
                    v-model="project.description"
            />
            <v-divider data-content="MAP GENERATION & SELECTION"/>
            <v-input messages="Force map generation settings?">
                <v-switch
                        label="Override map & opening variables"
                        v-model="selected.properties['OverrideMapGen']"
                />
            </v-input>
            <template v-if="selected.properties['OverrideMapGen']">
                <v-input messages="Starting pawn amount">
                    <v-text-field label="Pawn amount" type="number" v-model="selected.properties['PawnAmount']"/>
                </v-input>
                <SmartTextArea
                        label="Opening text"
                        :myModel.sync="selected.properties['Opening']"
                        :has-no-interaction="true"
                        :start-big="true"
                />
                <v-input messages="Seed used in map generation">
                    <v-text-field label="Random seed" type="text" v-model="selected.properties['Seed']"/>
                </v-input>
                <v-input messages="Amount of world that needs to be generated. 0 to 1 where 0.5 is 50%">
                    <v-text-field label="World coverage" type="number" v-model="selected.properties['Coverage']"/>
                </v-input>
                <v-input messages="Amount of rain. 0 to 1 where 1 is a lot of rain.">
                    <v-text-field label="Rainfall" type="number" v-model="selected.properties['Rainfall']"/>
                </v-input>
                <v-input messages="Temperature in the world. 0 is very cold and 1 very warm">
                    <v-text-field label="Temperature" type="number" v-model="selected.properties['Temperature']"/>
                </v-input>
                <v-input messages="Population in the world. 0 is very little and 1 is a lot">
                    <v-text-field label="Population" type="number" v-model="selected.properties['Population']"/>
                </v-input>
            </template>
            <v-input messages="Force player starting location?">
                <v-switch
                        label="Override landing location"
                        v-model="selected.properties['OverrideMapLoc']"
                />
            </v-input>
            <template v-if="selected.properties['OverrideMapLoc']">
                <v-input messages="Number can be found in-game top-left on world selection screen (with mod enabled).">
                    <v-text-field label="First landing site" type="number" v-model="selected.properties['Site']"/>
                </v-input>
                <v-input messages="Minimal 200, maximal 400. Default is 250">
                    <v-text-field label="Map size" type="number" v-model="selected.properties['MapSize']"/>
                </v-input>
                <v-input messages="Default is 'Auto'">
                    <v-select
                            :items="seasons"
                            v-model="selected.properties['StartSeason']"
                            label="Starting season"
                            :clearable=true
                    />
                </v-input>
            </template>
        </div>
    </div>
</template>

<script>
  import PropertyHeader from "./PropertyHeader";
  import SmartTextArea from "./util/SmartTextArea";

  export default {
    name : "detail-panel",
    props : ["project", "selected"],
    components : {SmartTextArea, PropertyHeader},
    data : function() {
      return {
        seasons : [
          {value : "Auto", text : "Auto"},
          {value : "Spring", text : "Spring"},
          {value : "Summer", text : "Summer"},
          {value : "Fall", text : "Fall"},
          {value : "Winter", text : "Winter"},
          {value : "PermanentSummer", text : "Permanent summer"},
          {value : "PermanentWinter", text : "Permanent winter"},
        ]
      }
    }
  }
</script>

<style scoped>
    b {
        font-family: "Open Sans Semibold", sans-serif;
        font-weight: bold;
    }
</style>