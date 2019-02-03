import draw2d from "draw2d";

export default draw2d.policy.canvas.CoronaDecorationPolicy.extend({
  /**
   * @inheritdoc
   */
  onMouseDrag: function (canvas, dx, dy, dx2, dy2, shiftKey, ctrlKey) {
    canvas.getFigures().each((i, figure) => {
      if (figure instanceof draw2d.shape.node.Node) {
        if (figure.isVisible() === true) {
          figure.getPorts().each((i, p) => {
            if (p.isVisible() === false) {
              p.__origAlpha = figure.getAlpha()
            }
            p.setAlpha(1);
            p.setVisible(true)
          })
        } else {
          figure.getPorts().each((i, p) => {
            if (p.__origAlpha) {
              p.setAlpha(p.__origAlpha);
              delete p.__origAlpha
            }
            p.setVisible(false)
          })
        }
      }
    })
  },
});