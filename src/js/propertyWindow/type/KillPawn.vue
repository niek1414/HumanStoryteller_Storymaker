<template>
    <div class="info-box">
        <v-input messages="Names of pawns to kill.">
            <v-combobox
                    v-model="selected.properties['Names']"
                    :items="[]"
                    multiple
                    small-chips
            >
                <template slot="no-data">
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                Press <kbd>enter</kbd> to create a new name
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-combobox>
        </v-input>
        <v-input messages="If enabled, pawn is deleted (without notification) and removed from the history.">
            <v-switch
                    label="Destroy"
                    v-model="selected.properties['Destroy']"
            ></v-switch>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "KillPawn",
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>