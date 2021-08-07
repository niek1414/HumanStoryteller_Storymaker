import draw2d from 'draw2d'
import Event from './shape/Event';
import DeleteEvent from "./command/DeleteEvent";
import DebugConnection from "./DebugConnection";
import ShowTransparentGridEditPolicy from "./policy/ShowTransparentGridEditPolicy";

export default Class.extend({
    init: function (storyArc, propertyPanel) {
        const that = this;
        this.storyArc = storyArc;
        this.debug = new DebugConnection(this);
        this.propertyPanel = propertyPanel;
        this.user = null;

        $.ajax({
            url: '/me',
            dataType: 'json',
            type: 'get',
            success: function (data) {
                that.user = data;
                $("#avatar-img").attr("src", that.user.avatar);
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
                that.errorMessage("Trying to get creator info, " + errorThrown);
            }
        });

        storyArc.onRegisterStory.push((story) => {
            story.getCommandStack().on("change", this);
            story.on("select", $.proxy(this.onSelectionChanged, this));
            story.on("unselect", $.proxy(this.onSelectionChanged, this));
        });

        $("#snap-to-grid").change(function () {
            const cs = that.storyArc.currentStory;
            if (this.checked) {
                cs.uninstallEditPolicy(cs.gridPolicy);
                cs.gridPolicy = new draw2d.policy.canvas.SnapToGridEditPolicy(10);
                cs.gridPolicy.renderer = new ShowTransparentGridEditPolicy(cs.gridPolicy.grid);
                cs.installEditPolicy(cs.gridPolicy);
                cs.gridPolicy.renderer.setGridColor("#2f3034");
            } else {
                cs.uninstallEditPolicy(cs.gridPolicy);
                cs.gridPolicy = new ShowTransparentGridEditPolicy(100);
                cs.installEditPolicy(cs.gridPolicy);
                cs.gridPolicy.setGridColor("#3a3f44");
            }
        });

        $("#auto-zero").change(function () {
            window.autoZeroConnection = this.checked;
        });

        this.undoButton = $("#undo-action");
        this.undoButton.button().click($.proxy(function () {
            this.storyArc.currentStory.getCommandStack().undo();
            that.propertyPanel.selectionChanged();
        }, this)).button("option", "disabled", true);

        this.redoButton = $("#redo-action");
        this.redoButton.button().click($.proxy(function () {
            this.storyArc.currentStory.getCommandStack().redo();
            that.propertyPanel.selectionChanged();
        }, this)).button("option", "disabled", true);

        this.deleteButton = $("#delete-action");
        this.deleteButton.button().click($.proxy(function () {
            const list = this.storyArc.currentStory.getSelection().getAll();
            const l = list.getSize();
            for (let i = 0; i < l; i++) {
                const item = list.get(i);
                if (item instanceof Event) {
                    if (item.isRoot) {
                        continue;
                    }
                }
                this.storyArc.currentStory.getCommandStack().execute(new DeleteEvent(item));
                that.propertyPanel.selectionChanged();
            }
        }, this)).button("option", "disabled", true);

        this.copyButton = $("#copy-action");
        this.copyButton.button().click($.proxy(function () {
            const list = this.storyArc.currentStory.getSelection().getAll();
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
                    nextSelection.add(storyArc.currentStory.addDivider(item.x, item.y + 60));
                } else {
                    nextSelection.add(storyArc.currentStory.addEvent(
                        item.x,
                        item.y + 60,
                        item.type.value.value,
                        JSON.parse(JSON.stringify(item.properties)),
                        JSON.parse(JSON.stringify(item.conditions)),
                        JSON.parse(JSON.stringify(item.storage)),
                        true,
                        item.eventName));
                }
            }

            this.storyArc.currentStory.selection.getAll().each((i, e) => {
                this.storyArc.currentStory.editPolicy.each((i, policy) => {
                    if (typeof policy.unselect === "function") {
                        policy.unselect(this.storyArc.currentStory, e)
                    }
                })
            });
            that.propertyPanel.selectionChanged();
            this.storyArc.currentStory.setCurrentSelection(nextSelection);
        }, this)).button("option", "disabled", true);

        this.newButton = $("#new-story-action");
        this.newButton.button().click($.proxy(function () {
            that.propertyPanel.$modal.show('dialog', {
                title: 'New story?',
                text: 'Creating a new story will delete all local data.<br> To save a story upload it. Are you sure?',
                buttons: [
                    {
                        title: 'Cancel',
                        default: true,
                        handler: () => {
                            that.propertyPanel.$modal.hide('dialog');
                        }
                    },
                    {
                        title: 'Delete my unsaved project',
                        default: false,
                        handler: () => {
                            window.updateTutorial(-1);
                            that.propertyPanel.$modal.hide('dialog');

                            setTimeout(() => {
                                that.propertyPanel.$modal.show('dialog', {
                                    title: 'New story?',
                                    clickToClose: false,
                                    text: 'Create a single storyline or a pack of short stories?<br> Single storyline is recommended for your first story.',
                                    buttons: [
                                        {
                                            title: 'Single storyline',
                                            default: true,
                                            handler: () => {
                                                that.loadingMessage();

                                                setTimeout(() => {
                                                    window.updateTutorial(-1);
                                                    that.storyArc.destroy();
                                                    that.storyArc.start();
                                                    that.storyArc.serverState = null;
                                                    that.propertyPanel.selectionChanged();
                                                    that.propertyPanel.$modal.hide('dialog');
                                                }, 100);
                                            }
                                        },
                                        {
                                            title: 'Short story pack',
                                            default: false,
                                            handler: () => {
                                                that.loadingMessage();

                                                setTimeout(() => {
                                                    window.updateTutorial(-1);
                                                    that.storyArc.destroy();
                                                    that.storyArc.pack = true;
                                                    that.storyArc.start();
                                                    that.storyArc.serverState = null;
                                                    that.propertyPanel.selectionChanged();
                                                    that.propertyPanel.$modal.hide('dialog');
                                                }, 100);
                                            }
                                        }
                                    ]
                                });
                            }, 100);
                        }
                    }
                ]
            });
        }, this));

        this.loadButton = $("#load-story-action");
        this.loadButton.button().click($.proxy(function () {
            that.loadStories();
        }, this));

        this.removeButton = $("#remove-story-action");
        this.removeButton.button().click($.proxy(function () {
            if (that.storyArc.tutorial) {
                that.popupMessage("Can't remove a tutorial story");
                return;
            }
            that.propertyPanel.$modal.show('dialog', {
                title: 'Remove story?',
                text: 'This will remove the story from the storybook (server).<br> Are you sure?',
                buttons: [
                    {
                        title: 'Cancel',
                        default: true,
                        handler: () => {
                            that.propertyPanel.$modal.hide('dialog');
                        }
                    },
                    {
                        title: 'Remove my story from the server',
                        default: false,
                        handler: () => {
                            that.propertyPanel.$modal.hide('dialog');
                            that.removeStory(that.storyArc.id, true);
                        }
                    }
                ]
            });
        }, this));

        this.editButton = $("#edit-story-action");
        this.editButton.button().click($.proxy(function () {
            let root = this.storyArc.currentStory.lastRoot;
            if (root === null) {
                root = this.storyArc.currentStory.addRoot(375, 75);
            }
            this.storyArc.currentStory.setCurrentSelection(root);
            this.propertyPanel.selected = root;
            this.propertyPanel.state = "node";
        }, this));

        this.uploadButton = $("#upload-story-action");
        this.uploadButton.button().click($.proxy(function () {
            if (that.storyArc.tutorial) {
                that.popupMessage("Can't upload a tutorial story");
                return;
            }
            that.propertyPanel.$modal.show('dialog', {
                title: 'Upload story?',
                text: 'This will upload the story to the storybook (server).<br>All mod user will be able to see the story.',
                clickToClose: false,
                buttons: [
                    {
                        title: 'Cancel',
                        default: true,
                        handler: () => {
                            that.propertyPanel.$modal.hide('dialog');
                        }
                    },
                    {
                        title: 'Upload',
                        default: false,
                        handler: () => {
                            that.propertyPanel.$modal.hide('dialog');
                            that.addStory();
                        }
                    }
                ]
            });
        }, this));

        this.infoButton = $("#info-story-action");
        this.infoButton.button().click($.proxy(function () {
            this.storyArc.currentStory.setCurrentSelection(new draw2d.util.ArrayList());
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
    onSelectionChanged: function (emitter, event) {
        this.deleteButton.button("option", "disabled", !this.viableDeleteSelection() > 0);
        this.copyButton.button("option", "disabled", !this.viableDeleteSelection() > 0);
    },

    /**
     * @method
     * Returns the number of deletable objects that are selected.
     */
    viableDeleteSelection: function () {
        let count = 0;
        this.storyArc.currentStory.selection.each((i, e) => {
            if (e instanceof Event) {
                if (e.isRoot) {
                    return;
                }
            }
            count++;
        });
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
    stackChanged: function (event) {
        this.undoButton.button("option", "disabled", !event.getStack().canUndo());
        this.redoButton.button("option", "disabled", !event.getStack().canRedo());
        if (window.onStoryEdit !== undefined) {
            window.onStoryEdit(this.storyArc.currentStory);
        }
    },

    loadStories: function () {
        const id = this.user.id;
        const that = this;
        $.ajax({
            url: '/storybook/story/creator/' + id,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                that.propertyPanel.selected = data;
                that.propertyPanel.state = "stories";
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
                that.errorMessage("Trying to load story of user " + id + ", " + errorThrown);
            }
        });
    },

    removeStory: function (id, removeLocal = false) {
        const that = this;
        if (id === null) {
            this.popupMessage("This project has not been uploaded so it can't be removed.<br>To remove the local changes use the 'New story' button.");
            return;
        } else if (that.storyArc.tutorial) {
            that.popupMessage("Can't remove a tutorial story");
            return;
        }
        $.ajax({
            url: '/story/' + id,
            type: 'DELETE',
            success: function (data) {
                if (removeLocal) {
                    that.storyArc.destroy();
                    that.storyArc.start();
                    that.storyArc.serverState = null;
                    that.propertyPanel.selectionChanged();
                } else {
                    that.loadStories();
                }
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
                that.errorMessage("Trying to remove story " + id + ", " + errorThrown);
            }
        });
    },

    loadStory: function (id) {
        const that = this;
        if (id === null) {
            this.errorMessage("This story has no id.");
            return;
        } else if (id === -1) {
            window.updateTutorial(-1);
            that.storyArc.loadStory(exampleStory);
            return;
        }
        $.ajax({
            url: '/storybook/story/' + id,
            type: 'GET',
            success: function (data) {
                that.loadingMessage();

                setTimeout(() => {
                    window.updateTutorial(-1);
                    that.storyArc.loadStory(data);
                    that.storyArc.serverState = that.storyArc.saveStory();
                    that.propertyPanel.selectionChanged();
                    that.propertyPanel.$modal.hide('dialog');
                }, 100);
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
                that.errorMessage("Trying to load story " + id + ", " + errorThrown);
            }
        });
    },

    addStory: function () {
        if (this.storyArc.tutorial) {
            this.popupMessage("Can't upload a tutorial story");
            return;
        }
        const that = this;
        const storyData = this.storyArc.saveStory();
        console.debug(storyData);

        $.ajax({
            url: '/story',
            dataType: 'json',
            type: 'POST',
            data: storyData,
            success: function (data) {
                if (data.id !== undefined) {
                    that.storyArc.serverState = storyData;
                    that.storyArc.id = data.id;
                }
                that.storyArc.serverState = storyData;
                that.propertyPanel.selectionChanged();
            },
            error: function (jqXhr, textStatus, errorThrown) {
                if (jqXhr.status === 403) {
                    that.popupMessage("Story limit reached. Remove an old story (right side in the load list) or request a limit increase: niek@keyboxsoftware.nl");
                    return;
                }
                console.log(errorThrown);
                that.errorMessage("Trying to add/update story " + that.storyArc.id + ", " + errorThrown);
            }
        });
    },

    popupMessage: function (message) {
        const that = this;
        this.propertyPanel.$modal.show('dialog', {
            title: 'Message',
            text: message,
            buttons: [
                {
                    title: 'Ok',
                    default: true,
                    handler: () => {
                        that.propertyPanel.$modal.hide('dialog');
                    }
                }
            ]
        });
    },

    loadingMessage: function () {
        this.propertyPanel.$modal.show('dialog', {
            title: 'Loading..',
            text: 'Depending on the story size, this may take a bit...',
            buttons: [
                {
                    title: 'Cancel',
                    default: false,
                    handler: () => {
                    }
                }
            ]
        });
    },

    errorMessage: function (message) {
        const that = this;
        this.propertyPanel.$modal.show('dialog', {
            title: 'Error :(',
            text: 'Please send the following to niek@keyboxsoftware.nl: <br>' + message,
            buttons: [
                {
                    title: ':(',
                    default: true,
                    handler: () => {
                        that.propertyPanel.$modal.hide('dialog');
                    }
                }
            ]
        });
    }
});

const exampleStory = {
    id: null,
    name: "The very first story!",
    description: "About a princess and - i am a programmer not a story writer oke?",
    publish: false,
    stories: [{
        "uuid": "a",
        "graph": [{
            "uuid": "root",
            "name": "",
            "left": {"offset": 0, "uuid": "b6e61e78-5c0b-8132-c5a7-cad77acc1eb4"},
            "right": null,
            "x": 371,
            "y": 63,
            "incident": {
                "letter": {"show": false},
                "Target": {},
                "OverrideMapGen": true,
                "PawnAmount": "1",
                "Opening": "<p>Welcome, this is a short demo for a subset of features for the <strong>HumanStoryteller </strong>mod.</p>",
                "Seed": "HumanStoryteller",
                "type": "LongEntry"
            },
            "conditions": [],
            "storage": []
        }, {
            "uuid": "500a7e13-50a7-81b1-634f-2293f3ca1cf8",
            "name": "Radio message",
            "left": {"offset": 10, "uuid": "e888ac78-b499-e101-4b9f-94fe0f1c4892"},
            "right": null,
            "x": 330,
            "y": 274,
            "incident": {
                "Target": {"CustomTarget": "Preset", "TargetPreset": "FirstOfPlayer"},
                "letter": {
                    "show": true,
                    "type": "PositiveEvent",
                    "title": "<p>Demo</p>",
                    "message": "<p>Every story has a timeline with events. This event only has a message connected. <br>The next one will be a <font size=\"6\">RAID!</font></p>"
                },
                "Name": "firstPawn",
                "Message": "<p>Let me introduce, i am <span>@firstPawn:FullName</span>.<br>But you can call me <span>@firstPawn:ShortName</span>!</p>",
                "type": "RadioMessage"
            },
            "conditions": [],
            "storage": []
        }, {
            "uuid": "97efb26e-4bc7-0486-4245-b4940c62b26a",
            "name": "Raid",
            "left": {"offset": 10, "uuid": "3907b029-4a61-a8f6-c1f4-792fa15f76a6"},
            "right": null,
            "x": 352,
            "y": 508,
            "incident": {
                "letter": {
                    "show": true,
                    "type": "ThreatBig",
                    "shake": true,
                    "force": false,
                    "title": "Raid with params",
                    "message": "This raid has additional parameters ( like x2 strength & spawning in center of the map, good luck ;) )\nI added some battle music, enjoy!"
                },
                "Points": "2",
                "Strategy": "ImmediateAttackSappers",
                "ArriveMode": "CenterDrop",
                "Names": ["bert", "birt", "bort", "burt", "bart", "jan", "jon", "jin", "jun", "jen"],
                "Target": {"CustomTarget": "Preset", "TargetPreset": "FirstOfPlayer"},
                "type": "RaidEnemy"
            },
            "conditions": [],
            "storage": []
        }, {
            "uuid": "3907b029-4a61-a8f6-c1f4-792fa15f76a6",
            "name": "Dialog",
            "left": {"offset": 0, "uuid": "6b2700d0-ee3a-b3a7-e542-18d2dd131110"},
            "right": {"offset": 5, "uuid": "46e437ac-acff-2f72-9a38-7fc5249e1d53"},
            "x": 353,
            "y": 590,
            "incident": {
                "letter": {
                    "show": true,
                    "type": "NeutralEvent",
                    "title": "<p>O my, a <strong>choice</strong>?</p>",
                    "message": "<p>The timeline can split depending on a user action!<br>Will you <em>accept</em>?</p>",
                    "force": true
                },
                "Duration": "0.004",
                "Target": {"CustomTarget": "Preset", "TargetPreset": "FirstOfPlayer"},
                "type": "Dialog"
            },
            "conditions": [{"type": "Dialog", "response": "Accepted"}],
            "storage": []
        }, {
            "uuid": "6b2700d0-ee3a-b3a7-e542-18d2dd131110",
            "name": "Meteorite",
            "left": {"offset": 10, "uuid": "ce5ab06a-6267-f06b-4269-38c5b3857f48"},
            "right": null,
            "x": 283,
            "y": 685,
            "incident": {
                "letter": {
                    "show": true,
                    "type": "NeutralEvent",
                    "title": "You accepted",
                    "message": "Have some meteorites"
                },
                "MineableRock": "MineableGold",
                "Amount": "6",
                "Target": {"CustomTarget": "Preset", "TargetPreset": "FirstOfPlayer"},
                "type": "MeteoriteImpact"
            },
            "conditions": [],
            "storage": []
        }, {
            "uuid": "46e437ac-acff-2f72-9a38-7fc5249e1d53",
            "name": "Cold snap/Heat wave",
            "left": {"offset": 10, "uuid": "ce5ab06a-6267-f06b-4269-38c5b3857f48"},
            "right": null,
            "x": 404,
            "y": 686,
            "incident": {
                "letter": {
                    "show": true,
                    "type": "NegativeEvent",
                    "title": "You declined D:",
                    "message": "Have a cold snap of -50",
                    "shake": true,
                    "force": false
                },
                "Duration": "3",
                "TempChange": "-50",
                "Target": {"CustomTarget": "Preset", "TargetPreset": "FirstOfPlayer"},
                "type": "TempFlux"
            },
            "conditions": [],
            "storage": []
        }, {
            "uuid": "ce5ab06a-6267-f06b-4269-38c5b3857f48",
            "name": "Planetkiller",
            "left": null,
            "right": null,
            "x": 366,
            "y": 786,
            "incident": {
                "Target": {"CustomTarget": "Preset", "TargetPreset": "FirstOfPlayer"},
                "letter": {
                    "show": true,
                    "type": "ThreatBig",
                    "title": "<p>This was the small demo</p>",
                    "message": "<p>Now go to <em>https://storytellertest.keyboxsoftware.nl/ </em>to create your own stories!</p>",
                    "force": true
                },
                "type": "Planetkiller"
            },
            "conditions": [],
            "storage": []
        }, {
            "uuid": "D__e888ac78-b499-e101-4b9f-94fe0f1c4892",
            "name": "DIVIDER",
            "left": {"offset": 0, "uuid": "405f4b6c-96ff-cecc-3e57-36e5e8043eec"},
            "right": {"offset": 0, "uuid": "97efb26e-4bc7-0486-4245-b4940c62b26a"},
            "x": 359,
            "y": 374,
            "incident": {"letter": {"show": false}, "Target": {}, "type": "Nothing"},
            "conditions": [],
            "storage": []
        }, {
            "uuid": "405f4b6c-96ff-cecc-3e57-36e5e8043eec",
            "name": "Play audio",
            "left": null,
            "right": null,
            "x": 232,
            "y": 508,
            "incident": {
                "letter": {"show": true, "type": "Default"},
                "Author": "FunWithSound",
                "File": "369/369251_6456158-lq.mp3",
                "IsSong": true,
                "Target": {"CustomTarget": "Preset", "TargetPreset": "FirstOfPlayer"},
                "type": "PlayAudio"
            },
            "conditions": [],
            "storage": []
        }, {
            "uuid": "b6e61e78-5c0b-8132-c5a7-cad77acc1eb4",
            "name": "Rename pawn",
            "left": {"offset": 0, "uuid": "500a7e13-50a7-81b1-634f-2293f3ca1cf8"},
            "right": null,
            "x": 332,
            "y": 173,
            "incident": {
                "Target": {"CustomTarget": "Preset", "TargetPreset": "FirstOfPlayer"},
                "letter": {"show": true, "type": "Default"},
                "Pawns": {"Filters": [], "Source": {}},
                "UnnamedColonist": true,
                "OutName": "firstPawn",
                "type": "RenamePawn"
            },
            "conditions": [],
            "storage": []
        }]
    }]
};
