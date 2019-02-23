<template>
    <div>
        <property-header>Connection</property-header>

        <div class="info-box">
            <v-switch
                    label="Custom time"
                    v-model="selected.customSwitch"
                    v-on:change="selected.updateWeight()"
            ></v-switch>
            <template v-if="selected.customSwitch">
                <v-input messages="Override value in days (e.g.: 0.5 is half a day)">
                    <v-text-field label="Duration" type="number" v-model="selected.customWeight" v-on:input="selected.updateWeight()"></v-text-field>
                </v-input>
            </template>
        </div>
    </div>
</template>

<script>
  import PropertyHeader from "./PropertyHeader";

  export default {
    name : "connection-panel",
    props : ["selected"],
    components : {PropertyHeader}
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }

    b {
        font-family: "Open Sans Semibold", sans-serif;
        font-weight: bold;
    }
</style>