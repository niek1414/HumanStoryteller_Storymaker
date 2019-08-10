<template>
    <div class="info-box">
        <v-input messages="Like 'Chapter 1 - Survive'">
            <v-text-field label="Chapter title" type="text" v-model="selected.properties['Title']"></v-text-field>
        </v-input>
        <v-input messages="A witty under title like 'It's eat or...'">
            <v-text-field label="Under title" type="text" v-model="selected.properties['Description']"></v-text-field>
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
    .info-box {
        margin: 30px;
    }
</style>