<template>
    <div class="info-box">
        <v-input class="property-box" messages="What kind of explosion">
            <v-autocomplete
                    v-model="selected.properties['ExplosionType']"
                    :items="explosionTypes"
                    label="Explosion type"
            />
        </v-input>
        <v-input class="property-box" messages="Default (bomb): 3.9">
            <NumberField label="Radius of the explosion" :myModel.sync="selected.properties['Radius']"/>
        </v-input>
        <v-input class="property-box" messages="Explosion location, default is random">
            <LocationField :myModel.sync="selected.properties['Location']"/>
        </v-input>
    </div>
</template>

<script>
    import DataFile from "../../storyGraph/DataFile";
    import NumberField from "../util/NumberField";
    import LocationField from "../util/LocationField";

    export default {
        components: {LocationField, NumberField},
        props: ["selected"],
        name: "Explosion",
        data: function () {
            return {
                explosionTypes: DataFile.ExplosionTypes,
            }
        }
    }
</script>

<style scoped>
</style>