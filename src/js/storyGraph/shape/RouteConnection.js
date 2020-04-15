import draw2d from "draw2d";
import ManhattenInverseRouter from "../util/ManhattenInverseRouter";
import AlmostMidpointLocator from "../util/AlmostMidpointLocator";

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
      radius : 8,
      opacity : 0.8
    });
    this.updateText = null;
    this.customWeight = 0;
    this.customSwitch = false;
    this.label.parent = this;
    this._super(attr, setter, getter);

    this.add(this.label, new AlmostMidpointLocator());
    this.draggable = false;
    this.corona = 0;
    this.attr({
      router : _this.defaultRouter,
      outlineStroke : 4,
      outlineColor : '#2b2b2b',
      stroke : 10,
      radius : 0,
      color : '#2f7cad'
    });
    const color = new draw2d.util.Color(43, 43, 43);
    this.sourceDecorator = new draw2d.decoration.connection.ArrowDecorator(15, 10);
    this.sourceDecorator.backgroundColor = color;

    this.targetDecorator = new draw2d.decoration.connection.CircleDecorator(15, 10);
    this.targetDecorator.backgroundColor = color;
    // this.setSourceDecorator(this.sourceDecorator);
    this.setTargetDecorator(this.targetDecorator);
    if (attr !== undefined && attr.customOffset !== undefined) {
      this.customWeight = attr.customOffset / 1000;
      this.customSwitch = true;
    } else if (attr !== undefined && attr.offset !== undefined && this.targetPort.getAbsoluteY() - this.sourcePort.getAbsoluteY() !== attr.offset / 10) {
      this.customWeight = attr.offset / 1000;
      this.customSwitch = true;
    }
  },

  calculatePath : function(routingHints) {
    this._super(routingHints);
    if (this.updateText != null) {
      clearTimeout(this.updateText);
    }
    this.updateText = setTimeout(this.updateWeight.bind(this), 10);
  },

  updateWeight : function() {
    this.updateText = null;
    if (this.customSwitch) {
      let fullDayAmount = Math.floor(this.customWeight);
      this.setText(fullDayAmount + this.getDayPart((this.customWeight % 1) * 100));
    } else {
      if (this.sourcePort === null || this.targetPort === null) {
        return;
      }
      let weight = this.targetPort.getAbsoluteY() - this.sourcePort.getAbsoluteY();
      if (weight < 0) {
        weight = 0;
      }
      let fullDayAmount = Math.floor(weight / 100);
      this.setText(fullDayAmount + this.getDayPart((weight % 100)));
    }
  },

  setText : function(val) {
    if (val !== this.label.getText()) {
      this.label.setText(val);
      if (val === "0" && this.label.visible){
        this.label.setVisible(false);
      } else if (val !== "0" && !this.label.visible) {
        this.label.setVisible(true);
      }
    }
  },

  getWeight : function() {
    return this.customSwitch ? this.customWeight * 1000 : (this.targetPort.getAbsoluteY() - this.sourcePort.getAbsoluteY()) * 10;
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