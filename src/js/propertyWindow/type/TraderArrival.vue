<template>
    <div class="info-box">
        <v-input :messages="
            selected.properties['Kind'] ==='' ||
            selected.properties['Kind'] === undefined
            ?'Default: random trader (can be orbital)'
            :'A trader kind. If orbital the player may not notice if it does not have a Comms console'
        ">
            <v-autocomplete
                    v-model="selected.properties['Kind']"
                    :items="traders"
                    label="Trader kind"
            ></v-autocomplete>
        </v-input>
    </div>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";

  export default {
    props : ["selected"],
    name : "TraderArrival",
    data : function() {
      return {
        traders : EventTypes.Traders,
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>