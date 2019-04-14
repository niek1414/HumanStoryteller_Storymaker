<template>
    <div>
        <property-header>Welcome to the storymaker!</property-header>

        <p class="info-text">Here you can create and publish stories that can be played in Rimworld by using the <b>Human Storyteller</b> mod.<br>
        To start, drag-and-drop the <i class="far fa-plus-square"></i> icon on the field to the right.<br>
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
        So, if initially the condition was false but the event for false is in 3 days the player can still get the event for true if the conditions have changed just before the 3
        days are over.<br>
        I know.. ill make sense when you start to play around with it ;P<br>
        <br>
        Created your story? <b>Publish it</b> by changing the publish setting in the project settings.
        Questions? >>>placeholder contact link here<<< (hopefully i won't forget to put in the link..)
        </p>
    </div>
</template>

<script>
  import PropertyHeader from "./PropertyHeader";

  export default {
    name : "editor-info",
    components : {PropertyHeader}
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