<template>
    <div class="info-box">
        <p>To customize the message title and text, use the mail icon on the left.<br>
        To react to the user decision add the event specific condition `Dialog` in the condition tab (just above the mail icon).</p>
        <v-input :messages="
            selected.properties['Silver'] ==='' ||
            selected.properties['Silver'] === undefined
            ?'Default: free'
            :'Price that needs to be paid to select `accept`'
        ">
            <v-text-field label="Silver price" type="number" v-model="selected.properties['Silver']"></v-text-field>
        </v-input>
        <v-input :messages="
            selected.properties['Duration'] ==='' ||
            selected.properties['Duration'] === undefined
            ?'Default: 1 day'
            :'Amount of days the proposal can be postponed (b.v.: 0.5 for half a day)'
        ">
            <v-text-field label="Proposal duration" type="number" v-model="selected.properties['Duration']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "Alphabeavers"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>