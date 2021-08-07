import Event from './shape/Event';
import _ from 'lodash';

export default Class.extend({
  /**
   *
   * @param toolbar, Toolbar
   */
  init : function(toolbar) {
    this.ConnectionStateEnum = Object.freeze({"DISCONNECTED" : 1, "CONNECTING" : 2, "CONNECTED" : 3, "DISCONNECTING" : 4});

    this.toolbar = toolbar;
    this.remoteConnectionState = this.ConnectionStateEnum.DISCONNECTED;
    this.connection = null;

    this.gameData = {
      variables : [],
      maps : [],
      pawnGroups : [],
      pawns : [],
    }
  },

  /**
   * @method
   * Connect to a local game instance
   * Only works for localhost, using a insecure websocket
   */
  startDebugConnection : function() {
    if (this.connection != null) {
      try {
        this.connection.close();
      } catch (e) {
        console.error(e);
      }
    }
    this.connection = new WebSocket("ws://localhost:661");
    this.remoteConnectionState = this.ConnectionStateEnum.CONNECTING;
    this.connection.onerror = ev => {
      console.log(ev);
      this.connection = null;
    };
    this.connection.onclose = ev => {
      this.remoteConnectionState = this.ConnectionStateEnum.DISCONNECTED;
      this.reDistributeRunners([]);
    };
    this.connection.onopen = ev => {
      this.remoteConnectionState = this.ConnectionStateEnum.CONNECTED;
    };
    this.connection.onmessage = ev => {
      this.handleDebugMessage(JSON.parse(ev.data));
    };
  },

  /**
   * @method
   * Handle a message from the websocket
   */
  handleDebugMessage : function(message) {
    switch (message.Type) {
      case "Runners":
        this.reDistributeRunners(message.UuidList);
        break;
      case "DataBanks":
        this.gameData = {
          variables : message.Variables,
          maps : message.Maps,
          pawnGroups : message.PawnGroups,
          pawns : message.Pawns,
        };
        break;
      case "LocationInfo":
        if (window.inputReceiver != null){
          // noinspection TypeScriptValidateTypes
          window.inputReceiver[window.inputReceiverProp] = message.Value;
          window.inputReceiver = null;
          window.inputReceiverRefresh.$forceUpdate();
          this.toolbar.propertyPanel.$modal.hide('dialog');
        } else {
          console.warn("Got a location response from the game but none is listening!")
        }
        break;
    }
  },

  /**
   * @method
   * Reset visual runner-indicators and add new ones
   */
  reDistributeRunners : _.debounce(function(uuidList) {
    const figures = this.toolbar.storyArc.currentStory.getFigures();
    const figureLength = figures.getSize();
    for (let i = 0; i < figureLength; i++) {
      const item = figures.get(i);
      if (!(item instanceof Event)) {
        continue;
      }
      item.resetDebugRunners();
    }
    for (let i = 0; i < figureLength; i++) {
      const item = figures.get(i);
      if (!(item instanceof Event) || !uuidList.includes(item.getId())) {
        continue;
      }
      for (let j = 0; j < uuidList.length; j++) {
        if (uuidList[j] === item.getId()) {
          item.addDebugRunner();
        }
      }
    }
  }, 1000),

  /**
   * @method
   * Request a DataBank event with updated info
   */
  requestDataBankUpdate : function() {
    this.connection.send(JSON.stringify({Type : "UpdateDataBank"}));
  },

  /**
   * @method
   * Request location string
   */
  requestZoneInfo : function() {
    this.connection.send(JSON.stringify({Type : "SendLocationInfo", IsZone : true}));
  },
  /**
   * @method
   * Request structure string
   */
  requestStructureInfo : function() {
    this.connection.send(JSON.stringify({Type : "SendLocationInfo", IsZone : false}));
  },

  /**
   * @method
   * Execute an event with uuid
   */
  executeEvent : function(uuid) {
    this.connection.send(JSON.stringify({Type : "ExecuteEvent", WithRunner: false, Uuid: uuid}));
  },

  /**
   * @method
   * Start a runner from event with uuid
   */
  executeEventsFrom : function(uuid) {
    this.connection.send(JSON.stringify({Type : "ExecuteEvent", WithRunner: true, Uuid: uuid}));
  },

  /**
   * @method
   * Send a message that uploads the current story and reboots the game
   */
  uploadAndReboot : function() {
    this.connection.send(JSON.stringify({Type : "LoadStory", Reboot : true, Story : JSON.stringify(this.getStoryForLocal())}));
  },

  /**
   * @method
   * Send a message that uploads the current story
   */
  uploadAndSync : function() {
    this.connection.send(JSON.stringify({Type : "LoadStory", Reboot : false, Story : JSON.stringify(this.getStoryForLocal())}));
  },

  /**
   * @method
   * Disconnect the websocket
   */
  stopDebugConnection : function() {
    if (this.connection != null) {
      try {
        this.connection.close();
        this.remoteConnectionState = this.ConnectionStateEnum.DISCONNECTING;
        this.reDistributeRunners([]);
      } catch (e) {
        console.error(e);
      }
    }
  },

  /**
   *
   * @returns {{storyline: *, publish, name: *, description}}
   */
  getStoryForLocal : function() {
    const story = this.toolbar.storyArc.saveStory(true);
    story.creator = -1;
    delete story.date;
    return story;
  },
});