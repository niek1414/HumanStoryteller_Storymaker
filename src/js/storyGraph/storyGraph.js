import draw2d from 'draw2d';
import Event from './shape/Event'
import EventTypes from './EventTypes'
import EventFeedbackPolicy from "./policy/EventFeedbackPolicy";
import DragEventConnectionCreatePolicy from "./policy/DragEventConnectionCreatePolicy";
import CoronaDragDecorationPolicy from "./policy/CoronaDragDecorationPolicy";
import AddEvent from "./command/AddEvent";
import RouteConnection from "./shape/RouteConnection";
import AddDivider from "./command/AddDivider";

export default draw2d.Canvas.extend({
  init : function(id, w, h) {
    this._super(id, w, h);
    this.projectData = null;
    this.lastRoot = null;

    this.containerModification();
    this.installPolicies();
    this.installFactoryPorts();

    this.newStory();
  },

  newStory : function() {
    this.clear();
    this.projectData = {
      id : null,
      name : "My story",
      description : "Small description explaining stuff... like.. uhm? Difficulty? What? I'am a coder, not a placeholder writer.. -.- ",
      publish : false,
    };

    var conn = new RouteConnection({
      source : this.addRoot(375, 75).getOutputPort(0),
      target : this.addEvent(350, 225, "TraderArrival").getInputPort(0)
    });
    this.add(conn);
  },

  loadStory : function(data, tutorial = false) {
    this.clear();
    this.projectData = {
      id : data.id,
      name : data.name,
      description : data.description,
      publish : data.publish === undefined ? false : data.publish,
      tutorial : tutorial,
    };
    const createdList = [];
    for (const event of data.storyline === undefined ? data.story : data.storyline.story) {
      let created;
      if (event.uuid === "root") {
        delete event.incident.type;
        created = this.addRoot(event.x, event.y, event.incident);
      } else if (event.uuid.startsWith("D__")) {
        created = this.addDivider(event.x, event.y);
        created.setId(event.uuid.substring(3));
      } else {
        const type = event.incident.type;
        delete event.incident.type;
        if (event.incident.letter === undefined) {
          event.incident.letter = {show : true, type : "Default"};
        }
        if (event.storage === undefined) {
          event.storage = [];
        }
        created = this.addEvent(event.x, event.y, type, event.incident, event.conditions, event.storage, true);
        created.setId(event.uuid);
      }

      created.left = {parse : event.left, origin : created.left};
      created.right = {parse : event.right, origin : created.right};
      created.eventName = event.name;
      created.refreshName();
      createdList.push(created);
    }

    for (const created of createdList) {
      created.left = this.loadConnection(created.left.parse, createdList, created, created.left.origin);
      created.right = this.loadConnection(created.right.parse, createdList, created, created.right.origin);
    }
  },

  loadConnection : function(connection, createdList, source, port = false) {
    if (connection !== undefined && connection !== null) {
      for (const created of createdList) {
        if (created.getId() === connection.uuid) {
          let newPort;
          if (port === false) {
            newPort = source.createPort("output", new this.outputPortPos);
          } else {
            newPort = port;
          }
          created.repaint();
          source.repaint();

          this.add(new RouteConnection({
            source : newPort,
            target : created.input,
            offset : parseFloat(connection.offset)
          }));
          return newPort;
        }
      }
    }
    return port === false ? null : port;
  },

  fromDocumentToCanvasCoordinate : function(x, y) {
    const rect = this.paper.canvas.getBoundingClientRect();

    return new draw2d.geo.Point(
      (x - rect.left) * this.zoomFactor,
      (y - rect.top) * this.zoomFactor
    )
  },

  fromCanvasToDocumentCoordinate : function(x, y) {
    const rect = this.paper.canvas.getBoundingClientRect();

    return new draw2d.geo.Point(
      x * (1 / this.zoomFactor) + rect.left,
      y * (1 / this.zoomFactor) + rect.top
    )
  }
  ,

  /**
   * Load the JSON data into the view/canvas
   */
  load : function(jsonDocument) {
    this.view.clear();
    var reader = new draw2d.io.json.Reader();
    reader.unmarshal(this.view, jsonDocument);
  },

  /**
   *
   * @param {draw2d.Figure} figure
   * @param x
   * @param y
   */
  add : function(figure, x, y) {
    draw2d.Canvas.prototype.add.call(this, figure, x, y);
    figure.installEditPolicy(new EventFeedbackPolicy());
  },

  addEvent : function(x, y, type = "", properties = {letter : {show : true, type : "Default"}}, conditions = [], storage = [], createOutputPorts = true) {
    const d = new Event({width : 100, height : 50, x : x, y : y, type : type, properties : properties, conditions : conditions, storage : storage});

    d.input = d.createPort("input", new this.inputPortPos);
    d.left = d.createPort("output", new this.outputPortPos);
    if (conditions.length !== 0 && createOutputPorts) {
      d.right = d.createPort("output", new this.outputPortPos);
    }

    this.add(d);
    return d;
  },

  addRoot : function(x, y, properties = {letter : {show : false}}) {
    const d = new Event({width : 50, height : 50, radius : 100, x : x, y : y, text : "", type : "Root", properties : properties, storage : []});
    d.left = d.createPort("output", new this.outputPortPos);
    d.isRoot = true;
    this.add(d);
    this.lastRoot = d;
    return d;
  },

  addDivider : function(x, y) {
    const d = new Event({
      width : 75,
      height : 50,
      color : "#ba7827",
      radius : 100,
      x : x,
      y : y,
      text : "DIVIDER",
      type : "Nothing",
      properties : {letter : {show : false}},
      storage : []
    });
    d.input = d.createPort("input", new this.inputPortPos);
    d.left = d.createPort("output", new this.outputPortPos);
    d.right = d.createPort("output", new this.outputPortPos);
    d.isDivider = true;
    this.add(d);
    return d;
  },

  /**
   * @method
   * Called if the user drop the droppedDomNode onto the canvas.<br>
   * @param {HTMLElement} droppedDomNode The dropped DOM element.
   * @param {Number} x the x coordinate of the drop
   * @param {Number} y the y coordinate of the drop
   * @param {Boolean} shiftKey true if the shift key has been pressed during this event
   * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
   * @private
   **/
  onDrop : function(droppedDomNode, x, y, shiftKey, ctrlKey) {
    if (droppedDomNode[0].id === "divider-action") {
      this.getCommandStack().execute(new AddDivider(this, x - 50, y - 25));
    } else {
      this.getCommandStack().execute(new AddEvent(this, x - 50, y - 25));
    }
  },

  getVariables : function() {
    const variables = JSON.parse(JSON.stringify(EventTypes.SystemVariables));
    const figures = this.getFigures();
    const figureLength = figures.getSize();
    for (let i = 0; i < figureLength; i++) {
      const item = figures.get(i);
      if (!(item instanceof Event)) {
        continue;
      }
      const l = item.storage.length;
      for (let j = 0; j < l; j++) {
        const s = item.storage[j];
        if (s['Name'] === undefined || !s['Name']){
          continue;
        }
        variables.push(s['Name']);
      }
    }
    return variables;
  },

  toJSON : function() {
    const story = [];
    const data = {name : this.projectData.name, description : this.projectData.description, publish : this.projectData.publish, story : story};
    const figures = this.getFigures();
    const figureLength = figures.getSize();
    for (let i = 0; i < figureLength; i++) {
      const item = figures.get(i);
      if (!(item instanceof Event)) {
        continue;
      }
      story.push(item.toJSON());
    }
    return JSON.stringify(data);
  },

  saveStory : function() {
    let data = {name : this.projectData.name, description : this.projectData.description, publish : this.projectData.publish, data : this.toJSON()};
    if (this.projectData.id != null) {
      data.id = this.projectData.id;
    }
    return data;
  },

  containerModification : function() {
    this.paper.canvas.style.position = "relative";
    this.regionDragDropConstraint = new draw2d.policy.figure.RegionEditPolicy(0, 0, this.initialWidth, this.initialHeight);
    this.setScrollArea($("#story-graph"));
  },

  installPolicies : function() {

    const keyboardPolicy = new draw2d.policy.canvas.DefaultKeyboardPolicy();
    this.uninstallEditPolicy(keyboardPolicy);
    keyboardPolicy.onKeyDown = () => {
    };
    this.installEditPolicy(keyboardPolicy);
    this.installEditPolicy(new draw2d.policy.canvas.DropInterceptorPolicy());
    this.installEditPolicy(new DragEventConnectionCreatePolicy());
    const gridPolicy = new draw2d.policy.canvas.ShowGridEditPolicy(100);
    gridPolicy.setGridColor("#3a3f44");
    this.installEditPolicy(gridPolicy);
    this.installEditPolicy(new CoronaDragDecorationPolicy({diameterToBeVisible : 100}));
  },

  installFactoryPorts : function() {
    draw2d.Configuration.factory = $.extend({}, draw2d.Configuration.factory, {
      // @since 5.3.0
      createInputPort : function(relatedFigure) {
        var p = new draw2d.InputPort({bgColor : "#ff9100", stroke : 0});
        p.useGradient = false;
        return p;
      },
      // @since 5.3.0
      createOutputPort : function(relatedFigure) {
        var p = new draw2d.OutputPort({bgColor : "#ff9100", stroke : 0});
        p.useGradient = false;
        return p;
      },
      // @since 5.3.0
      createHybridPort : function(relatedFigure) {
        var p = new draw2d.HybridPort({bgColor : "#ff9100", stroke : 0});
        p.useGradient = false;
        return p;
      }
    });
    this.inputPortPos = draw2d.layout.locator.PortLocator.extend({
      init : function() {
        this._super();
      },
      relocate : function(index, figure) {
        this.applyConsiderRotation(figure, figure.getParent().getWidth() / 2, 0);
      }
    });
    this.outputPortPos = draw2d.layout.locator.PortLocator.extend({
      init : function() {
        this._super();
      },
      relocate : function(index, figure) {
        const p = figure.getParent();
        const ports = p.getOutputPorts();
        let width = p.getWidth() / 2;

        if (ports.getSize() === 2) {
          if (ports.get(0) === figure) {
            width -= width / 2;
          } else {
            width += width / 2;
          }
        } else if (ports.getSize() !== 1) {
          console.error("Can't have more than 2 outgoing ports");
        }
        this.applyConsiderRotation(figure, width, p.getHeight());
      }
    });
  },

  convertCondition : function(event, intoMulti) {
    if (intoMulti) {
      event.right = event.createPort("output", new this.outputPortPos);
    } else {
      event.removePort(event.right);
      event.right = null;
    }
    event.repaint();
  }
});
