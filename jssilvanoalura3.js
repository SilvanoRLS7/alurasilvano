let costas1, costas2;
let quieto, farra1, farra2;
let olhando, gameover;
let estaBaguncando=false;
let situacao="olhando";
let proximaAlteracao=0;
let giz, grito;

function preload() {
  costas1 = loadImage("costas1.jpg");
  costas2 = loadImage("costas2.jpg");
  quieto = loadImage("quieto.jpg");
  farra1 = loadImage("farra1.jpg");
  farra2 = loadImage("farra2.jpg");
  olhando = loadImage("olhando.jpg");
  gameover = loadImage("gameover.jpg");
  giz=loadSound("giz.mp3");
  grito=loadSound("grito.mp3");
  giz.setLoop(true);
  grito.setLoop(true);
}

function setup() {
  createCanvas(1024, 576);
  
}
function troca(){
  if(situacao==="olhando"){
    situacao="nao olhando";
    giz.play();
  }else{
    giz.pause();
    situacao="olhando";
  }
  proximaAlteracao=millis()+random(2500,7000);
}
function draw() {
  if(millis()>proximaAlteracao){
    troca();
  }
  if(situacao==="olhando"){
    image(olhando,0,0)
  }else{
    let tempo = millis() % 1000;
    if (tempo > 500) {
      image(costas2, 0, 0);
    } else {
      image(costas1, 0, 0);
    }
  }

  if (mouseIsPressed || touches.length > 0 || keyIsPressed) {
    if(estaBaguncando===false){
      grito.play();
      estaBaguncando=true;
    }
    if(situacao==="olhando"){
      image(gameover,0,0);
    }
    let tempo = millis() % 500;
    if (tempo > 250) {
      image(farra1, 50, 420, 100, 160, 180, 100, 450, 720);
    } else {
      image(farra2, 50, 420, 100, 160, 180, 100, 450, 720);
    }
    tempo = millis() % 800;
    if (tempo > 400) {
      image(farra1, 150, 420, 100, 160, 180, 100, 450, 720);
    } else {
      image(farra2, 150, 420, 100, 160, 180, 100, 450, 720);
    }
    tempo = millis() % 600;
    if (tempo > 300) {
      image(farra1, 250, 420, 100, 160, 180, 100, 450, 720);
    } else {
      image(farra2, 250, 420, 100, 160, 180, 100, 450, 720);
    }
    if(situacao==="olhando"){
      textSize(64);
      fill("blue");
      textAlign(CENTER,CENTER);
      text("GAMEOVER",width/2,height/2);
      giz.stop();
      grito.stop();
      noLoop();
    }
  } else {
    grito.pause();
    estaBaguncando=false;
    image(quieto, 50, 420, 100, 160, 180, 100, 450, 720);
    image(quieto, 150, 420, 100, 160, 180, 100, 450, 720);
    image(quieto, 250, 420, 100, 160, 180, 100, 450, 720);
  }
}