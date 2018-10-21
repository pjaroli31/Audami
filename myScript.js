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
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) - 1);
}

var objectList = {};
var nameObject = 'Z';
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
        
        objectList["circle"] = cir;
        // nameObject = nextChar(nameObject);

    } else if (name == 'square') {
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'green',
            width: value,
            height: value,
            shape: 'rectangle'
        });
        canvas.add(rect);
        console.log(rect.left);
        objectList["square"] = rect;
        // nameObject = nextChar(nameObject);

    } else if (name == 'triangle') {
        var tri = new fabric.Triangle({
            width: 20, 
            height: 30, 
            fill: 'blue', 
            left: 100, 
            top: 100
        });
        canvas.add(tri);
        console.log(tri.left);
        objectList["triangle"] = tri;
        console.log(tri.angle);
        // nameObject = nextChar(nameObject);
    }
    
}

function move_shapes(objectName, direction, value) {
    if (objectName in objectList) {
        var obj = objectList[objectName];
        if (direction == 'left')
            obj.set('left',obj.left - value);
        else if (direction == 'right')
        obj.set('left',obj.left + value);
        else if (direction == 'up')
        obj.set('top',obj.top - value);
        else if (direction == 'down')
        obj.set('top',obj.top + value);
        
        canvas.add(obj)
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
                obj.set('radius',obj.radius / value);
            else
            obj.set('radius', obj.radius * value);
            
        }
        else 
        {
            if(direction=="decrease"){
                obj.set('height',obj.height / value);
                obj.set('width',obj.width / value);
            }
            else{
                obj.set('height',obj.height * value);
                obj.set('width',obj.width * value);
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
        obj.set('fill',colorName);
        canvas.add(obj);
        console.log(obj);
    }
}

function clear_shape(){
    canvas.clear();
    finalString=''
}
function save_shape(){
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    window.location.href=image;
}

function rotate_shape(objName, angleInRad)
{
    var obj = objectList[objName];
    var angle = obj.angle;
    obj.set('angle',angle+angleInRad);
    console.log(angle);
    canvas.add(obj);
}