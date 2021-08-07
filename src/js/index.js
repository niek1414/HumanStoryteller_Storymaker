import 'babel-polyfill'
import '../style/app.css';

import Toolbar from "./storyGraph/Toolbar";
import Event from "./storyGraph/shape/Event"

import Vue from 'vue'
import VueTutorial from 'vue'
import PropertyPanel from "./propertyWindow/PropertyPanel";
import DetailPanel from "./propertyWindow/DetailPanel";
import HelpPanel from "./propertyWindow/HelpPanel";
import StoriesPanel from "./propertyWindow/StoriesPanel";
import OverviewPanel from "./propertyWindow/OverviewPanel";
import 'vuetify/dist/vuetify.min.css'

import VModal from 'vue-js-modal'
import Vuetify from 'vuetify'
import DividerPanel from "./propertyWindow/DividerPanel";
import ConnectionPanel from "./propertyWindow/ConnectionPanel";
import RouteConnection from "./storyGraph/shape/RouteConnection";
import BasicTutorial from "./tutorial/BasicTutorial";
import IntermediateTutorial from "./tutorial/IntermediateTutorial";
import ExpertTutorial from "./tutorial/ExpertTutorial";
import _ from "lodash";
import StoryArc from "./storyGraph/StoryArc";

ajaxCache();
window.MOD_VERSION = 0.6;

window.onbeforeunload = function() {
  return 'All unsaved changes will be discarded!';
};
window.inputReceiver = null;
window.inputReceiverProp = "";
Vue.prototype.window_portal = window;
Vue.use(Vuetify, {theme : {primary : '#65b9ff'}});
VueTutorial.use(Vuetify, {theme : {primary : '#65b9ff'}});
Vue.use(VModal, {dialog : true});
window.tutorial = 0;

const infoBarRight = $("#info-right");
const infoBarLeft = $("#info-left");
infoBarRight.html("Version: " + window.MOD_VERSION);

const saveIndicator = $("#save-indicator");
const storyArc = new StoryArc();
const propertyPanel = new Vue({
  el : "#event-panel",
  data : {
    selected : null,
    state : "info",
    arc : storyArc,
    toolbar : null,
  },
  methods : {
    selectionChanged : function() {
      if (!storyArc.currentStory) return;
      const selectionList = storyArc.currentStory.getSelection();
      if (selectionList.getSize() === 1) {
        const item = storyArc.currentStory.getSelection().getPrimary();
        if (item instanceof Event) {
          this.selected = item;
          this.state = "node";
        } else if (item instanceof RouteConnection) {
          this.selected = item;
          this.state = "connection"
        }
      } else {
        this.selected = null;
        if (storyArc.id === null) {//TODO pack or no pack
          this.state = "info";
        } else {
          this.state = "overview";
        }
      }
      updateInfoBar();
    },
  },
  watch : {
    "arc.name" : {
      handler() {
        updateInfoBar();
      }
    },
    "arc.description" : {
      handler() {
        updateInfoBar();
      }
    },
    "arc.publish" : {
      handler() {
        updateInfoBar();
      }
    },
    "arc.currentStory" : {
      handler() {
        updateInfoBar();
      }
    },
    "arc.stories.length" : {
      handler() {
        updateInfoBar();
      }
    },
    "selected.customWeight" : {
      handler() {
        updateInfoBar();
      },
    },
    "selected.customSwitch" : {
      handler() {
        updateInfoBar();
      },
    },
    "selected.conditions" : {
      handler() {
        updateInfoBar();
      },
      deep : true
    },
    "selected.properties" : {
      handler() {
        updateInfoBar();
      },
      deep : true
    },
    "selected.storage" : {
      handler() {
        updateInfoBar();
      },
      deep : true
    },
    "selected.type" : {
      handler() {
        updateInfoBar();
      },
      deep : true
    },
  },
  components : {PropertyPanel, HelpPanel, DetailPanel, OverviewPanel, StoriesPanel, DividerPanel, ConnectionPanel}
});

const toolbar = new Toolbar(storyArc, propertyPanel);
propertyPanel.toolbar = toolbar;
window.toolbar = toolbar;

const leftPanel = new VueTutorial({
  el : "#left-panel",
  data : {
    tutorial : 0,
  },
  components : {BasicTutorial, IntermediateTutorial, ExpertTutorial}
});
window.leftPanel = leftPanel;
window.updateTutorial = function(num) {
  if (num > 0) {
    propertyPanel.$modal.show('dialog', {
      title : 'Start tutorial?',
      text : 'Starting a tutorial will delete all local data.<br> To save a story upload it. Are you sure?',
      buttons : [
        {
          title : 'Cancel',
          default : true,
          handler : () => {
            propertyPanel.$modal.hide('dialog');
          }
        },
        {
          title : 'Delete my unsaved project',
          default : false,
          handler : () => {
            window.tutorial = num;
            leftPanel.tutorial = num;
            propertyPanel.$forceUpdate();
            propertyPanel.$modal.hide('dialog');
            propertyPanel.selectionChanged();
          }
        }
      ]
    });
  } else if (num === -1) { //Reset without canvas reset
    num = 0;
    window.onStoryEdit = undefined;
    window.tutorial = num;
    leftPanel.tutorial = num;
  } else {
    window.onStoryEdit = undefined;
    window.tutorial = num;
    leftPanel.tutorial = num;
    storyArc.destroy();
    storyArc.start();
    propertyPanel.$forceUpdate();
    propertyPanel.selectionChanged();
  }
};

const updateInfoBar = _.debounce(() => {
  let storyId;
  if (storyArc.id === null) {
    storyId = "new";
    saveIndicator.hide();
  } else {
    storyId = "#" + storyArc.id;
    saveIndicator.show();
  }

  let nodeId = "";
  if (propertyPanel.state === "node") {
    if (propertyPanel.selected.isRoot) {
      nodeId = "root"
    } else {
      nodeId = propertyPanel.selected.getId();
    }
  }

  if (nodeId.length !== 0) {
    nodeId = "Node: " + nodeId;
  }

  infoBarLeft.html("Story: " + storyId + "&nbsp;&nbsp;&nbsp;&nbsp;" + nodeId);//TODO pack or no pack
  checkForStoryChange();
}, 50);

const checkForStoryChange =
  _.debounce(() => {
    if (window.onStoryEdit !== undefined) {
      window.onStoryEdit(storyArc.currentStory);
    }

    if (JSON.stringify(storyArc.saveStory()) === JSON.stringify(storyArc.serverState)) {
      if (!saveIndicator.hasClass("saved")) {
        saveIndicator.addClass("saved");
        saveIndicator.find("span").html("Story saved");
      }
    } else {
      if (saveIndicator.hasClass("saved")) {
        saveIndicator.removeClass("saved");
        saveIndicator.find("span").html("Story changes not saved");
      }
    }
  }, 1000);

updateInfoBar();

storyArc.onRegisterStory.push((story) => {
  story.on("select", $.proxy(propertyPanel.selectionChanged, this));
  story.on("unselect", $.proxy(propertyPanel.selectionChanged, this));
  story.on("dragend", $.proxy(updateInfoBar, this));
});

storyArc.start();

function ajaxCache() {
  var localCache = {
    /**
     * timeout for cache in millis
     * @type {number}
     */
    timeout : 30000,
    /**
     * @type {{_: number, data: {}}}
     **/
    data : {},
    remove : function(url) {
      delete localCache.data[url];
    },
    exist : function(url) {
      return !!localCache.data[url] && ((new Date().getTime() - localCache.data[url]._) < localCache.timeout);
    },
    get : function(url) {
      console.log('Getting in cache for url' + url);
      return localCache.data[url].data;
    },
    set : function(url, cachedData, callback) {
      localCache.remove(url);
      localCache.data[url] = {
        _ : new Date().getTime(),
        data : cachedData
      };
      if ($.isFunction(callback)) {
        callback(cachedData);
      }
    }
  };

  $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    if (options.cache) {
      var complete = originalOptions.complete || $.noop,
        url = originalOptions.url;
      //remove jQuery cache as we have our own localCache
      options.cache = false;
      options.beforeSend = function() {
        if (localCache.exist(url)) {
          complete(localCache.get(url));
          return false;
        }
        return true;
      };
      options.complete = function(data, textStatus) {
        localCache.set(url, data, complete);
      };
    }
  });
}

//DEBUG
window.LoadStory = function(id) {
  toolbar.loadStory(id)
};

window.LoadStoryJson = function(stories) {
  var wrapData = {
    id : 0,
    name : "Loaded test story",
    description : "This story is loaded through the debug function.",
    publish : false,
    pack : false,
    stories : stories
  };
  storyArc.loadStory(wrapData)
};
