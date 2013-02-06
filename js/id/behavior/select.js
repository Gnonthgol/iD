iD.behavior.Select = function(context) {

    var behavior = function(selection) {

        var timeout = null,
            // the position of the first mousedown
            pos = null;

        function click() {
            var datum = d3.select(d3.event.target).datum();
            if (datum instanceof iD.Entity) {
                if (d3.event.shiftKey) {
                    context.enter(iD.modes.Select(context, context.selection().concat([datum.id])));
                } else {
                    context.enter(iD.modes.Select(context, [datum.id]));
                }
            } else if (!d3.event.shiftKey) {
                context.enter(iD.modes.Browse(context));
            }
        }

        selection
            .on('click.select', click);
    };

    behavior.off = function(selection) {
        selection.on('click.select', null);
    };

    return behavior;
};
