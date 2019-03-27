<template>
    <div class="info-box">
        <v-input messages="Names of pawns to heal.">
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
        <v-input messages="If enabled, even permanent injuries are healed.">
            <v-switch
                    label="Miracle"
                    v-model="selected.properties['Miracle']"
            ></v-switch>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "HealPawn",
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>