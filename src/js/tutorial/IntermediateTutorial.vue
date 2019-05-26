<template>
    <div>
        <Tutorial :steps="steps" :finishCallback="finishCallback"/>
    </div>
</template>

<script>
  import Tutorial from "./Tutorial";

  export default {
    name : "IntermediateTutorial",
    components : {Tutorial},
    props : {},
    data() {
      return {
        steps : [
          {
            title : `Manipulate story flow`,
            content : `This story is a bit more flashed out.<br/>In this tutorial you learn to make your story dynamic!<br/>Don't forget to use the hint button on the right when you're stuck.`,
            name : "i1",
            button : true,
          }, {
            title : `Conditions`,
            content : `Conditions are choices based on the players actions or what happened in-game.<br/>The last event we send a pack of manhunting rats. Select it and navigate to the <LearnHover img="conditionTab.png">condition tab</LearnHover>.<br/>Let's check if bob is injured by adding a <LearnHover img="healthPawnCheck.png">check</LearnHover>.<br/>Name is 'bob' and pawn condition 'InjuredButAlive'.`,
            name : "i2",
          }, {
            title : `Conditions #2`,
            content : `Now simply connect two events to the manhunting rats event. The left connection is picked if bob is injured but alive and the connection time has passed.<br/><b>Note that the decision, left or right, is made continually until the next event can be executed.</b> Bob is not injured at the start of the event but by setting the right connection time you essentially set a timeout.`,
            name : "i3",
          }, {
            title : `Loops`,
            content : `Events can be reused, try to create a story where, as long as bob is injured more rats keep coming.<br/>(Simply connect the created left event back up to the rat event)`,
            name : "i4",
          }, {
            title : `Divider`,
            content : `Let's continue the story on the right event. Here it gets a tad more complicated. A story has not necessarily one 'active event'. By using the <LearnHover img="divider.png">divider</LearnHover> you split the 'active event' in two, executing both simultaneously!<br/>Unless you really know what your doing, don't connect a divider output to itself indirectly. You will 'leak' active events!<br/>To continue connect a <LearnHover img="dividerIcon.png">divider</LearnHover> to the new right event.`,
            name : "i5",
          }, {
            title : `Divider #2`,
            content : `Now add an event to the left and right divider. These events <b>WILL NOT<b/> respect the offset time but fire right away when the divider is reached!`,
            name : "i6",
          },
        ]
      }
    },
    methods : {
      finishCallback : function() {
        window.updateTutorial(0);
        if (window.toolbar.user.tutorial > 1){
          return;
        }
        $.ajax({
          url : '/tutorial/kuwMkLx9f7F9',
          type : 'GET',
          success : function(){
            window.updateTutorial(0);
            window.toolbar.user.tutorial = 2;
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
