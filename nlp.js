

var allowed_variable_names = [
    { id: 'circle', text: 'circle' },
    { id: 'square', text: 'square' },
]

function acceptString(test_string){
    if (window.Bravey === undefined) {
        throw "Bravey is not available";
}

    
var nlp = new Bravey.Nlp.Fuzzy();
        
// adding intents one by one

// declare_integer
{
    nlp.addIntent('draw_shape', [
        { entity: 'shape_name', id: 'shape_name' },
        { entity: 'shape_value', id: 'shape_value' },
    ]);

    let shape_name = new Bravey.StringEntityRecognizer('shape_name');

    for (let each of allowed_variable_names) {
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
        'Create a {shape_name} with value {shape_value}',
        'draw_shape'
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