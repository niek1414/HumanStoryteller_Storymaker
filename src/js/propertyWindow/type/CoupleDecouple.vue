<template>
    <div class="info-box">
        <v-input class="property-box" messages="Couple a map from the world view. Note: uses target tile defined below. Note: Decouples map if off">
            <v-switch
                    label="Couple target map"
                    v-model="selected.properties['Couple']"
            />
        </v-input>
        <template v-if="!selected.properties['Couple']">
            <v-input class="property-box">
                <v-switch
                        label="Permanently remove site"
                        v-model="selected.properties['Permanent']"
                />
            </v-input>
        </template>
        <br/>
        <p>
            A decoupled map has a icon on the map but can't be zoomed in on. Further more, time stands still while decoupled. Events can be executed on a decoupled map, it will act like its coupled.<br>
            A permanent removal of the map will also remove the icon. Removing the map this way will also delete all content on the map (including colonists)!
        </p>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "CoupleDecouple"
  }
</script>

<style scoped>
</style>