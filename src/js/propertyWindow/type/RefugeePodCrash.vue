<template>
    <div class="info-box">
        <v-input messages="Identifiable name of the crashed refugee">
            <v-text-field label="Refugee name" type="text" v-model="selected.properties['OutName']"></v-text-field>
        </v-input>

        <span style="width: 100%; position: relative; display: flex; flex-wrap: wrap;">
            <v-text-field label="First name" type="text" v-model="selected.properties['FirstName']"></v-text-field>
            <v-text-field label="Nick name" type="text" v-model="selected.properties['NickName']"></v-text-field>
            <v-text-field label="Last name" type="text" v-model="selected.properties['LastName']"></v-text-field>
        </span>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "RefugeePodCrash"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>