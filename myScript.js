// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('myCanvas');

// create a rectangle object
var rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20
});


function listener(entity) {
    if (name == 'circle') {
        canvas.add(rect);
    }
}
// "add" rectangle onto canvas