<template>
    <div class="info-box">
        <v-input class="property-box" messages="Like 'Chapter 1 - Survive'">
            <v-text-field label="Chapter title" type="text" v-model="selected.properties['Title']"/>
        </v-input>
        <v-input class="property-box" messages="A witty under title like 'It's eat or...'">
            <v-text-field label="Under title" type="text" v-model="selected.properties['Description']"/>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "ChapterSplash"
  }
</script>

<style scoped>
</style>