import draw2d from "draw2d";
import StoryGraph from "./storyGraph";
import Math from './util/Math'

export default Class.extend({
    init: function () {
        this.id = null;
        this.name = "My story";
        this.description = "Small description explaining stuff... like.. uhm? Difficulty? What? I'am a coder, not a placeholder writer.. -.- ";
        this.publish = false;
        this.stories = [];
        this.storiesCached = [];
        this.currentStory = null;
        this.tutorial = false;
        this.pack = false;
        this.serverState = null;

        this.onRegisterStory = [];
        this.element = $("#story-graph");
    },

    destroy: function () {
        draw2d.Connection.DROP_FILTER = null;
        this.storiesCached.forEach(story => story.destroy())
        this.id = null;
        this.name = "My story";
        this.description = "Small description explaining stuff... like.. uhm? Difficulty? What? I'am a coder, not a placeholder writer.. -.- ";
        this.publish = false;
        this.stories = [];
        this.storiesCached = [];
        this.currentStory = null;
        this.tutorial = false;
        this.pack = false;
        this.serverState = null;
        this.element.children().remove();
    },

    start: function () {
        if (this.storiesCached.length <= 0) {
            if (this.stories.length <= 0) {
                let uuid = Math.uuidv4();
                this.initGraph(uuid).newGraph();
                this.stories.push({uuid: uuid, graph: []});
            } else {
                this.switchGraph(this.stories[0].uuid);
            }
        }
    },

    //Internal
    initGraph: function (uuid) {
        this.element.append("<div onselectstart=\"javascript:/*IE8 hack*/return false\" class=\"story-canvas\" id=\"story-canvas-" + uuid + "\"></div>");
        const storyGraph = new StoryGraph(uuid, "story-canvas-" + uuid, 3000, 8000);
        this.onRegisterStory.forEach(func => func(storyGraph))
        this.storiesCached.push(storyGraph);
        this.currentStory = storyGraph;
        return storyGraph;
    },

    switchGraph: function (uuid) {
        draw2d.Connection.DROP_FILTER = null;
        for (const graph of this.storiesCached) {
            if (graph.uuid !== uuid) continue;
            this.element.children(":not(#story-canvas-" + uuid + ")").css("display", "none");
            this.element.children("#story-canvas-" + uuid).css("display", "block");
            this.currentStory = graph;
            return;
        }
        for (const story of this.stories) {
            if (story.uuid !== uuid) continue;

            const emptyGraph = this.initGraph(uuid);
            this.element.children(":not(#story-canvas-" + uuid + ")").css("display", "none");
            this.element.children("#story-canvas-" + uuid).css("display", "block");
            emptyGraph.loadGraph(story.graph);
            return;
        }
        console.error("Unable to find story with uuid " + uuid);
    },

    //A tutorial is always only one story
    loadTutorial: function (data) {
        this.destroy();
        this.id = null;
        this.name = data.name;
        this.description = data.description;
        this.publish = false;
        this.tutorial = true;
        this.pack = false;
        this.stories = [{uuid: "tutorial", graph: data.story}];
        this.start();
    },

    loadStory: function (data) {
        this.destroy();
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.publish = data.publish ?? false;
        this.pack = data.pack ?? false;
        this.tutorial = false;
        this.stories = Array.isArray(data.stories) ? data.stories : [];
        this.start();
    },

    saveStory: function (local = false) {
        for (const story of this.stories) {
            for (const cache of this.storiesCached) {
                if (story.uuid !== cache.uuid) continue;
                story.graph = cache.toJSON();
            }
        }

        let data = {
            name: this.name,
            description: this.description,
            publish: this.publish,
            version: window.MOD_VERSION,
            pack: this.pack,
            stories: local ? this.stories : JSON.stringify(this.stories),
        };
        if (this.id != null) {
            data.id = this.id;
        }
        return data;
    },

    //TODO fix get var's from (all stories) json not graph
    getVariables: function() {
        console.warn("TODO")
        return this.currentStory.getVariables();
    },

    //TODO fix get names from (all stories) json not graph
    getNames: function() {
        console.warn("TODO")
        return this.currentStory.getNames();
    },

    //TODO fix get groups from (all stories) json not graph
    getGroups: function() {
        console.warn("TODO")
        return this.currentStory.getGroups();
    },
});