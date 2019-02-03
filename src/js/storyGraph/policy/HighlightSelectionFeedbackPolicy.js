import draw2d from 'draw2d'

export default draw2d.policy.line.LineSelectionFeedbackPolicy.extend({
  
  /**
   * @constructor
   * Creates a new selection feedback policy for a line or connection
   */
  init: function (attr, setter, getter) {
    this._super(attr, setter, getter);
    this.originalColor = "";
  },

  onSelect: function (canvas, figure, isPrimarySelection) {
    this.originalColor = figure.getColor();
    figure.setColor("#46b1f9");
  },

  onUnselect: function (canvas, figure) {
    this._super(canvas, figure);
    figure.setColor(this.originalColor);
  }
})
