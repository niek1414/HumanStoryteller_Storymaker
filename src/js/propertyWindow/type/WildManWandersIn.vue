<template>
    <div class="info-box">
        <v-input messages="Name of the wild man">
            <v-text-field label="Pawn name" type="text" v-model="selected.properties['Name']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "WildManWandersIn"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>