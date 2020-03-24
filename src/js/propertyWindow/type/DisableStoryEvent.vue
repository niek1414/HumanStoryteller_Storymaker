<template>
    <div class="info-box">
        <v-input class="property-box" messages="Disable game end dialog?">
            <v-switch
                    label="Disable game end?"
                    v-model="selected.properties['DisableGameOverDialog']"
            />
        </v-input>
        <v-input class="property-box" messages="Disable name colony and settlements dialog?">
            <v-switch
                    label="Disable naming?"
                    v-model="selected.properties['DisableNameColonyDialog']"
            />
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "DisableStoryEvent"
  }
</script>

<style scoped>
</style>