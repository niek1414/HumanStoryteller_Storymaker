<template>
    <div class="info-box">
        <p>
            You can use <a href="https://freesound.org/" target="_blank">FreeSound.org</a> or a share link from <a
                href="https://drive.google.com/" target="_blank">Google Drive</a> to play songs or
            sounds in your story.<br>
            Not found what you where searching for? Why not <a href="https://freesound.org/home/upload/"
                                                               target="_blank">upload it yourself</a>? (Mind
            copyright)<br>
            Or share your own files. Files shared with Google Drive MUST be MP3!
        </p>
        <v-input class="property-box"
                 :messages="error?'Invalid url!':'The url of the audio (freesound or drive share link)'">
            <v-text-field label="url" type="text" v-model="url" v-on:input="getMetadata"/>
        </v-input>
        <template v-if="fake === '2'"/>
        <v-text-field label="Author" type="text" v-model="selected.properties['Author']"/>
        <v-text-field disabled label="Audio file" type="text" v-model="selected.properties['File']"/>
        <v-input class="property-box"
                 messages="If enabled audio is played as song. If disabled, audio is played as a sound">
            <v-switch
                    label="Is song"
                    v-model="selected.properties['IsSong']"
            />
        </v-input>
        <v-input class="property-box" messages="Volume (between 0 and 1) 0.5 is 50%">
            <NumberField label="Volume" :myModel.sync="selected.properties['Volume']"/>
        </v-input>
    </div>
</template>

<script>
    import NumberField from "../util/NumberField";

    export default {
        components: {NumberField},
        props: ["selected"],
        name: "PlayAudio",
        data: () => ({
            url: "",
            error: false,
            fake: ""
        }),
        methods: {
            getMetadata() {
                const that = this;
                if (that.url.includes("freesound")) {
                    $.get(this.url,
                        function (data) {

                            const ownerDocument = document.implementation.createHTMLDocument('virtual');

                            let artist = $(data, ownerDocument).filter('meta[property="og:audio:artist"]');
                            if (artist === undefined) {
                                artist = ""
                            } else {
                                artist = artist.attr("content");
                            }
                            that.selected.properties['Author'] = artist;

                            let audio = $(data, ownerDocument).filter('meta[property="og:audio"]');
                            if (audio === undefined) {
                                that.fake += "a";
                                that.error = true;
                                return;
                            } else {
                                audio = audio.attr("content").split("/");
                                audio = audio[audio.length - 2] + "/" + audio[audio.length - 1];
                            }
                            that.selected.properties['File'] = "f__" + audio;
                            that.fake += "a";
                            that.error = false;

                        }).fail(function () {
                        that.error = true;
                        that.selected.properties['File'] = "";
                        that.selected.properties['Author'] = "";
                    });//
                } else if (that.url.includes("drive.google")) {
                    const matches = that.url.match(/(.._\w+)/g);
                    if (matches.length > 0) {
                        that.fake += "a";
                        that.selected.properties['File'] = "d__" + matches[0];
                    } else {
                        that.fake += "a";
                        that.error = true;
                        that.selected.properties['File'] = "";
                    }
                }
            }
        }
    }
</script>

<style scoped>
</style>