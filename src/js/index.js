import 'babel-polyfill'
import '../style/app.css';

import StoryGraph from './storyGraph/storyGraph';
import Toolbar from "./storyGraph/Toolbar";
import Event from "./storyGraph/shape/Event"

import Vue from 'vue'
import VueTutorial from 'vue'
import PropertyPanel from "./propertyWindow/PropertyPanel";
import DetailPanel from "./propertyWindow/DetailPanel";
import EditorInfo from "./propertyWindow/EditorInfo";
import StoriesPanel from "./propertyWindow/StoriesPanel";
import 'vuetify/dist/vuetify.min.css'

import VModal from 'vue-js-modal'
import Vuetify from 'vuetify'
import DividerPanel from "./propertyWindow/DividerPanel";
import ConnectionPanel from "./propertyWindow/ConnectionPanel";
import RouteConnection from "./storyGraph/shape/RouteConnection";
import BasicTutorial from "./tutorial/BasicTutorial";
import IntermediateTutorial from "./tutorial/IntermediateTutorial";
import ExpertTutorial from "./tutorial/ExpertTutorial";

ajaxCache();

window.onbeforeunload = function() {
  return 'All unsaved changes will be discarded!';
};
Vue.prototype.window_portal = window;
Vue.use(Vuetify, {theme : {primary : '#65b9ff'}});
VueTutorial.use(Vuetify, {theme : {primary : '#65b9ff'}});
Vue.use(VModal, {dialog : true});
window.tutorial = 0;

const infoBar = $("#info-bottom");
const canvas = new StoryGraph("story-canvas", 2000, 4000);
const propertyPanel = new Vue({
  el : "#event-panel",
  data : {
    selected : null,
    state : "info",
    graph : canvas,
    toolbar : null,
  },
  methods : {
    selectionChanged : function() {
      const selectionList = canvas.getSelection();
      if (selectionList.getSize() === 1) {
        const item = canvas.getSelection().getPrimary();
        if (item instanceof Event) {
          this.selected = item;
          this.state = "node";
        } else if (item instanceof RouteConnection) {
          this.selected = item;
          this.state = "connection"
        }
      } else {
        this.selected = null;
        this.state = "info";
      }
      updateInfoBar();
    },
  },
  watch : {
    "selected.conditions" : {
      handler() {
        if (window.onStoryEdit !== undefined) {
          window.onStoryEdit(canvas);
        }
      },
      deep : true
    },
    "selected.properties" : {
      handler() {
        if (window.onStoryEdit !== undefined) {
          window.onStoryEdit(canvas);
        }
      },
      deep : true
    },
    "selected.storage" : {
      handler() {
        if (window.onStoryEdit !== undefined) {
          window.onStoryEdit(canvas);
        }
      },
      deep : true
    },
    "selected.type" : {
      handler() {
        if (window.onStoryEdit !== undefined) {
          window.onStoryEdit(canvas);
        }
      },
      deep : true
    },
  },
  components : {PropertyPanel, EditorInfo, DetailPanel, StoriesPanel, DividerPanel, ConnectionPanel}
});

const toolbar = new Toolbar(canvas, propertyPanel);
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
window.updateTutorial = function(num, update = true) {
  if (!update) {
    window.onStoryEdit = undefined;
    window.tutorial = num;
    leftPanel.tutorial = num;
    propertyPanel.$forceUpdate();
    return;
  }
  if (num !== 0) {
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
          }
        }
      ]
    });
  } else {
    window.onStoryEdit = undefined;
    window.tutorial = num;
    leftPanel.tutorial = num;
    propertyPanel.$forceUpdate();
    toolbar.view.newStory();
  }
};

canvas.on("select", $.proxy(propertyPanel.selectionChanged, this));
canvas.on("unselect", $.proxy(propertyPanel.selectionChanged, this));

function updateInfoBar() {
  if (window.onStoryEdit !== undefined) {
    window.onStoryEdit(canvas);
  }
  let storyId;
  if (canvas.projectData.id === null) {
    storyId = "new";
  } else {
    storyId = "#" + canvas.projectData.id;
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

  infoBar.html("Story: " + storyId + "&nbsp;&nbsp;&nbsp;&nbsp;" + nodeId);
}

updateInfoBar();

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

window.LoadStoryJson = function(data) {
  var wrapData = {id : 0,
    name : "Loaded test story",
    description : "This story is loaded through the debug function.",
    publish :  false,
    tutorial : false,
    storyline : data
  };
  toolbar.view.loadStory(wrapData)
};
