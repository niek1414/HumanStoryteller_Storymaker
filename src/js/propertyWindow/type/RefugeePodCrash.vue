<template>
    <div class="info-box">
        <v-input class="property-box" messages="Identifiable name of the crashed refugee">
            <v-text-field label="Refugee name" type="text" v-model="selected.properties['OutName']"/>
        </v-input>

        <v-input class="property-box" messages="Display name of refugee" style="width: 100%; position: relative; display: flex; flex-wrap: wrap;">
            <v-text-field label="First name" type="text" v-model="selected.properties['FirstName']"/>
            <v-text-field label="Nick name" type="text" v-model="selected.properties['NickName']"/>
            <v-text-field label="Last name" type="text" v-model="selected.properties['LastName']"/>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "RefugeePodCrash"
  }
</script>

<style scoped>
</style>