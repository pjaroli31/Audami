// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('myCanvas');
canvas.setWidth(780);
canvas.setHeight(500);

// // create a rectangle object
// var rect = new fabric.Rect({
//     left: 100,
//     top: 100,
//     fill: 'red',
//     width: 20,
//     height: 20
// });

// // create a circle object
// var cir = new fabric.Circle({
//     left: 200,
//     top: 100,
//     fill: 'red',
//     radius: 100
// });

var objectList = {};
var circleCount = 0;
var rectCount = 0;

function draw_shapes(name, value) {
    if (value == null) {
        value = 10;
    }
    if (name == 'circle') {
        var cir = new fabric.Circle({
            left: 100,
            top: 100,
            fill: 'red',
            radius: value,
            shape: 'circle'
        });
        console.log(cir);
        canvas.add(cir);
        circleCount = circleCount + 1;
        var str = "dog";
        objectList[str] = cir;

    } else if (name == 'square') {
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: value,
            height: value,
            shape: 'rectangle'
        });
        canvas.add(rect);
        console.log(rect.left);
        rectCount = rectCount + 1;
        var str = "r" + rectCount;
        objectList[str] = rect;
    }

}

function move_shapes(objectName, direction, value) {
    if (objectName in objectList) {
        var obj = objectList[objectName];
        if (direction == 'left')
            obj.left = obj.left - value;
        else if (direction == 'right')
            obj.left = obj.left + value;
        else if (direction == 'up')
            obj.top = obj.top - value;
        else if (direction == 'down')
            obj.top = obj.top + value;
    }
}

function resize_shape(objectName,direction,value)
{
    if(objectName in objectList)
    {
        var obj = objectList[objectName];
        if(obj.type == "circle")
        {
            if(direction=="decrease")
                obj.radius = obj.radius / value;
            else
            obj.radius = obj.radius * value;
            
        }
        else if(obj.type == 'rectangle')
        {
            if(direction=="decrease"){
                obj.height = obj.height / value;
                obj.width = obj.width / value;
            }
            else{
                obj.height = obj.height * value;
                obj.width = obj.width * value;
            }
        }
        canvas.add(obj);
    }
}

function color_shape(objectName,colorName)
{
    if(objectName in objectList)
    {
        var obj = objectList[objectName];
        obj.fill = colorName;
        canvas.add(obj);
        
    }
}
