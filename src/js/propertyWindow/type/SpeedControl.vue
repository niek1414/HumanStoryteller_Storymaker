<template>
    <div class="info-box">
        <v-input class="property-box" messages="Default does not change speed">
            <v-select
                    :items="speedTypes"
                    v-model="selected.properties['Speed']"
                    label="Speed"
                    :clearable=true
            ></v-select>
        </v-input>
        <v-input class="property-box" messages="Lock the current speed & remove time buttons?</br>Note 1: If off, controls are unlocked if locked</br>Note 2: Locking while paused is a <b>bad</b> idea..</br>Note 3: opening the main menu still pauses the game">
            <v-switch
                    label="Lock speed controls"
                    v-model="selected.properties['LockControls']"
            ></v-switch>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "SpeedControl",
    data : function() {
      return {
        speedTypes : [
          {value : "Paused", text : "Paused"},
          {value : "Slow", text : "Slow motion (temporary & forced)"},
          {value : "Normal", text : "Normal"},
          {value : "Fast", text : "Fast"},
          {value : "Superfast", text : "Superfast"},
          {value : "Ultrafast", text : "Ultrafast (debug speed)"},
        ]
      }
    }
  }
</script>

<style scoped>
</style>