<template>
    <div class="info-box">
        <v-input class="property-box" messages="Name of the tamed animal">
            <v-text-field label="Animal name" type="text" v-model="selected.properties['OutName']"/>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "SelfTame"
  }
</script>

<style scoped>
</style>