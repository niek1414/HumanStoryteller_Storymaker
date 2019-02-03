import draw2d from "draw2d";
import ManhattenInverseRouter from "../util/ManhattenInverseRouter";
import AlmostMidpointLocator from "../util/AlmostMidpointLocator";
import LabelInPlaceNumberEditor from "../util/LabelInPlaceNumberEditor";

export default draw2d.Connection.extend({
  NAME : "sankey.shape.Connection",

  init : function(attr, setter, getter) {
    const _this = this;
    this.defaultRouter = new ManhattenInverseRouter();
    this.label = new draw2d.shape.basic.Label({
      text : "",
      bgColor : "#20262c",
      fontColor : "#FFFFFF",
      stroke : 2,
      radius : 8
    });
    this.label.weight = -1;
    this.label.parent = this;
    this._super(attr, setter, getter);

    this.add(this.label, new AlmostMidpointLocator());
    this.label.installEditor(new LabelInPlaceNumberEditor());
    this.draggable = false;
    this.setWidth(this.getWidth() + 100);
    this.setHeight(this.getHeight() + 100);
    this.corona = 0;
    this.attr({
      router : _this.defaultRouter,
      outlineStroke : 4,
      outlineColor : '#2b2b2b',
      stroke : 15,
      radius : 0,
      color : '#2f7cad'
    });
    this.setSourceDecorator(new draw2d.decoration.connection.ArrowDecorator());
    if (attr !== undefined && attr.offset !== undefined && this.targetPort.getAbsoluteY() - this.sourcePort.getAbsoluteY() !== attr.offset){
      this.label.customWeight = attr.offset;
      this.setWeight(undefined);
    } else {
      this.label.customWeight = -1;
    }
  },

  calculatePath : function(routingHints) {
    if (this.sourcePort === null || this.targetPort === null) {
      return this
    }
    const weight = this.targetPort.getAbsoluteY() - this.sourcePort.getAbsoluteY();
    if (this.label.weight !== weight) {
      this.setWeight(weight);
    }
    this._super(routingHints);
  },

  setWeight : function(weight) {
    if (weight === undefined){
      weight = this.label.weight;
    }
    if (weight < 0 && this.label.customWeight !== -1) {
      let fullDayAmount = Math.floor(this.label.customWeight / 100);
      this.setText(fullDayAmount + this.getDayPart((this.label.customWeight % 100)));
    } else if (weight < 0) {
      this.setText("Double click to set");
    } else {
      let fullDayAmount = Math.floor(weight / 100);
      this.setText(fullDayAmount + this.getDayPart((weight % 100)));
    }
    this.label.weight = weight;
  },

  setText : function(val) {
    if (val !== this.label.getText()) {
      this.label.setText(val);
    }
  },

  getWeight : function() {
    return this.label.weight >= 0 ? this.label.weight : this.label.customWeight;
  },

  getDayPart : function(procent) {
    if (procent < 10) {
      return "";
    } else if (procent < 35) {
      return "¼";
    } else if (procent < 65) {
      return "½";
    }
    return "¾"
  }
});