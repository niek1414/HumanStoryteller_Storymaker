<template>
    <div>
        <property-header>Welcome{{toolbar && toolbar.user && toolbar.user.tutorial === 3 ? " back" : ""}} to the storymaker!</property-header>

        <p v-if="!toolbar || !toolbar.user || toolbar.user.tutorial !== 3" class="info-text">
            Here you can create and publish stories that can be played in Rimworld by using the <b>Human Storyteller</b> mod.<br>
            I created three interactive tutorials to help you along. <br><br>
        </p>
        <p v-else class="info-text">You finished all tutorials 🎉🎉🎉 (Have you joined our discord? <a href="https://discord.gg/auDTBCz">Join on discord</a> for all your questions!)<br/>If you want, you can always redo a tutorial:</p>
        <div class="info-text" v-if="toolbar != null && toolbar.user != null">
            <template v-if="window_portal.tutorial === 0">
            <v-btn block color="indigo" v-on:click="window_portal.updateTutorial(1)">Basic <i style="margin-left: 10px;" class="fas fa-sliders-h"></i></v-btn>
            <br>
            <v-btn :disabled="toolbar.user.tutorial < 1" :outline="toolbar.user.tutorial < 1" block color="indigo" v-on:click="window_portal.updateTutorial(2)">Intermediate <i style="margin-left: 10px;" class="fas fa-code-branch"></i></v-btn>
            <br>
            <v-btn :disabled="toolbar.user.tutorial < 2" :outline="toolbar.user.tutorial < 2" block color="indigo" v-on:click="window_portal.updateTutorial(3)">Expert <i style="margin-left: 10px;" class="fas fa-shapes"></i></v-btn>
            </template>
            <v-btn v-else block color="red" v-on:click="window_portal.updateTutorial(0)">Cancel tutorial</v-btn>
            <br>
        </div>
        <div v-else><p class="info-text" style="color: #FF0000;">Tutorials not available :(<br>Please try refreshing or logging out & in.</p></div>
        <p class="info-text">
            More of a 'Self-Education' person? No problem, just start on the panel on the left!<br>
            <br><br>
            <span style="font-size: 120%">Created your story? <b>Publish it</b> by changing the publish setting in the project settings.<br>
                Questions? <a href="https://discord.gg/auDTBCz">Join on discord!</a></span><br>
            <br><br><br>
            If you like reading better:<br>
            <br>
            Start by drag-and-dropping the <i class="far fa-plus-square"></i> icon on the field to the right.<br>
            By connecting events you create a storyline. By clicking on a event you can change its type and properties.
            <br><br>
            Your root node (the circle) is the start point. By clicking on the root node you can access project settings like project name.
            <br><br>
            The number on the connection is the amount of days the event will be offset from the previous event.<br>
            Click on the connection to change this or drag the event around.
            <br><br>
            Hold shift while scrolling to zoom in & out.<br>
            To delete a event or connection, highlight it by clicking and then use the <i class="far fa-trash-alt"></i> button.
            <br><br>
            Adding a condition to an event allows you to react on the player's action.<br><br>
            Important: A condition is constantly checked until the next event can be executed.<br>
            So, if initially the condition was false but the event for false is in 3 days the player can still get the event for true if the conditions have changed just before the
            3
            days are over.<br>
            I know.. ill make sense when you start to play around with it ;P<br>
            <br>
        </p>
    </div>
</template>

<script>
  import PropertyHeader from "./PropertyHeader";

  export default {
    name : "editor-info",
    props : ["toolbar"],
    components : {PropertyHeader},
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