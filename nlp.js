
var allowed_shape_names = [
    { id: 'circle', text: 'circle' },
    { id: 'square', text: 'square' },
    { id: 'triangle', text: 'triangle'}
]


var allowed_move_directions = [
    { id: 'up', text: 'up' },
    { id: 'up', text: 'above' },
    { id: 'down', text: 'down' },
    { id: 'down', text: 'below' },
    { id: 'left', text: 'left' },
    { id: 'left', text: 'backward' },
    { id: 'left', text: 'backwards' },
    { id: 'right', text: 'right' },
    { id: 'right', text: 'forward' },
    { id: 'right', text: 'forwards' }
]
var allowed_color_values = [
    { id: 'red', text: 'red' },
    { id: 'yellow', text: 'yellow' },
    { id: 'green', text: 'green' },
    { id: 'black', text: 'black' },
    { id: 'blue', text: 'blue' },
]

var allowed_resize_directions = [
    { id: 'increase', text: 'increase' },
    { id: 'increase', text: 'enhance' },
    { id: 'increase', text: 'bigger' },
    { id: 'increase', text: 'big' },
    { id: 'increase', text: 'large' },
    { id: 'increase', text: 'larger' },
    { id: 'decrease', text: 'decrease' },
    { id: 'decrease', text: 'reduce' },
    { id: 'decrease', text: 'decrease' },
    { id: 'decrease', text: 'smaller' },
    { id: 'decrease', text: 'small' }
]

function acceptString(test_string){
    if (window.Bravey === undefined) {
        throw "Bravey is not available";
}

   
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

    

}


// movement
{
    nlp.addIntent('move_shape', [
        { entity: 'move_name', id: 'move_name' },
        { entity: 'move_direction', id: 'move_direction' },
        { entity: 'move_value', id: 'move_value' }
    ]);

    let move_name = new Bravey.StringEntityRecognizer('move_name');

    
    Object.keys(objectList).forEach(function(key){
        move_name.addMatch(key,key);
        console.log(key);
   });
    nlp.addEntity(move_name);

    

    let move_direction = new Bravey.StringEntityRecognizer('move_direction');

    for (let each of allowed_move_directions) {
        move_direction.addMatch(each.id, each.text)
    }
    
    nlp.addEntity(move_direction);

    let move_value = new Bravey.NumberEntityRecognizer('move_value');
    nlp.addEntity(move_value);
    // train with some examples
    nlp.addDocument(
        'Move {move_name} to the {move_direction} by {move_value}',
        'move_shape'
    );

    nlp.addDocument(
        'Shift {move_name} {move_direction}  by {move_value}',
        'move_shape'
    );

            
}

// resize
{
    nlp.addIntent('resize_shape', [
        { entity: 'resize_name', id: 'resize_name' },
        { entity: 'resize_direction', id: 'resize_direction' },
        { entity: 'resize_value', id: 'resize_value' }
    ]);

    let resize_name = new Bravey.StringEntityRecognizer('resize_name');

    
    Object.keys(objectList).forEach(function(key){
        resize_name.addMatch(key,key);
        console.log(key);
   });
    nlp.addEntity(resize_name);

    

    let resize_direction = new Bravey.StringEntityRecognizer('resize_direction');

    for (let each of allowed_resize_directions) {
        resize_direction.addMatch(each.id, each.text)
    }
    
    nlp.addEntity(resize_direction);

    let resize_value = new Bravey.NumberEntityRecognizer('resize_value');
    nlp.addEntity(resize_value);
    // train with some examples
    nlp.addDocument(
        '{resize_direction} size of {resize_name} by {resize_value}',
        'resize_shape'
    );

    nlp.addDocument(
        'Change size of {resize_name} to {resize_value} times {resize_direction}',
        'resize_shape'
    );
    
    nlp.addDocument(
        'Resize the {resize_name} by {resize_value} times',
        'resize_shape'
    );
            
}


// rotate
{
    nlp.addIntent('rotate_shape', [
        { entity: 'rotate_name', id: 'rotate_name' },
       { entity: 'rotate_value', id: 'rotate_value' }
    ]);

    let rotate_name = new Bravey.StringEntityRecognizer('rotate_name');

    
    Object.keys(objectList).forEach(function(key){
        rotate_name.addMatch(key,key);
        console.log(key);
   });
    nlp.addEntity(rotate_name);

    

    let rotate_value = new Bravey.NumberEntityRecognizer('rotate_value');
    nlp.addEntity(rotate_value);
    // train with some examples
    nlp.addDocument(
        'Rotate the {rotate_name} by {rotate_value} radians',
        'rotate_shape'
    );

    nlp.addDocument(
        'Rotate {rotate_name} by {rotate_value} degrees',
        'rotate_shape'
    );  
            
}
// fill color
{
    nlp.addIntent('color_shape', [
        { entity: 'color_name', id: 'color_name' },
        { entity: 'color_value', id: 'color_value' }
    ]);

    let color_name = new Bravey.StringEntityRecognizer('color_name');

    
    Object.keys(objectList).forEach(function(key){
        color_name.addMatch(key,key);
        console.log(key);
   });
    nlp.addEntity(color_name);

    let color_value = new Bravey.StringEntityRecognizer('color_value');

    for (let each of allowed_color_values) {
        color_value.addMatch(each.id, each.text)
    }
    nlp.addEntity(color_value);

    //train with some examples
    nlp.addDocument(
        'Fill color of {color_name} by {color_value}',
        'color_shape'
    );

    nlp.addDocument(
        'Change the color of {color_name} to {color_value}',
        'color_shape'
    );
    nlp.addDocument(
        'Paint {color_name} {color_value}',
        'color_shape'
    );
   
            
}
{
    nlp.addDocument('Clear canvas','clear_shape',{ fromFullSentence: true, expandIntent: true });
    nlp.addDocument('Clear the screen','clear_shape',{ fromFullSentence: true, expandIntent: true });
}

{
    nlp.addDocument('Save file','save_shape',{ fromFullSentence: true, expandIntent: true });
    nlp.addDocument('Save the screen','save_shape',{ fromFullSentence: true, expandIntent: true });
}

    showResults(nlp.test(test_string));
}

function showResults(result) {
    if (result) {
        
        console.log(result);
        listener(result);
    } else {
        console.log('something failed here')
    }
}