<template>
    <div class="info-box">
        <v-input class="property-box" messages="If on all pointers are removed.">
            <v-switch
                    label="Remove all pointers"
                    v-model="selected.properties['RemoveAll']"
            />
        </v-input>
        <template v-if="!selected.properties['RemoveAll']">
            <v-input class="property-box" messages="Location to point at">
                <LocationField :myModel.sync="selected.properties['Location']"/>
            </v-input>
        </template>
    </div>
</template>

<script>
  import LocationField from "../util/LocationField";
  export default {
    components : {LocationField},
    props : ["selected"],
    name : "PointTo"
  }
</script>

<style scoped>
</style>