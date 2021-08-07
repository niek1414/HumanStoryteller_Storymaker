<template>
    <div>
        <Tutorial :steps="steps" :finishCallback="finishCallback"/>
    </div>
</template>

<script>
  import Tutorial from "./Tutorial";

  export default {
    name : "BasicTutorial",
    components : {Tutorial},
    props : {},
    data() {
      return {
        steps : [
          {
            title : `Let's begin!`,
            content : `Take your time inspecting the current storyline.<br>You automatically progress a step if you make the correct changes.<br>Under the <i class="v-icon material-icons theme--dark">settings</i> are three buttons; hint, reset and stop tutorial.<br>Hover over <LearnHover img="hint.png">these</LearnHover> for visual aid. Good luck!`,
            name : "b1",
            button : true,
          }, {
            title : `Movement & manipulation`,
            content : `Shift + scroll: zoom<br/>Click a <LearnHover img="event.png">event</LearnHover> or <LearnHover img="connection.png">connection</LearnHover> to alter its properties.`,
            name : "b1",
            button : true,
          }, {
            title : `Add an event`,
            content : `Starting off, let's add an event to this storyline.<br/>Drag the <i class="far fa-plus-square"></i> icon onto the graph.<br/>Drag the yellow orbs to <LearnHover img="connect.png">connect</LearnHover> the events.<br/>Hint: giving events a name makes it easier to read your story & when using the tutorial hint function, the name will be used to identify an event!`,
            name : "b2",
          }, {
            title : `Time`,
            content : `The number displayed on the connection is the amount of days before the next event is executed.<br/>Drag the new event down until it executes after <b>two</b> days.<br/>Need more control? Just select the connection and switch on the <LearnHover img="customTime.png">custom setting</LearnHover> on the right!`,
            name : "b3",
          }, {
            title : `Event type`,
            content : `Let's change the type of the event you <b>just created.</b><br/>Simply click the event and select a new <LearnHover img="eventType.png">event type</LearnHover>.<br/>To continue, select the type 'Rename pawn'.`,
            name : "b4",
          }, {
            title : `Event properties`,
            content : `A pawn's <b>name</b> can be used as a reference in other events.<br/>Input as <LearnHover img="newName.png">new name</LearnHover> 'bob' (names are not case sensitive but this tutorial is).<br/>Check the unnamed colonist option, a random (unnamed) colonist will be picked.<br/>Unless clearly stated, every property is optional!`,
            name : "b5",
          }, {
            title : `End with a bang`,
            content : `Let's add a new event with type 'Orbital strike', connect that to our 'Rename pawn'. Select as location 'Pawn' and then 'bob' as our victim and 'Orbital power beam' as type.<br/>If your stuck, don't forget to use the hint button on the right.`,
            name : "b6",
          }, {
            title : `That's it for the first tutorial`,
            content : `Don't forget that you can use the <LearnHover img="mailTab.png">mail tab</LearnHover> to customize the event letters.<br/>Now, to continue, just hit the button!`,
            name : "b6",
            button : true,
          }
        ]
      }
    },
    methods : {
      finishCallback : function() {
        window.updateTutorial(0);
        if (window.toolbar.user.tutorial > 0){
          return;
        }
        $.ajax({
          url : '/tutorial/zgGBTUf74Kb0',
          type : 'GET',
          success : function(){
            window.updateTutorial(0);
            window.toolbar.user.tutorial = 1;
          },
          error : function(jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
            window.toolbar.errorMessage("Trying to update your account, " + errorThrown);
          }
        });
      },
    }
  }
</script>
