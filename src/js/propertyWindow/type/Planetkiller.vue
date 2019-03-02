<template>
    <div class="info-box">
        <v-input messages="Default: between 90 and 500 days">
            <v-text-field label="Duration in days" type="number" v-model="selected.properties['Duration']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "Planetkiller"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>