import draw2d from "draw2d";
import HighlightSelectionFeedbackPolicy from "../policy/HighlightSelectionFeedbackPolicy";

export default draw2d.layout.connection.ManhattanConnectionRouter.extend({
  init: function () {
    this._super()
  },

  /**
   * @method
   * Callback method if the router has been assigned to a connection.
   *
   * @param {draw2d.Connection} connection The assigned connection
   * @since 2.7.2
   */
  onInstall: function (connection) {
    connection.installEditPolicy(new HighlightSelectionFeedbackPolicy())
  },

  /**
   * @inheritdoc
   */
  route: function (conn, routingHints) {
    let fromPt = conn.getStartPoint();
    let fromDir = conn.getSource().getConnectionDirection(conn.getTarget());

    let toPt = conn.getEndPoint();
    let toDir = conn.getTarget().getConnectionDirection(conn.getSource());

    // calculate the lines between the two points.
    //
    this._route(conn, fromPt, fromDir, toPt, toDir);

    //
    // // calculate the path string for the SVG rendering
    // //
    // let intersectionsASC = conn.getCanvas().getIntersection(conn).sort("x");
    // let intersectionsDESC = intersectionsASC.clone().reverse();
    //
    // let intersectionForCalc = intersectionsASC;
    //
    //
    // // ATTENTION: we cast all x/y coordinates to int and add 0.5 to avoid subpixel rendering of
    // //            the connection. The 1px or 2px lines look much clearer than before.
    // //
    // let ps = conn.getVertices();
    // let p = ps.get(0);
    // let path = ["M", (p.x), " ", (p.y)];
    // let oldP = p;
    // for (let i = 1; i < ps.getSize(); i++) {
    //   p = ps.get(i);
    //
    //   // check for intersection and paint a bridge if required
    //   // line goes from left to right
    //   //
    //   let bridgeWidth = 5;
    //   let bridgeCode = this.BRIDGE_HORIZONTAL_LR;
    //
    //   // line goes from right->left. Inverse the bridge and the bridgeWidth
    //   //
    //   if (oldP.x > p.x) {
    //     intersectionForCalc = intersectionsDESC;
    //     bridgeCode = this.BRIDGE_HORIZONTAL_RL;
    //     bridgeWidth = -bridgeWidth
    //   }
    //
    //   intersectionForCalc.each(function (ii, interP) {
    //     if (interP.justTouching === false && draw2d.shape.basic.Line.hit(1, oldP.x, oldP.y, p.x, p.y, interP.x, interP.y) === true) {
    //       // we draw only horizontal bridges. Just a design decision
    //       //
    //       if (p.y === interP.y) {
    //         path.push(" L", ((interP.x - bridgeWidth)), " ", (interP.y));
    //         path.push(bridgeCode)
    //       }
    //     }
    //
    //   });
    //
    //   path.push(" L", (p.x), " ", (p.y));
    //   oldP = p
    // }
    // conn.svgPathString = path.join("")
  //   let fromPt = conn.getStartPosition()
  //   let fromDir = conn.getSource().getConnectionDirection(conn.getTarget())
  //
  //   let toPt = conn.getEndPosition()
  //   let toDir = conn.getTarget().getConnectionDirection(conn.getSource())
  //
  //   // calculate the lines between the two points.
  //   //
  //   this._route(conn, fromPt, fromDir, toPt, toDir)
    this._paint(conn)
  }
});
