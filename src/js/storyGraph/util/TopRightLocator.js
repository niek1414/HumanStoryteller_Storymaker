import draw2d from "draw2d";

export default draw2d.layout.locator.Locator.extend({
  NAME : "draw2d.layout.locator.TopRightLocator",

  /**
   * @constructor
   *
   *
   */
  init : function(x, y) {
    this._super()

    this.x = x
    this.y = y
  },

  /**
   * @method
   * Relocates the given Figure.
   *
   * @param {Number} index child index of the target
   * @param {draw2d.Figure} target The figure to relocate
   **/
  relocate : function(index, target) {
    var parent = target.getParent()
    var boundingBox = parent.getBoundingBox()

    var targetBoundingBox = target.getBoundingBox()
    target.setPosition(boundingBox.w - this.x, this.y)
  }
})
