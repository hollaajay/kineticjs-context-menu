var stage = new Kinetic.Stage({
    container: 'container',
    x: 10,
    y: 10,
    width: 800,
    height: 200,
});

var layer = new Kinetic.Layer();


var Igpk = new Kinetic.Rect({
    id:'Rect1',
    x: 148,
    y: 32,
    width: 62,
    height: 118,
    fill: 'gold',
    stroke: 'black',
    strokeWidth: 2,
    opacity: 1,
    draggable: false
});

var Itext = new Kinetic.Text({
    x: 148 + 1,
    y: 32,
    text: 'Rectangle1',
    fontSize: 15,
    fontFamily: 'Calibri',
    fill: 'black',
    
});

var IGroup = new Kinetic.Group({});

IGroup.add(Igpk);
IGroup.add(Itext);

var Requestone = new Kinetic.Rect({
    id: 'myRect',
    x: 219,
    y: 28,
    width: 116,
    height: 118,
    fill: '#87cefa',
    stroke: 'black',
    strokeWidth: 2,
    opacity: 1,
    draggable: false
});


var Requestonetext = new Kinetic.Text({
    x: 219 + 1,
    y: 28,
    text: 'Request One',
    fontSize: 15,
    fontFamily: 'Calibri',
    fill: 'black',
    
});

var RequestoneGroup = new Kinetic.Group({});

RequestoneGroup.add(Requestone);
RequestoneGroup.add(Requestonetext); 

RequestoneGroup.on('click', function() {
    console.log("request");
    $.contextMenu('destroy', '#container');
    $.contextMenu({
        selector: '#container',
        items: {
            "RequestoneGroup": {
                name: "RequestoneGroup",
                icon: "edit"
            
                                  }
        }
        
    });
    
});

IGroup.on('click', function() {
    console.log("IGroup");
    $.contextMenu('destroy', '#container');
    $.contextMenu({
        selector: '#container',
        items: {
            "IGroup": {
                name: "IGroup",
                icon: "edit"
            }
        }
    });
});

layer.add(IGroup);
layer.add(RequestoneGroup);
stage.add(layer);
