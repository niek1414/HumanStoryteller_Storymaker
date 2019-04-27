import draw2d from 'draw2d'
import Event from './shape/Event';
import DeleteEvent from "./command/DeleteEvent";

export default Class.extend({

  init : function(view, propertyPanel) {
    const that = this;
    this.view = view;
    this.propertyPanel = propertyPanel;
    this.user = null;

    $.ajax({
      url : '/me',
      dataType : 'json',
      type : 'get',
      success : function(data) {
        that.user = data;
        $("#avatar-img").attr("src", that.user.avatar);
        if (that.user.id === 1) {
          window.LoadStory = function(id) {
            that.loadStory(id)
          };
        }
      },
      error : function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
        that.errorMessage("Trying to get creator info, " + errorThrown);
      }
    });

    view.getCommandStack().on("change", this);

    view.on("select", $.proxy(this.onSelectionChanged, this));
    view.on("unselect", $.proxy(this.onSelectionChanged, this));

    this.undoButton = $("#undo-action");
    this.undoButton.button().click($.proxy(function() {
      this.view.getCommandStack().undo();
    }, this)).button("option", "disabled", true);

    this.redoButton = $("#redo-action");
    this.redoButton.button().click($.proxy(function() {
      this.view.getCommandStack().redo();
    }, this)).button("option", "disabled", true);

    this.deleteButton = $("#delete-action");
    this.deleteButton.button().click($.proxy(function() {
      const list = this.view.getSelection().getAll();
      const l = list.getSize();
      for (let i = 0; i < l; i++) {
        const item = list.get(i);
        if (item instanceof Event) {
          if (item.isRoot) {
            continue;
          }
        }
        this.view.getCommandStack().execute(new DeleteEvent(item));
      }
    }, this)).button("option", "disabled", true);

    this.copyButton = $("#copy-action");
    this.copyButton.button().click($.proxy(function() {
      const list = this.view.getSelection().getAll();
      const l = list.getSize();
      let nextSelection = new draw2d.util.ArrayList();
      for (let i = 0; i < l; i++) {
        const item = list.get(i);
        if (!(item instanceof Event)) {
          continue;
        }
        if (item.isRoot) {
          continue;
        }

        if (item.isDivider) {
          nextSelection.add(view.addDivider(item.x, item.y + 60));
        } else {
          nextSelection.add(view.addEvent(item.x, item.y + 60, item.type.value.value, JSON.parse(JSON.stringify(item.properties)), JSON.parse(JSON.stringify(item.conditions)), JSON.parse(JSON.stringify(item.storage))));
        }
      }

      this.view.selection.getAll().each((i, e) => {
        this.view.editPolicy.each((i, policy) => {
          if (typeof policy.unselect === "function") {
            policy.unselect(this.view, e)
          }
        })
      });
      this.view.setCurrentSelection(nextSelection);
    }, this)).button("option", "disabled", true);

    this.newButton = $("#new-story-action");
    this.newButton.button().click($.proxy(function() {
      that.propertyPanel.$modal.show('dialog', {
        title : 'New story?',
        text : 'Creating a new story will delete all local data.<br> To save a story upload it. Are you sure?',
        buttons : [
          {
            title : 'Cancel',
            default : true,
            handler : () => {
              that.propertyPanel.$modal.hide('dialog');
            }
          },
          {
            title : 'Delete my unsaved project',
            default : false,
            handler : () => {
              that.propertyPanel.$modal.hide('dialog');
              that.view.newStory();
            }
          }
        ]
      });
    }, this));

    this.loadButton = $("#load-story-action");
    this.loadButton.button().click($.proxy(function() {
      that.loadStories();
    }, this));

    this.removeButton = $("#remove-story-action");
    this.removeButton.button().click($.proxy(function() {
      that.propertyPanel.$modal.show('dialog', {
        title : 'Remove story?',
        text : 'This will remove the story from the storybook (server).<br> Are you sure?',
        buttons : [
          {
            title : 'Cancel',
            default : true,
            handler : () => {
              that.propertyPanel.$modal.hide('dialog');
            }
          },
          {
            title : 'Remove my story from the server',
            default : false,
            handler : () => {
              that.propertyPanel.$modal.hide('dialog');
              that.removeStory(that.view.projectData.id, true);
            }
          }
        ]
      });
    }, this));

    this.editButton = $("#edit-story-action");
    this.editButton.button().click($.proxy(function() {
      let root = this.view.lastRoot;
      if (root === null) {
        root = this.view.addRoot(375, 75);
      }
      this.view.setCurrentSelection(root);
      this.propertyPanel.selected = root;
      this.propertyPanel.state = "node";
    }, this));

    this.uploadButton = $("#upload-story-action");
    this.uploadButton.button().click($.proxy(function() {
      that.propertyPanel.$modal.show('dialog', {
        title : 'Upload story?',
        text : 'This will upload the story to the storybook (server).<br>All mod user will be able to see the story.',
        buttons : [
          {
            title : 'Cancel',
            default : true,
            handler : () => {
              that.propertyPanel.$modal.hide('dialog');
            }
          },
          {
            title : 'Upload',
            default : false,
            handler : () => {
              that.propertyPanel.$modal.hide('dialog');
              that.addStory();
              console.debug(this.view.toJSON());
            }
          }
        ]
      });
    }, this));

    this.infoButton = $("#info-story-action");
    this.infoButton.button().click($.proxy(function() {
      this.view.setCurrentSelection(new draw2d.util.ArrayList());
      this.propertyPanel.state = "info";
    }, this));
  },

  /**
   * @method
   * Called if the selection in the cnavas has been changed. You must register this
   * class on the canvas to receive this event.
   *
   * @param {draw2d.Canvas} emitter
   * @param {Object} event
   * @param {draw2d.Figure} event.figure
   */
  onSelectionChanged : function(emitter, event) {
    this.deleteButton.button("option", "disabled", !this.viableDeleteSelection() > 0);
    this.copyButton.button("option", "disabled", !this.viableDeleteSelection() > 0);
  },

  /**
   * @method
   * Returns the number of deletable objects that are selected.
   */
  viableDeleteSelection : function() {
    let count = 0;
    // for (let i = 0, il = this.view.getSelection().getSize(); i < il; i++) {
    this.view.selection.each((i, e) => {
      if (e instanceof Event) {
        if (e.isRoot) {
          return;
        }
      }
      count++;
    });
    // }
    return count;
  },
  /**
   * @method
   * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail()
   * can be used to identify the type of event which has occurred.
   *
   * @template
   *
   * @param {draw2d.command.CommandStackEvent} event
   **/
  stackChanged : function(event) {
    this.undoButton.button("option", "disabled", !event.getStack().canUndo());
    this.redoButton.button("option", "disabled", !event.getStack().canRedo());
  },

  loadStories : function() {
    const id = this.user.id;
    const that = this;
    $.ajax({
      url : '/storybook/story/creator/' + id,
      dataType : 'json',
      type : 'GET',
      success : function(data) {
        that.propertyPanel.selected = data;
        that.propertyPanel.state = "stories";
      },
      error : function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
        that.errorMessage("Trying to load story of user " + id + ", " + errorThrown);
      }
    });
  },

  removeStory : function(id, removeLocal = false) {
    const that = this;
    if (id === null) {
      this.popupMessage("This project has not been uploaded so it can't be removed.<br>To remove the local changes use the 'New story' button.");
      return;
    }
    $.ajax({
      url : '/story/' + id,
      type : 'DELETE',
      success : function(data) {
        if (removeLocal) {
          that.view.newStory();
        } else {
          that.loadStories();
        }
      },
      error : function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
        that.errorMessage("Trying to remove story " + id + ", " + errorThrown);
      }
    });
  },

  loadStory : function(id) {
    const that = this;
    if (id === null) {
      this.errorMessage("This story has no id.");
      return;
    } else if (id === -1) {
      that.view.loadStory({
        id : null, name : "The very first story!", description : "About a princess and - i am a programmer not a story writer oke?", publish : false, storyline : {
          "name" : "The very first story!",
          "description" : "About a princess and - i am a programmer not a story writer oke?",
          "story" : [{
            "uuid" : "root",
            "name" : "",
            "left" : {"offset" : 0, "uuid" : "500a7e13-50a7-81b1-634f-2293f3ca1cf8"},
            "right" : null,
            "x" : 375,
            "y" : 75,
            "incident" : {"type" : "Nothing", "letter" : {"show" : false}},
            "storage" : []
          }, {
            "uuid" : "500a7e13-50a7-81b1-634f-2293f3ca1cf8",
            "name" : "Nothing",
            "left" : {"offset" : 1, "uuid" : "e888ac78-b499-e101-4b9f-94fe0f1c4892"},
            "right" : null,
            "x" : 350,
            "y" : 200,
            "incident" : {
              "type" : "Nothing",
              "letter" : {
                "show" : true,
                "type" : "PositiveEvent",
                "title" : "Demo",
                "message" : "Every story has a timeline with events.\nThis event only has a message connected.\nThe next one will be a RAID D:",
                "shake" : false,
                "force" : true
              }
            },
            "conditions" : [],
            "storage" : []
          }, {
            "uuid" : "97efb26e-4bc7-0486-4245-b4940c62b26a",
            "name" : "Raid",
            "left" : {"offset" : 5, "uuid" : "3907b029-4a61-a8f6-c1f4-792fa15f76a6"},
            "right" : null,
            "x" : 356,
            "y" : 431,
            "incident" : {
              "type" : "RaidEnemy",
              "letter" : {
                "show" : true,
                "type" : "ThreatBig",
                "shake" : true,
                "force" : false,
                "title" : "Raid with params",
                "message" : "This raid has additional parameters ( like x2 strength & spawning in center of the map, good luck ;) )\nI added some battle music, enjoy!"
              },
              "Points" : "2",
              "Strategy" : "ImmediateAttackSappers",
              "ArriveMode" : "CenterDrop",
              "Names" : ["bert", "birt", "bort", "burt", "bart", "jan", "jon", "jin", "jun", "jen"]
            },
            "conditions" : [],
            "storage" : []
          }, {
            "uuid" : "3907b029-4a61-a8f6-c1f4-792fa15f76a6",
            "name" : "Dialog",
            "left" : {"offset" : 0, "uuid" : "6b2700d0-ee3a-b3a7-e542-18d2dd131110"},
            "right" : {"offset" : 5, "uuid" : "46e437ac-acff-2f72-9a38-7fc5249e1d53"},
            "x" : 356,
            "y" : 511,
            "incident" : {
              "type" : "Dialog",
              "letter" : {"show" : true, "type" : "NeutralEvent", "title" : "O my, a choice?", "message" : "The timeline can split depending on a user action!"},
              "Duration" : "0.05"
            },
            "conditions" : [{"type" : "Dialog", "response" : "Accepted"}],
            "storage" : []
          }, {
            "uuid" : "6b2700d0-ee3a-b3a7-e542-18d2dd131110",
            "name" : "Meteorite",
            "left" : {"offset" : 1, "uuid" : "ce5ab06a-6267-f06b-4269-38c5b3857f48"},
            "right" : null,
            "x" : 287,
            "y" : 605,
            "incident" : {
              "type" : "MeteoriteImpact",
              "letter" : {"show" : true, "type" : "NeutralEvent", "title" : "You accepted", "message" : "Have some meteorites"},
              "MineableRock" : "MineableGold",
              "Amount" : "4"
            },
            "conditions" : [],
            "storage" : []
          }, {
            "uuid" : "46e437ac-acff-2f72-9a38-7fc5249e1d53",
            "name" : "Cold snap/Heat wave",
            "left" : {"offset" : 1, "uuid" : "ce5ab06a-6267-f06b-4269-38c5b3857f48"},
            "right" : null,
            "x" : 408,
            "y" : 607,
            "incident" : {
              "type" : "TempFlux",
              "letter" : {"show" : true, "type" : "NegativeEvent", "title" : "You declined D:", "message" : "Have a cold snap of -50", "shake" : true, "force" : false},
              "Duration" : "3",
              "TempChange" : "-50"
            },
            "conditions" : [],
            "storage" : []
          }, {
            "uuid" : "ce5ab06a-6267-f06b-4269-38c5b3857f48",
            "name" : "Research",
            "left" : null,
            "right" : null,
            "x" : 369,
            "y" : 707,
            "incident" : {
              "type" : "Research",
              "letter" : {
                "show" : true,
                "type" : "NeutralEvent",
                "title" : "That was my small demo",
                "message" : "Now go to http://storyteller.keyboxsoftware.nl to create your own story!"
              },
              "Projects" : ["ShipBasics"]
            },
            "conditions" : [],
            "storage" : []
          }, {
            "uuid" : "D__e888ac78-b499-e101-4b9f-94fe0f1c4892",
            "name" : "DIVIDER",
            "left" : {"offset" : 0, "uuid" : "405f4b6c-96ff-cecc-3e57-36e5e8043eec"},
            "right" : {"offset" : 0, "uuid" : "97efb26e-4bc7-0486-4245-b4940c62b26a"},
            "x" : 363,
            "y" : 296,
            "incident" : {"type" : "Nothing", "letter" : {"show" : false}},
            "storage" : []
          }, {
            "uuid" : "405f4b6c-96ff-cecc-3e57-36e5e8043eec",
            "name" : "Play audio",
            "left" : null,
            "right" : null,
            "x" : 236,
            "y" : 430,
            "incident" : {"type" : "PlayAudio", "letter" : {"show" : true, "type" : "Default"}, "Author" : "FunWithSound", "File" : "369/369251_6456158-lq.mp3", "IsSong" : true},
            "conditions" : [],
            "storage" : []
          }]
        }
      });
      return;
    }
    $.ajax({
      url : '/storybook/story/' + id,
      type : 'GET',
      success : function(data) {
        that.view.loadStory(data);
      },
      error : function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
        that.errorMessage("Trying to load story " + id + ", " + errorThrown);
      }
    });
  },

  addStory : function() {
    const that = this;
    $.ajax({
      url : '/story',
      dataType : 'json',
      type : 'POST',
      data : this.view.saveStory(),
      success : function(data) {
        if (data.id !== undefined) {
          that.view.projectData.id = data.id;
        }
      },
      error : function(jqXhr, textStatus, errorThrown) {
        if (jqXHR.status === 403) {
          this.popupMessage("Story limit reached. Remove an old story (right side in the load list) or request a limit increase: niek@keyboxsoftware.nl");
          return;
        }
        console.log(errorThrown);
        that.errorMessage("Trying to add/update story " + that.view.projectData.id + ", " + errorThrown);
      }
    });
  },

  popupMessage : function(message) {
    const that = this;
    this.propertyPanel.$modal.show('dialog', {
      title : 'Message',
      text : message,
      buttons : [
        {
          title : 'Ok',
          default : true,
          handler : () => {
            that.propertyPanel.$modal.hide('dialog');
          }
        }
      ]
    });
  },

  errorMessage : function(message) {
    const that = this;
    this.propertyPanel.$modal.show('dialog', {
      title : 'Error :(',
      text : 'Please send the following to niek@keyboxsoftware.nl: <br>' + message,
      buttons : [
        {
          title : ':(',
          default : true,
          handler : () => {
            that.propertyPanel.$modal.hide('dialog');
          }
        }
      ]
    });
  }
});