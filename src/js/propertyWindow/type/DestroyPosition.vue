<template>
    <div class="info-box">
        <v-input class="property-box" messages="Destroy roof?">
            <v-switch
                    label="Destroy roof"
                    v-model="selected.properties['DestroyRoof']"
            />
        </v-input>
        <v-input class="property-box" messages="Destroy items?">
            <v-switch
                    label="Destroy items"
                    v-model="selected.properties['DestroyItems']"
            />
        </v-input>
        <v-input class="property-box" messages="Destroy pawns?">
            <v-switch
                    label="Destroy pawns"
                    v-model="selected.properties['DestroyPawns']"
            />
        </v-input>
        <v-input class="property-box" messages="Destroy structures?">
            <v-switch
                    label="Destroy structures"
                    v-model="selected.properties['DestroyStructures']"
            />
        </v-input>
        <v-input class="property-box" messages="Destroy plants?">
            <v-switch
                    label="Destroy plants"
                    v-model="selected.properties['DestroyPlants']"
            />
        </v-input>
        <v-input class="property-box" messages="Position that should be destroyed. Can be a zone or single cell">
            <LocationField :myModel.sync="selected.properties['Location']"/>
        </v-input>
    </div>
</template>

<script>
  import LocationField from "../util/LocationField";

  export default {
    components : {LocationField},
    props : ["selected"],
    name : "DestroyPosition"
  }
</script>

<style scoped>
</style>