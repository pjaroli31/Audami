

var allowed_shape_names = [
    { id: 'circle', text: 'circle' },
    { id: 'square', text: 'square' },
]


// var allowed_move_names = [
    
//     { id: 'shape', text: 'shape' },
// ]
var allowed_move_directions = [
    { id: 'up', text: 'up' },
    { id: 'down', text: 'down' },
    { id: 'left', text: 'left' },
    { id: 'right', text: 'right' },
]



function acceptString(test_string){
    if (window.Bravey === undefined) {
        throw "Bravey is not available";
}
//test_string='Move c1 right by 2'
   
var nlp = new Bravey.Nlp.Fuzzy();
        
// adding intents one by one

// draw shapes
{
    nlp.addIntent('draw_shape', [
        { entity: 'shape_name', id: 'shape_name' },
        { entity: 'shape_value', id: 'shape_value' },
    ]);

    let shape_name = new Bravey.StringEntityRecognizer('shape_name');

    for (let each of allowed_shape_names) {
        shape_name.addMatch(each.id, each.text)
    }
    nlp.addEntity(shape_name);

    let shape_value = new Bravey.NumberEntityRecognizer('shape_value');
    nlp.addEntity(shape_value);

    // train with some examples
    nlp.addDocument(
        'Draw a {shape_name} with value {shape_value}',
        'draw_shape'
    );

    nlp.addDocument(
        'Create a {shape_name} of value {shape_value}',
        'draw_shape'
    );

    // test it
   // showResults(nlp.test('draw circle please'));
   showResults(nlp.test(test_string));

}


// movement
{
    nlp.addIntent('move_shape', [
        { entity: 'move_name', id: 'move_name' },
       // { entity: 'move_index', id: 'move_index' },
        { entity: 'move_direction', id: 'move_direction' },
        { entity: 'move_value', id: 'move_value' }
    ]);

    let move_name = new Bravey.StringEntityRecognizer('move_name');

    // for (let each of allowed_move_names) {
    //     move_name.addMatch(each.id, each.text)
    // }
    Object.keys(objectList).forEach(function(key){
        move_name.addMatch(key,key);
        console.log(key);
    });
    nlp.addEntity(move_name);

    // let move_index = new Bravey.NumberEntityRecognizer('move_index');
    // nlp.addEntity(move_index);

    let move_direction = new Bravey.StringEntityRecognizer('move_direction');

    for (let each of allowed_move_directions) {
        move_direction.addMatch(each.id, each.text)
    }
    
    nlp.addEntity(move_direction);

    let move_value = new Bravey.NumberEntityRecognizer('move_value');
    nlp.addEntity(move_value);
    // train with some examples
    nlp.addDocument(
        'Move {move_name}{move_direction} by {move_value}',
        'move_shape'
    );

    nlp.addDocument(
        'Shift {move_name}{move_direction}  by {move_value}',
        'move_shape'
    );

    // test it
   // showResults(nlp.test('draw circle please'));
   showResults(nlp.test(test_string));

}
}

function showResults(result) {
    if (result) {
        // for (let entity of result.entities) {
        //     console.log(entity);
        //     listener(entity);
        // }
        console.log(result);
        listener(result);
    } else {
        console.log('something failed here')
    }
}