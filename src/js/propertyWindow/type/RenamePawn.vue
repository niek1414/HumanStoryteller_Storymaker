<template>
    <div class="info-box">
        <p>If 'current name' is empty, a random pawn of the colony is named. (One that does not have a custom name yet)<br>
        You can use the condition 'Colonists' to find out how many colonists there are.</p>
        <v-input messages="Current name of the pawn (can be empty, see above)">
            <v-text-field label="Current name" type="text" v-model="selected.properties['Name']"></v-text-field>
        </v-input>
        <v-input messages="New name of the pawn">
            <v-text-field label="New name" type="text" v-model="selected.properties['NewName']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "RenamePawn"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>