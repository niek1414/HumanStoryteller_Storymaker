<template>
    <div>
        <Tutorial :steps="steps" :finishCallback="finishCallback"/>
    </div>
</template>

<script>
  import Tutorial from "./Tutorial";

  export default {
    name : "ExpertTutorial",
    components : {Tutorial},
    props : {},
    data() {
      return {
        steps : [
          {
            title : `Working with variables`,
            content : `This tutorial will show one way of using variables in your story, the possibilities are endless though!<br/>We are going to make a story where every day you don't pay, you get a tougher raid.<br/>When you pay the raids stop.`,
            name : "e1",
            button : true,
          }, {
            title : `Setup`,
            content : `Let's start with a basic setup. First one raid, then one Dialog event.<br/>Set the dialog <LearnHover img="hundredSilver.png">silver price</LearnHover> to 100.<br/>Add the <LearnHover img="dialogCondition.png">'Dialog' condition</LearnHover> to the dialog.<br/>The <LearnHover img="dialogDenied.png">response status</LearnHover> should be 'denied'.<br/>Lastly lets connect the LEFT dialog port back up to the raid event and give the <LearnHover img="twoDays.png">connection a duration</LearnHover> of 2 days.`,
            name : "e2",
          }, {
            title : `Counter`,
            content : `We can now make a simple counter to keep track of how many times the user refused to pay.<br/>Go to the <LearnHover img="variableTab.png">variable tab</LearnHover> of the raid event.<br/>Click 'add modification'. Enter the variable name 'count' (without quotes). Modification type 'ADD' and constant should be '1'.<br/>Now every time the user passes this event, 'count' will increase by one.`,
            name : "e3",
          }, {
            title : `Variable in property`,
            content : `To use our new variable just go to raid's <LearnHover img="propertyTab.png">property tab</LearnHover>. We want to enter our 'counter' variable in the 'Strength as multiplier' field. To do this, <LearnHover img="variableSwitch.png">switch the property to variable input</LearnHover>. And then select the counter variable in the dropdown.`,
            name : "e4",
          }, {
            title : `That's it for this tutorial`,
            content : `Still questions about variables or something else?<br/>Just ask in the discord!`,
            name : "e4",
            button : true,
          }
        ]
      }
    },
    methods : {
      finishCallback : function() {
        window.updateTutorial(0);
        if (window.toolbar.user.tutorial > 2){
          return;
        }
        $.ajax({
          url : '/tutorial/allotr2hTJXR',
          type : 'GET',
          success : function(){
            window.updateTutorial(0);
            window.toolbar.user.tutorial = 3;
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
