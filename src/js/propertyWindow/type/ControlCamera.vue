<template>
    <div class="info-box">
        <v-input class="property-box" messages="Show a tile on the world view<br>Note: uses target tile defined below">
            <v-switch
                    label="Show world tile"
                    v-model="selected.properties['ShowTile']"
            ></v-switch>
        </v-input>
        <template v-if="!selected.properties['ShowTile']">
            <v-input class="property-box" messages="Focus camera on map location<br>Note: uses target map defined below">
                <LocationField :myModel.sync="selected.properties['Location']"></LocationField>
            </v-input>
            <v-input class="property-box" messages="Default: no zoom change. Closest: 11; Furthest: 60">
                <NumberField label="Zoom" :myModel.sync="selected.properties['Zoom']"></NumberField>
            </v-input>
            <v-input class="property-box" messages="Note: <b>Location</b> attribute above should be a pawn to use follow">
                <v-switch
                        label="Follow"
                        v-model="selected.properties['Follow']"
                ></v-switch>
            </v-input>
        </template>
        <v-input class="property-box" messages="Disable user camera movements, zoom & switching the world view<br>Note: use this event without location and this option on disabled to unlock the camera again">
            <v-switch
                    label="Lock camera"
                    v-model="selected.properties['LockCamera']"
            ></v-switch>
        </v-input>
    </div>
</template>

<script>
  import LocationField from "../util/LocationField";
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField, LocationField},
    props : ["selected"],
    name : "ControlCamera"
  }
</script>

<style scoped>
</style>