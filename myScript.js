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

// create a circle object
var cir = new fabric.Circle({
    left: 200,
    top: 100,
    fill: 'red',
    radius: 100
});


function draw_shapes(name, value) {
    if (value == NULL) {
        value = 10;
    }
    if (name == 'circle') {
        var cir = new fabric.Circle({
            left: 100,
            top: 100,
            fill: 'red',
            radius: value
        });
        canvas.add(cir);
    } else if (name == 'square') {
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: value,
            height: value
        });
        canvas.add(rect);
    }

}
// var i;
// var sides = [];
// function draw_polygon(name, n) {
//     for (i = 0; i < n; i++) {
//         sides[i]=n;
//     }
//     left: 100,
//     top: 100,
//     fill: 'red',
// }

// "add" rectangle onto canvas
// canvas.add(rect);
// canvas.add(cir);