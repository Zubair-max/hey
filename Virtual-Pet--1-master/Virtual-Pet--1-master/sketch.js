//Create variables here
var dog  
var dog1 
var database 
var foodS 
var foodStock  

function preload(){
  
    //load images here
    dog1 = loadImage("images/dogImg.png");
    dog2 = loadImage("images/dogImg1.png");
}
fedTime= database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
}

  


function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(200,300,20,10)
  dog.addImage(dog1)
  foodStock = database.ref("food");
  foodStock.on("value",readStock);
  
  
  
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog2);
}
  drawSprites();
  //add styles here
textSize(20);
fill("blue");
stroke(20);
text("foodRemaining"+ foodS,170,200) 
textSize (13)
text("press Up_ARROW", 130,10,300,20)
}
function addFood

function readStock(data)  {
foodS=data.val();
}

function writeStock(x)  {
if(x<=0){
  x=0
}else{
  x=x-1
}
  database.ref('/').update({
    Food:x
  })
}



