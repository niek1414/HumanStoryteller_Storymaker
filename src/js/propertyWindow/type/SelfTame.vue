<template>
    <div class="info-box">
        <v-input messages="Name of the tamed animal">
            <v-text-field label="Animal name" type="text" v-model="selected.properties['Name']"></v-text-field>
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
    .info-box {
        margin: 30px;
    }
</style>