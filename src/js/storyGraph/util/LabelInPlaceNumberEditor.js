import draw2d from 'draw2d';

export default draw2d.ui.LabelInplaceEditor.extend({
  init : function() {
    this._super();
  },

  start : function(label) {
    if (label.weight >= 0){
      return;
    }
    this.label = label;
    this.commitCallback = this.commit.bind(this);
    $("body").bind("click", this.commitCallback);

    this.html = $('<input id="edit-label" placeholder="Type number of days">');
    this.html.innerText = label.getText();
    this.html.hide();

    $("body").append(this.html);

    this.html.autoResize();

    this.html.bind("keyup", function(e) {
      switch (e.which) {
        case 13:
          this.commit();
          break;
        case 27:
          this.cancel();
          break;
      }
    }.bind(this));

    this.html.bind("blur", this.commitCallback);
    this.html.bind("click", function(e) {
      e.stopPropagation();
      e.preventDefault();
    });

    var canvas = this.label.getCanvas();
    var bb = this.label.getBoundingBox();

    bb.setPosition(canvas.fromCanvasToDocumentCoordinate(bb.x, bb.y));

    var scrollDiv = canvas.getScrollArea();
    if (scrollDiv.is($("body"))) {
      bb.translate(canvas.getScrollLeft(), canvas.getScrollTop());
    }

    bb.translate(-1, -1);
    bb.resize(2, 2);

    this.html.css({position : "absolute", "top" : bb.y, "left" : bb.x, "min-width" : bb.w * (1 / canvas.getZoom()), "height" : Math.max(25, bb.h * (1 / canvas.getZoom()))});
    this.html.fadeIn(() => {
      this.html.focus();
      this.listener.onStart()
    });
  },

  /**
   * @method
   * Transfer the data from the editor into the label.<br>
   * Remove the editor.<br>
   *
   * @private
   */
  commit : function() {
    this.html.unbind("blur", this.commitCallback);
    $("body").unbind("click", this.commitCallback);
    const label = this.html.val();
    const myInt = parseFloat(label);
    if (!isNaN(myInt)) {
      this.label.customWeight = myInt * 100;
      this.label.parent.updateWeight(undefined);
    }
    this.html.fadeOut(() => {
      this.html.remove();
      this.html = null;
      this.listener.onCommit(this.label.getText());
    });
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