<template>
    <div class="info-box">
        <v-input class="property-box" messages="Enable or disable movie mode. Note: movie mode disables all user input except main menu, saving, pausing and other main menu actions (& accessing debug log).">
            <v-switch
                    label="Movie mode"
                    v-model="selected.properties['Enable']"
            />
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "MovieMode"
  }
</script>

<style scoped>
</style>