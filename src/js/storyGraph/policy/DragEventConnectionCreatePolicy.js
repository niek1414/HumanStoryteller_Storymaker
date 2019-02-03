import draw2d from 'draw2d';
import RouteConnection from "../shape/RouteConnection";

export default draw2d.policy.connection.DragConnectionCreatePolicy.extend({
    /**
     * @constructor
     *
     * Creates a new connection create policy instance
     */
    init: function(attr, setter, getter)
    {
        draw2d.policy.connection.DragConnectionCreatePolicy.prototype.init.call(this, attr, setter, getter);
    },

    /**
     * @method
     *
     * @param {draw2d.Canvas} canvas
     * @param {Number} x the x-coordinate of the mouse down event
     * @param {Number} y the y-coordinate of the mouse down event
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     */
    onMouseDown: function(canvas, x, y, shiftKey, ctrlKey)
    {
        draw2d.policy.connection.DragConnectionCreatePolicy.prototype.onMouseDown.call(this, canvas, x, y, shiftKey, ctrlKey);
    },

    /**
     * @method
     *
     * @param {draw2d.Canvas} canvas
     * @param {Number} dx The x diff between start of dragging and this event
     * @param {Number} dy The y diff between start of dragging and this event
     * @param {Number} dx2 The x diff since the last call of this dragging operation
     * @param {Number} dy2 The y diff since the last call of this dragging operation
     * @template
     */
    onMouseDrag: function(canvas, dx, dy, dx2, dy2, shiftKey, ctrlKey)
    {
        draw2d.policy.connection.DragConnectionCreatePolicy.prototype.onMouseDrag.call(this, canvas, dx, dy, dx2, dy2, shiftKey, ctrlKey);
    },


    /**
     * @method
     *
     * @param {draw2d.Figure} figure the shape below the mouse or null
     * @param {Number} x the x-coordinate of the mouse down event
     * @param {Number} y the y-coordinate of the mouse down event
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     */
    onMouseUp: function(canvas, x, y, shiftKey, ctrlKey)
    {
        if (this.mouseDraggingElement !== null) {

            var de = this.mouseDraggingElement;
            var ct = this.currentTarget;
            // start CommandStack transaction
            canvas.getCommandStack().startTransaction();

            de.onDragEnd(x, y, shiftKey, ctrlKey);
            // notify all installed policies
            //
            if(ct){
                de.editPolicy.each(function(i,e){
                    if(e instanceof draw2d.policy.port.PortFeedbackPolicy){
                        e.onHoverLeave(canvas, de, ct);
                    }
                });
            }

            de.editPolicy.each(function(i,e){
                if(e instanceof draw2d.policy.figure.DragDropEditPolicy){
                    e.onDragEnd(canvas, de, x, y, shiftKey, ctrlKey);
                }
            });

            // Reset the drag&drop flyover information
            //
            this.currentTarget = null;
            de.isInDragDrop =false;

            // fire an event
            // @since 5.3.3
            de.fireEvent("dragend",{x:x, y:y, shiftKey:shiftKey, ctrlKey:ctrlKey});


            // check if we drop the port onto a valid
            // drop target and create a connection if possible
            //
            if (this.currentDropTarget !== null) {
                this.mouseDraggingElement.onDrop(this.currentDropTarget, x, y, shiftKey, ctrlKey);

                this.currentDropTarget.onDragLeave(this.mouseDraggingElement);
                this.currentDropTarget.fireEvent("dragLeave", {draggingElement: this.mouseDraggingElement});

                // Ports accepts only Ports as DropTarget
                //
                if(this.currentDropTarget instanceof draw2d.Port){
                    var request = new draw2d.command.CommandType(draw2d.command.CommandType.CONNECT);
                    request.source = this.currentDropTarget;
                    request.target = this.mouseDraggingElement;
                    var command = this.mouseDraggingElement.createCommand(request);

                    if(command!==null){
                        //First remove old connections from the source
                        const conn = command.source.getConnections();
                        for (let i = 0; i < conn.getSize(); ++i) {
                            this.canvas.remove(conn.get(i))
                        }

                        command.setConnection(this.createConnection());
                        canvas.getCommandStack().execute(command);
                        this.currentDropTarget.onCatch(this.mouseDraggingElement, x, y, shiftKey, ctrlKey);

                        // command.target


                        // if (command.target instanceof draw2d.InputPort) {
                        //     // This is the difference to the InputPort implementation of createCommand.
                        //     return new draw2d.command.CommandConnect(request.target, request.source, request.source);
                        // }
                        // else if (command.target instanceof draw2d.OutputPort) {
                        //     // This is the different to the OutputPort implementation of createCommand
                        //     return new draw2d.command.CommandConnect(request.source, request.target, request.source);
                        // }
                        // else if (command.target instanceof draw2d.HybridPort) {
                        //     // This is the different to the OutputPort implementation of createCommand
                        //     return new draw2d.command.CommandConnect(request.target,request.source, request.source);
                        // }
                    }
                }
            }

            // end command stack trans
            canvas.getCommandStack().commitTransaction();
            this.currentDropTarget = null;
            this.mouseDraggingElement = null;
        }
    },

    createConnection : function(sourcePort, targetPort) {
        var conn = new RouteConnection();
        // conn.setRouter(this.defaultRouter);
        // conn.setOutlineStroke(1);
        // conn.setOutlineColor("#303030");
        // conn.setSourceDecorator(new draw2d.decoration.connection.ArrowDecorator());
        // conn.setStroke(3);
        // conn.setRadius(8);
        // conn.setDraggable(false);
        // conn.setColor('#00A8F0');
        if (sourcePort) {
            conn.setSource(sourcePort);
            conn.setTarget(targetPort);
        }
        return conn;
    },
});

