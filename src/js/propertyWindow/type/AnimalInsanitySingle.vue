<template>
    <div class="info-box">
        <p>While called Animal insanity, if one or more pawn names are not animals they will still go berserk.</p>
        <v-input messages="Names of pawns. If none given, a random (weak if before day 7) animal will be picked.">
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
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "AnimalInsanitySingle",
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>