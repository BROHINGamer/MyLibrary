var Mobj,Fobj,obj,obj2,obj3;
function setup() {
  createCanvas(800,400);
 /*Mobj= createSprite(600, 200, 100, 50);
 Mobj.shapeColor="green";
 Mobj.debug=true;
 Fobj= createSprite(400, 200, 50, 100);
 Fobj.shapeColor="green";
 Fobj.debug=true;*/

 /*obj= createSprite(100, 100, 50, 50);
 obj.shapeColor="green";
 obj.debug=true;*/
 
 obj2= createSprite(100, 300, 50, 50);
 obj2.shapeColor="green";
 obj2.debug=true;
obj2.velocityX=2;

 obj3= createSprite(600, 300, 50, 50);
 obj3.shapeColor="green";
 obj3.debug=true;
 obj3.velocityX=-2

 /*obj4= createSprite(400, 100, 50, 50);
 obj4.shapeColor="green";
 obj4.debug=true;
 obj4.velocityX=-6;*/
}

function draw() {
  background(255,255,255);
 /* Mobj.x=mouseX;
  Mobj.y=mouseY;
 if( isTouching(Mobj,Fobj)){
  Mobj.shapeColor="red";
   Fobj.shapeColor="red";
 }
 else{
  Mobj.shapeColor="green";
  Fobj.shapeColor="green";
 }*/

bounce(obj2,obj3);
 //bounceOff(obj4,obj);
//  console.log(obj4.velocityX);
 // console.log(Fobj.x);
  //console.log(Fobj.width/2+Mobj.width/2);
  //console.log(Mobj.x-Fobj.x);
  //console.log(Fobj.x-Mobj.x);
  
  drawSprites();
}