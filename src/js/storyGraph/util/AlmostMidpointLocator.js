import draw2d from "draw2d";

export default draw2d.layout.locator.ConnectionLocator.extend({
  NAME : "draw2d.layout.locator.ManhattanMidpointLocator",

  init : function() {
    this._super()
  },

  /**
   * @method
   * Relocates the given Figure always in the center of an edge.
   *
   * @param {Number} index child index of the target
   * @param {draw2d.Figure} target The figure to relocate
   **/
  relocate : function(index, target) {
    const points = target.getParent().getVertices();

    let p1 = points.first();
    let p2 = points.last();
    const calcX = p1.x - p2.x;
    const calcY = p1.y - p2.y;
    if (calcY < 80 && calcY >= 0 || calcX < 10 && calcX > -10) {
      target.setPosition(
        ((p2.x - p1.x) / 4 + p1.x - target.getWidth() / 2) | 0,
        ((p2.y - p1.y) / 4 + p1.y - target.getHeight() / 2) | 0
      )
    } else {
      let segmentIndex = Math.floor((points.getSize() - 2) / 2) + 1;
      if (points.getSize() <= segmentIndex + 1) {
        return;
      }
      p1 = points.get(segmentIndex);
      p2 = points.get(segmentIndex + 1);

      target.setPosition(
        ((p2.x - p1.x) / 2 + p1.x - target.getWidth() / 2) | 0,
        ((p2.y - p1.y) / 2 + p1.y - target.getHeight() / 2) | 0
      )
    }

  }
})
