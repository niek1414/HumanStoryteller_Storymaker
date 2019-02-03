import draw2d from 'draw2d'

export default draw2d.policy.figure.SelectionFeedbackPolicy.extend({
  init: function (attr, setter, getter) {
    this._super(attr, setter, getter)
  },

  onSelect: function (canvas, figure, isPrimarySelection) {
    figure.setGlow(true);
    // this.moved(canvas, figure);
  },

  onUnselect: function (canvas, figure) {
    this._super(canvas, figure);
    figure.setGlow(false);
  }

});
