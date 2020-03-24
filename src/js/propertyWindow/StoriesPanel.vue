<template>
    <div>
        <property-header>Your story collection</property-header>

        <div class="info-box">
            <div v-for="story in stories" class="card">
                <div v-ripple class="tutorial" v-on:click="load(story.id, toolbar)">
                    <div class="rimTitle">{{story.name}}</div>
                    <div>{{story.description}}</div>
                    <hr>
                    <div>Rating:{{story.rating}}, Votes:{{story.votes}}</div>
                    <div class="note">(Calculated daily)</div>
                </div>
                <div class="remove">
                    <div v-ripple class="remove-inner" v-on:click="remove(story.id, toolbar)"><i class="far fa-trash-alt fa-2x"/></div>
                </div>
            </div>

            <div class="card">
                <div v-ripple class="tutorial" v-on:click="loadExample(toolbar)">
                    <div class="rimTitle">Example story</div>
                    <div>An example where a few basic events are showcased.</div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import PropertyHeader from "./PropertyHeader";

  export default {
    name : "stories-panel",
    props : ["stories", "toolbar"],
    components : {PropertyHeader},
    methods : {
      remove : function(id, toolbar) {
        toolbar.propertyPanel.$modal.show('dialog', {
          title : 'Remove story?',
          text : 'This will remove the story from the storybook (server).<br> Are you sure?',
          buttons : [
            {
              title : 'Cancel',
              default : true,
              handler : () => {
                toolbar.propertyPanel.$modal.hide('dialog');
              }
            },
            {
              title : 'Remove my story from the server',
              default : false,
              handler : () => {
                toolbar.removeStory(id);
                toolbar.propertyPanel.$modal.hide('dialog');
              }
            }
          ]
        });
      },
      load : function(id, toolbar) {
        toolbar.propertyPanel.$modal.show('dialog', {
          title : 'Override local story?',
          text : 'This will override the local story.<br> Are you sure?',
          buttons : [
            {
              title : 'Cancel',
              default : true,
              handler : () => {
                toolbar.propertyPanel.$modal.hide('dialog');
              }
            },
            {
              title : 'Override my local story',
              default : false,
              handler : () => {
                toolbar.propertyPanel.$modal.hide('dialog');
                toolbar.loadStory(id);
              }
            }
          ]
        });
      },
      loadExample : function(toolbar) {
        toolbar.propertyPanel.$modal.show('dialog', {
          title : 'Override local story?',
          text : 'This will override the local story.<br> Are you sure?',
          buttons : [
            {
              title : 'Cancel',
              default : true,
              handler : () => {
                toolbar.propertyPanel.$modal.hide('dialog');
              }
            },
            {
              title : 'Override my local story',
              default : false,
              handler : () => {
                toolbar.propertyPanel.$modal.hide('dialog');
                toolbar.loadStory(-1);
              }
            }
          ]
        });
      }
    }
  }
</script>

<style scoped>
    .tutorial {
        overflow: auto;
        width: calc(100% - 44px);
        height: 100%;
        padding: 10px;
    }

    .remove {
        background-color: rgba(169, 20, 20, 0);
        color: #000000;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        border: none;

        transition: background-color .6s, color .6s;
    }

    .remove-inner {
        width: 100%;
        height: 100%;
        padding: 61px 10px;
    }

    .remove:hover {
        background-color: rgba(169, 20, 20, 1);
        color: #FFF;

        transition: background-color .6s, color .6s;
    }

    .rimTitle {
        font-family: "rimfont", sans-serif;
        font-weight: bold;
    }

    .card {
        position: relative;
        box-shadow: 0px 0px 19px 1px #000;
        width: 100%;
        height: 155px;
        margin-bottom: 30px;
        background: #4c4c4c;
        background: -moz-linear-gradient(-45deg, #4c4c4c 0%, #595959 44%, #474747 100%);
        background: -webkit-linear-gradient(-45deg, #4c4c4c 0%, #595959 44%, #474747 100%);
        background: linear-gradient(135deg, #4c4c4c 0%, #595959 44%, #474747 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4c4c4c', endColorstr='#474747', GradientType=1);
    }

    .note {
        color: #a7a7a7;
    }
</style>