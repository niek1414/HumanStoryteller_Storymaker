<template>
    <div>
        <property-header>Story settings</property-header>

        <div class="info-box">
            <v-text-field
                    class="mb-3"
                    label="Story title"
                    v-model="project.name"
            ></v-text-field>
            <v-textarea
                    outline
                    label="Description"
                    v-model="project.description"
            ></v-textarea>
            <v-input messages="Publicly visible. Change becomes active after upload!">
                <v-switch
                        label="Show publicly"
                        v-model="project.publish"
                ></v-switch>
            </v-input>
            <v-divider data-content="MAP GENERATION & SELECTION"></v-divider>
            <v-input messages="Force map generation settings?">
                <v-switch
                        label="Override map & opening variables"
                        v-model="selected.properties['OverrideMapGen']"
                ></v-switch>
            </v-input>
            <template v-if="selected.properties['OverrideMapGen']">
                <v-input messages="Starting pawn amount">
                    <v-text-field label="Pawn amount" type="number" v-model="selected.properties['PawnAmount']"></v-text-field>
                </v-input>
                <v-textarea
                    outline
                    label="Opening text"
                    v-model="selected.properties['Opening']"
                ></v-textarea>
                <v-input messages="Seed used in map generation">
                    <v-text-field label="Random seed" type="text" v-model="selected.properties['Seed']"></v-text-field>
                </v-input>
                <v-input messages="Amount of world that needs to be generated. 0 to 1 where 0.5 is 50%">
                    <v-text-field label="World coverage" type="number" v-model="selected.properties['Coverage']"></v-text-field>
                </v-input>
                <v-input messages="Amount of rain. 0 to 1 where 1 is a lot of rain.">
                    <v-text-field label="Rainfall" type="number" v-model="selected.properties['Rainfall']"></v-text-field>
                </v-input>
                <v-input messages="Temperature in the world. 0 is very cold and 1 very warm">
                    <v-text-field label="Temperature" type="number" v-model="selected.properties['Temperature']"></v-text-field>
                </v-input>
            </template>
            <v-input messages="Force player starting location?">
                <v-switch
                        label="Override landing location"
                        v-model="selected.properties['OverrideMapLoc']"
                ></v-switch>
            </v-input>
            <template v-if="selected.properties['OverrideMapLoc']">
                <v-input messages="Number can be found ingame top-left on world selection screen (with mod enabled).">
                    <v-text-field label="First landing site" type="number" v-model="selected.properties['Site']"></v-text-field>
                </v-input>
                <v-input messages="Minimal 200, maximal 400. Default is 250">
                    <v-text-field label="Map size" type="number" v-model="selected.properties['MapSize']"></v-text-field>
                </v-input>
                <v-input messages="Default is 'Auto'">
                    <v-select
                            :items="seasons"
                            v-model="selected.properties['StartSeason']"
                            label="Starting season"
                            :clearable=true
                    ></v-select>
                </v-input>
            </template>
        </div>
    </div>
</template>

<script>
  import PropertyHeader from "./PropertyHeader";

  export default {
    name : "detail-panel",
    props : ["project", "selected"],
    components : {PropertyHeader},
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
    .info-box {
        margin: 30px;
    }

    b {
        font-family: "Open Sans Semibold", sans-serif;
        font-weight: bold;
    }
</style>