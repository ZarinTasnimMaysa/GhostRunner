var tower,towerImage;
var door,doorImage,doorgroup;
var climber,climberImage,climbergroup;
var invisibleOb,invisibleObgroup;
var ghost,ghostImage;
var gameState='PLAY'

;

function preload(){  
towerImage=loadImage('tower.png');
doorImage=loadImage('door.png');
climberImage=loadImage('climber.png');
ghostImage=loadImage('ghost-standing.png');

}
function setup(){
createCanvas(600,600);

tower=createSprite(300,300,20,600);
tower.addImage('tower',towerImage);
tower.velocityY=1;

ghost=createSprite(300,300,20,20);
ghost.addImage('ghost',ghostImage);
ghost.scale=0.3;

doorgroup=createGroup();
climbergroup=createGroup();
invisibleObgroup=createGroup();

}
function draw(){   
background('white');

if(gameState==='PLAY'){
    if(tower.y>600){
        tower.y=300;
        }
        spawndoors()
        
        if(keyDown('space')){
        ghost.velocityY=-5;
        }
        
        ghost.velocityY=ghost.velocityY+1;
        
        if(keyDown(RIGHT_ARROW)){ 
        ghost.x=ghost.x+3;
        }
        if(keyDown(LEFT_ARROW)){
        ghost.x=ghost.x-3;
        }
        if(ghost.isTouching(climbergroup)){
        ghost.velocityY=0;
        }
if(ghost.y>600||ghost.isTouching(invisibleObgroup)){
gameState='END';
}

drawSprites();
}
if(gameState==='END'){
background('black');
textSize(30);
stroke('Yellow');
fill('yellow');
text('gameOver',250,300)


}




}
function spawndoors(){
if(frameCount%200===0){
door=createSprite(200,-30,10,10);
door.x=Math.round(random(120,400));
door.addImage('door',doorImage);
door.velocityY=1;
door.lifetime=600;
doorgroup.add(door);
ghost.depth=door.depth+1;

climber=createSprite(200,-30,10,10);
climber.x=door.x;
climber.y=door.y+50;
climber.addImage('climber',climberImage);
climber.velocityY=1;
climber.lifetime=600;
climbergroup.add(climber);

invisibleOb=createSprite(200,-30,10,10);
invisibleOb.x=door.x;
invisibleOb.y=climber.y+10;
invisibleOb.velocityY=1;
invisibleOb.lifetime=600;
invisibleObgroup.add(invisibleOb);
invisibleOb.width=climber.width;
invisibleOb.visible=false;

}




}

