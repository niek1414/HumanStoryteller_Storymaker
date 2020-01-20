<template>
    <div class="info-box">
        <v-input class="property-box"
                 messages="Fade out all images if on.<br>Note: Unless changed using the `SpeedControl` event, the game will continue to run normally.<br>Note: User input will be disabled when the fade starts.">
            <v-switch
                    label="Remove all images"
                    v-model="selected.properties['RemoveAll']"
            />
        </v-input>
        <template v-if="!selected.properties['RemoveAll']">
            <v-input class="property-box" messages="URL where the image is found. Make sure the url end with .jpg .png .gif etc">
                <v-text-field label="URL" type="text" v-model="selected.properties['Url']"/>
            </v-input>
        </template>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "ShowImage"
  }
</script>

<style scoped>
</style>