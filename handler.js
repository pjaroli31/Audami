function listener(result) {
    const intent_map = {
        "draw_shape": draw_shape_listener,
        "move_shape": move_shape_listener
    };

    let intent = result.intent;
    let function_handler = intent_map[intent];
    let entities = {};
    for (let i of result.entities) {
        entities[i.id] = i;
    }

    function_handler(entities)
}

function draw_shape_listener(entities) {
    const shape_name = entities["shape_name"].value
    var shape_value = 10;
    if (entities["shape_value"])
        shape_value = entities["shape_value"].value
        //console.log(shape_value);
    draw_shapes(shape_name, shape_value);
}

function move_shape_listener(entities) {
    const move_name = entities["move_name"].value
    var move_direction = "right"
    var move_value = 10
    if (entities["move_direction"])
        move_direction = entities["move_direction"].value
    if (entities["move_value"])
        move_value = entities["move_value"].value
        //console.log(shape_value);
    move_shapes(move_name, move_direction, move_value);
}