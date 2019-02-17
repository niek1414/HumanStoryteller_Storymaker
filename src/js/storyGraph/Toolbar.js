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
      for (let i = 0; i < l; i++) {
        const item = list.get(i);
        if (!item instanceof Event) {
          continue;
        }
        if (item.isRoot) {
          continue;
        }

        if (item.isDivider){
          view.addDivider(item.x, item.y + 60);
        } else {
          view.addEvent(item.x, item.y + 60, item.type.value.value, JSON.parse(JSON.stringify(item.properties)), JSON.parse(JSON.stringify(item.conditions)), JSON.parse(JSON.stringify(item.storage)));
        }
      }
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
    for (let i = 0, il = this.view.getSelection().getSize(); i < il; i++) {
      this.view.selection.each((i, e) => {
        if (e instanceof Event) {
          if (e.isRoot) {
            return;
          }
        }
        count++;
      })
    }
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