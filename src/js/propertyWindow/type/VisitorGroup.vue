<template>
    <div class="info-box">
        <v-input messages="Names of pawns that are visiting. If less pawns spawn, the first are assigned (Left-to-right).">
            <v-combobox
                    v-model="selected.properties['OutNames']"
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
        <p>To ensure that a specific number of pawns spawned you COULD check for the names to be 'alive' BUT it makes more sense not to use the Visitor group event and use Create pawn instead.</p>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "VisitorGroup"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>