var torreImg,torre;
var portaImg,porta,grupoPorta;
function preload(){
torreImg = loadImage('tower.png');
portaImg = loadImage('door.png');
grupoPorta = new Group();
}

function setup() {
 createCanvas(600,600);
 torre=createSprite(300,300);
 torre.addImage('torre',torreImg);
 torre.velocityY = 1 

}

function draw() {
 background(0)
 if(torre.y > 400){
    torre.y = 300
 }
drawSprites();
criaPortas();
}
function criaPortas(){
    if(frameCount % 240 == 0){
     var   porta = createSprite(200,-50);
     porta.addImage(portaImg)
     porta.x = Math.round(random(120,400))
     porta.velocityY = 1
     porta.lifetime = 800
     grupoPorta.add(porta);
    }
}






