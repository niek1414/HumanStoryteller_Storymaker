import draw2d from 'draw2d';
import EventTypes from '../EventTypes';

export default draw2d.shape.basic.Rectangle.extend({

  init : function(attr, setter, getter) {
    this.isRoot = false;
    this.isDivider = false;
    this.label = null;
    const found = EventTypes[attr.type];
    this.type = found === undefined ? EventTypes.RaidEnemy : found;
    this.type = {text : this.type.text, value : this.type };
    attr.text = attr.text === undefined ? this.type.text : attr.text;
    this.eventName = attr.text;
    this.conditions = attr.conditions ? attr.conditions : [];
    this.properties = attr.properties ? attr.properties : {};
    this.storage = attr.storage ? attr.storage : [];

    this._super(
      extend({bgColor : "#212533", color : this.type.value.type.color, radius : 4, stroke : 3}, attr),
      extend({}, {
        dash : this.setDashArray,
        dasharray : this.setDashArray,
        label : this.setLabel
      }, setter),
      extend({}, {
        dash : this.getDashArray,
        dasharray : this.getDashArray,
        label : this.getLabel
      }, getter)
    );
    this.minEventWidth = this.getWidth();
    this.maxEventWidth = 200;
    this.setLabel(this.eventName);

    //ports
    this.input = null;
    this.left = null;
    this.right = null;
    this.applyTransformation = function () {
      // let ts = "R" + this.rotationAngle
      //
      // if (this.getRotationAngle() === 90 || this.getRotationAngle() === 270) {
      //   let ratio = this.getHeight() / this.getWidth()
      //   ts = ts + "S" + ratio + "," + 1 / ratio + "," + (this.getAbsoluteX() + this.getWidth() / 2) + "," + (this.getAbsoluteY() + this.getHeight() / 2)
      // }
      //
      // this.shape.transform(ts)

      return this
    };
  },

  setAlpha: function (percent) {
    // percent = Math.min(1, Math.max(0, parseFloat(percent)))
    // if (percent === this.alpha) {
    //   return
    // }
    //
    // this.alpha = percent
    // this.repaint()
    // this.fireEvent("change:opacity", {value: this.alpha})
    //
    return this
  },

  setLabel : function(labelString) {
    if (this.label === null || this.label === undefined) {
      let _this = this;
      this.label = new draw2d.shape.basic.Label({text : labelString, fontSize : 18, color : "#FFFFFF", fontColor : "#FFFFFF", stroke : 0});
      this.label.setFontFamily('"Open Sans",sans-serif');
      this.add(this.label, new draw2d.layout.locator.CenterLocator());
      this.label.setSelectionAdapter(function() {
        return _this
      });
    } else {
      this.updateLabel(labelString);
    }
  },

  updateLabel(content) {
    this.label.setText(content);
    this.setWidth(Math.min(this.maxEventWidth, Math.max(this.minEventWidth, this.label.getWidth())));
  },

  refreshName() {
    this.updateLabel(this.eventName);
  },

  refreshType() {
    if (this.eventName === "" || EventTypes.EventsAsString.indexOf(this.eventName) > -1) {
      this.updateLabel(this.type.value.text);
      this.eventName = this.type.value.text;
    }
    this.properties = {letter : {show : true, type : "Default"}};
    this.setColor(this.type.value.type.color);
  },

  getLabel : function() {
    return this.label;
  },

  /**
   * @method
   * Highlight the element or remove the highlighting
   *
   * @param {Boolean} flag indicates glow/noGlow
   */
  setGlow : function(flag) {

    if (flag === this.glowIsActive) {
      return this;
    }

    this.glowIsActive = flag;
    if (flag === true) {
      this.setBackgroundColor("#404763");
    } else {
      this.setBackgroundColor("#212533");
    }

    return this;
  },

  toJSON : function() {
    const incident = JSON.parse(JSON.stringify(this.properties))
    incident.type = this.type.value.value;

    return {
      uuid : this.isRoot ? "root" : (this.isDivider ? "D__" + this.getId() : this.getId()),
      name : this.eventName,
      left : this.getOutgoingConnectionData(this.left),
      right : this.getOutgoingConnectionData(this.right),
      x : this.x,
      y : this.y,
      incident : incident,
      conditions : this.conditions,
      storage : this.storage
    };
  },

  getOutgoingConnectionData : function(port) {
    let con = null;
    const size = port === null ? 0 : port.getConnections().getSize();
    for (let c = 0; c < size; c++) {
      con = port.getConnections().get(c)
    }
    return con === null ? null : {offset : con.getWeight(), uuid : con.getTarget().parent.getId()};
  }
})
