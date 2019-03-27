<template>
    <div class="info-box">
        <p>
            You can use <a href="https://freesound.org/" target="_blank">https://freesound.org/</a> to play songs or sounds in your story.<br>
            Not found what you where searching for? Why not <a href="https://freesound.org/home/upload/" target="_blank">upload it yourself</a>? (Mind copyright)<br>
            Found audio you like? Just paste the full URL in the field below and wait for the author and audio file fields to be filled.
        </p>
        <v-input :messages="error?'Invalid url!':'The url of the audio'">
            <v-text-field label="url" type="text" v-model="url" v-on:input="getMetadata"></v-text-field>
        </v-input>
        <template v-if="fake === '2'"></template>
        <v-text-field disabled label="Author" type="text" v-model="selected.properties['Author']"></v-text-field>
        <v-text-field disabled label="Audio file" type="text" v-model="selected.properties['File']"></v-text-field>
        <v-input messages="If enabled, audio is played as song. If disabled, audio is played as a sound">
            <v-switch
                    label="Is song"
                    v-model="selected.properties['IsSong']"
            ></v-switch>
        </v-input>
        <v-input messages="Volume (between 0 and 1) 0.5 is 50%">
            <v-text-field label="Volume" type="number" v-model="selected.properties['Volume']"></v-text-field>
        </v-input>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "PlayAudio",
    data : () => ({
      url : "",
      error : false,
      fake : ""
    }),
    methods : {
      getMetadata() {
        const that = this;
        $.get(this.url,
          function(data) {
            const ownerDocument = document.implementation.createHTMLDocument('virtual');

            let artist = $(data, ownerDocument).filter('meta[property="og:audio:artist"]');
            if (artist === undefined){
              artist = ""
            } else {
              artist = artist.attr("content");
            }
            that.selected.properties['Author'] = artist;

            let audio = $(data, ownerDocument).filter('meta[property="og:audio"]');
            if (audio === undefined){
              audio = ""
            } else {
              audio = audio.attr("content").split("/");
              audio = audio[audio.length - 2] + "/" + audio[audio.length - 1];
            }
            that.selected.properties['File'] = audio;
            that.fake += "a";
            that.error = false;
          }).fail(function() {
          that.error = true;
          that.selected.properties['File'] = "";
          that.selected.properties['Author'] = "";
        });
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>