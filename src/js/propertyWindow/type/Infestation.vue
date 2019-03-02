<template>
    <div class="info-box">
        <p>Only works when player is in a cave</p>
        <v-input messages="2 is twice the strength, 0.5 half and 1 is default (takes player difficulty & playtime in account)">
            <v-text-field label="Strength as multiplier" type="number" v-model="selected.properties['Points']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "Infestation"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>