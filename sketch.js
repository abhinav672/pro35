var background1;
var ballon;
var ballonposition,database;

function preload(){
  background1=loadImage("Ballon 1.png");
  ballonImage=loadImage("Ballon 4.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1600,900);

  ballon=createSprite(1000,600,5,5);
  ballon.addImage("ballon",ballonImage);
  
  ballonposition=database.ref("ballon/position");
  ballonposition.on("value",readposition,showerror);


}

function draw() {
  background(background1);  

  if(keyDown("up")){
    ballon.scale=ballon.scale -0.1;
    ballon.y=ballon.y-50;
  }
  if(keyDown("down")){
    ballon.scale=ballon.scale +0.1;
    ballon.y=ballon.y+50;
  }
  if(keyDown("left")){
    ballon.scale=ballon.scale;
    ballon.x=ballon.x-50;
  }
  if(keyDown("right")){
    ballon.scale=ballon.scale;
    ballon.x=ballon.x+50;
  }
  drawSprites();
}

function readposition(data){
  position=data.val()
  ballon.x=position.x;
  ballon.y=position.y;

}

function showerror(){
  console.log("value");
}

function changePosition(x,y){
  database.ref("ballon/position").set({
      x:position.x+x,
      y:position.y+y
  })
}
