<template>
    <div class="info-box">
        <p>The map that needs to be renamed is defined at the bottom.</p>
        <v-input class="property-box" messages="New name of map">
            <v-text-field label="New name" type="text" v-model="selected.properties['MapName']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "RenameMap",
  }
</script>

<style scoped>
</style>