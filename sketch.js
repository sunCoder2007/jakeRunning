var path,boy, leftBoundary,rightBoundary;
var  backGround1;
var jake, jake_running, path

function preload(){
  //loadImage of the path
  backGround1 = loadImage("path.png");
  

  //loadAnimation of the boy
  jake_running = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.png", "jake5.png" );
}

function setup(){
  
  createCanvas(400,400);
  //create sprite for the path 
  //add image for the path
  path = createSprite(200,200,150,400);
  path.addImage("path", backGround1 );
   

  //Make the track a moving background by giving velocity Y.
  path.scale=1.2;
  path.velocitY=4;


//create a boy sprite
  jake = createSprite(200, 100, 40, 40);

//add animation for the boy
  jake.scale=0.8;
  jake.addAnimation("jakeRunning", jake_running);
  

// create left Boundary
  leftBoundary=createSprite(0,0,100,800);
//set visibility as false for left boundary
  leftBoundary.visible = false; 

  //create right Boundary
  rightBoundary=createSprite(410,0,100,800);
//set visibility as false for left boundary`
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  jake.X = World.mouseX;
  edges= createEdgeSprites();
  jake.collide(edges[3]);
  // collide the boy with the left and right invisible boundaries.
  
  jake.collide(rightBoundary)
  jake.collide(leftBoundary)
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
