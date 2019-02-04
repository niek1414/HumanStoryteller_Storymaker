import 'babel-polyfill'
import '../style/app.css';

import StoryGraph from './storyGraph/storyGraph';
import Toolbar from "./storyGraph/Toolbar";

import Event from "./storyGraph/shape/Event"

// import Vue from 'vue/dist/vue.js';
import Vue from 'vue'
import PropertyPanel from "./propertyWindow/PropertyPanel";
import DetailPanel from "./propertyWindow/DetailPanel";
import EditorInfo from "./propertyWindow/EditorInfo";
import StoriesPanel from "./propertyWindow/StoriesPanel";
import 'vuetify/dist/vuetify.min.css'

import VModal from 'vue-js-modal'
import Vuetify from 'vuetify'
import DividerPanel from "./propertyWindow/DividerPanel";

window.onbeforeunload = function(){
  return 'All unsaved changes will be discarded!';
};

// Vue.directive('ripple', Ripple);
Vue.use(Vuetify, {theme: {primary: '#65b9ff'}});
Vue.use(VModal, { dialog: true });

const canvas = new StoryGraph("story-canvas", 2000, 4000);
const propertyPanel = new Vue({
  el: "#event-panel",
  data: {
    selected : null,
    state : "info",
    graph : canvas,
    toolbar : null
  },
  methods: {
    selectionChanged: function () {
      const selectionList = canvas.getSelection();
      if (selectionList.getSize() === 1){
        const item = canvas.getSelection().getPrimary();
        if (item instanceof Event) {
          this.selected = item;
          this.state = "node";
        }
      } else {
        this.selected = null;
        this.state = "info";
      }
    },
  },
  components : {PropertyPanel, EditorInfo, DetailPanel, StoriesPanel, DividerPanel}
});
const toolbar = new Toolbar(canvas, propertyPanel);
propertyPanel.toolbar = toolbar;

canvas.on("select", $.proxy(propertyPanel.selectionChanged, this));
canvas.on("unselect", $.proxy(propertyPanel.selectionChanged, this));

