<template>
    <div class="info-box">
        <v-input messages="Name of the crashed refugee">
            <v-text-field label="Refugee name" type="text" v-model="selected.properties['Name']"></v-text-field>
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
    .info-box {
        margin: 30px;
    }
</style>