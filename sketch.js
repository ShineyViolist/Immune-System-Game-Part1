var panel1,panel2,object1;

var object = [];
var index = 0;

function setup() {
  createCanvas(displayWidth,displayHeight - 200);
  panel1 = createSprite(300, (displayHeight - 200)/2, 500, 400);
  panel1.shapeColor = "red";
  //object1 = createSprite(panel1.x - 150,panel1.y - 100,50,50);
  for(var i = 150; i >= -200; i = i - 100){
    object[index] = new Cell(panel1,i);
    index++;
  }
}

function draw() {
  background("green");
  for(j = 0; j < object.length; j++){
    object[j].pressedOver();  
    object[j].letGo();
  }

  drawSprites();
}