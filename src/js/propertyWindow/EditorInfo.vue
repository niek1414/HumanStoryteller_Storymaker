<template>
    <div>
        <property-header>Welcome{{toolbar && toolbar.user && toolbar.user.tutorial === 3 ? " back" : ""}} to the storymaker!</property-header>

        <p class="info-text" v-if="!toolbar || !toolbar.user || toolbar.user.tutorial !== 3">
            Here you can create and publish stories that can be played in Rimworld by using the <b>Human Storyteller</b> mod.<br>
            I created three interactive tutorials to help you along. <br><br>
        </p>
        <p class="info-text" v-else>You finished all tutorials 🎉🎉🎉 (Have you joined our discord? <a href="https://discord.gg/auDTBCz">Join on discord</a> for all your
            questions!)<br/>If you want, you can always redo a tutorial:</p>
        <div class="info-text property-box" v-if="toolbar != null && toolbar.user != null">
            <template v-if="window_portal.tutorial === 0">
                <v-btn block color="indigo" v-on:click="window_portal.updateTutorial(1)">Basic <i class="fas fa-sliders-h" style="margin-left: 10px;"/></v-btn>
                <br>
                <v-btn :disabled="toolbar.user.tutorial < 1" :outline="toolbar.user.tutorial < 1" block color="indigo" v-on:click="window_portal.updateTutorial(2)">Intermediate <i
                        class="fas fa-code-branch" style="margin-left: 10px;"/></v-btn>
                <br>
                <v-btn :disabled="toolbar.user.tutorial < 2" :outline="toolbar.user.tutorial < 2" block color="indigo" v-on:click="window_portal.updateTutorial(3)">Expert <i
                        class="fas fa-shapes" style="margin-left: 10px;"/></v-btn>
            </template>
            <v-btn block color="red" v-else v-on:click="window_portal.updateTutorial(0)">Cancel tutorial</v-btn>
            <br>
            More of a 'Self-Education' person? No problem, just start on the panel on the left!<br><br>
        </div>
        <div v-else><p class="info-text" style="color: #FF0000;">Tutorials not available :(<br>Please try refreshing or logging out & in.</p></div>
        <div class="info-text">
            <div class="property-box">
                <template v-if="toolbar && toolbar.view.projectData !== null && toolbar.view.projectData.id !== null && toolbar.view.projectData.publish">
                    <span style="font-size: 120%">Create a link directly to your story!</span><br><br>
                    What state should players, that click on the link, start in?
                    <v-radio-group row v-model="shareUrlStage">
                        <v-radio label="World generation" value="W"/>
                        <v-radio label="Pick landing site" value="S"/>
                        <v-radio label="Pick characters" value="C"/>
                        <v-radio label="In-game" value="G"/>
                    </v-radio-group>
                    <span style="font-size: 120%">Sharable link: <a :href="shareUrl" v-text="shareUrl"/></span>
                </template>
                <span style="font-size: 120%" v-else>Created your story? Next step is to <template
                        v-if="toolbar && (toolbar.view.projectData === null || toolbar.view.projectData.id === null)"><b>upload it</b> using the upload button below (besides the question mark)</template><template
                        v-else><b>publish it</b> by changing the publish setting in the project settings (make sure to upload it again afterwards!)</template>.</span>
                <br><br>
            </div>
            <br><br>
            <div class="property-box">
                Some instructions if you like reading better:<br>
                <br>
                Start by drag-and-dropping the <i class="far fa-plus-square"/> icon on the field to the right.<br>
                By connecting events you create a storyline. By clicking on a event you can change its type and properties.
                <br><br>
                Your root node (the circle) is the start point. By clicking on the root node you can access project settings like project name.
                <br><br>
                The number on the connection is the amount of days the event will be offset from the previous event.<br>
                Click on the connection to change this or drag the event around.
                <br><br>
                Hold shift while scrolling to zoom in & out.<br>
                To delete a event or connection, highlight it by clicking and then use the <i class="far fa-trash-alt"/> button.
                <br><br>
                Adding a condition to an event allows you to react on the player's action.<br><br>
                Important: A condition is constantly checked until the next event can be executed.<br>
                So, if initially the condition was false but the event for false is in 3 days the player can still get the event for true if the conditions have changed just before
                the
                3
                days are over.<br>
                I know.. ill make sense when you start to play around with it ;P<br>
                <br>
            </div>
            <br>
            <br>
            <span style="font-size: 120%">Questions? <a href="https://discord.gg/auDTBCz" target="_BLANK">Join on discord!</a></span><br>
        </div>
    </div>
</template>

<script>
  import PropertyHeader from "./PropertyHeader";

  export default {
    name : "editor-info",
    props : ["toolbar"],
    components : {PropertyHeader},
    data : () => ({
      shareUrlStage : "W",
    }),
    computed : {
      shareUrl : function() {
        return "steam://run/294100//HumanStoryteller:" + this.toolbar.view.projectData.id + ":" + this.shareUrlStage + "/";
      }
    }
  }
</script>

<style scoped>
    .info-text {
        color: #cbcbcb;
        font-family: "Roboto", sans-serif;
        font-size: 1em;
        line-height: 1.4;
        margin: 30px;
    }

    b {
        font-family: "Open Sans Semibold", sans-serif;
        font-weight: bold;
    }
</style>