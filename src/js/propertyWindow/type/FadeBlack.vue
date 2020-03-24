<template>
    <div class="info-box">
        <v-input class="property-box" messages="Fade in (on) or fade out (off). Note: Unless changed using the `SpeedControl` event, the game will continue to run normally. Note: User input will be disabled when the fade starts.">
            <v-switch
                    label="Black screen"
                    v-model="selected.properties['Enable']"
            />
        </v-input>
        <v-input v-if="selected.properties['Enable']" class="property-box" messages="Show loading text">
            <v-switch
                    label="Loading text"
                    v-model="selected.properties['ShowLoading']"
            />
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "FadeBlack"
  }
</script>

<style scoped>
</style>