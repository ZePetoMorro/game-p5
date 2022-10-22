//Video resumido da explicação:(8 minutos)
//https://youtu.be/yIWnpZQ_aOo

//Video explicando os menus:(DETALHANDO 40 MINUTOS)
//https://youtu.be/zRs3chFlEoo

var score = 0;
var vidas = 3;
var gameOverr = false

const player = { color: "", name:"", bg:"", bgColor:"", num:0, cor1:"",cor2:"",cor3:"",cor4:"",cor5:"",cor6:""};
var pNum = 0;
var plX = 300;
var plY = 340;
var pWidth = 30;
var pHeight = 60;
var bow = false;

var enemyX = 820;
var enemyY = 200;
var eWidth = 30;
var eHeight = 60;
var eSpeed = 4;

var baseX =0;
var baseY =150;

var tirosX = []
var tirosY = []
var hitBoxX=0;
var hitBoxY=0;
var tirosW=48;
var tirosH=14;
var qtdTiros=1;

var jogoRodando = true;
var gameover = false;

var tela = 0
var ultTela = 0

var isMobile = window.orientation > -1;

var canhoto=false;

function preload(){
  fundo1=loadImage('imagens/fundo1.png')
  fundo2=loadImage('imagens/fundo2.png')
  fundo3=loadImage('imagens/fundo3.png')
  fundo4=loadImage('imagens/fundo4.png')
  fotoMinha=loadImage('imagens/FotoMinha.png')
  fotoProf=loadImage("imagens/fotoProf.png")
  leagueGothic = loadFont('LeagueGothic.ttf');
  edo=loadFont("edo.ttf")
  fontee=loadFont("ZonaPro-Bold.otf")
}
function setup(){
  
  createCanvas(800, 400);
  rectMode(CENTER);
  textAlign(CENTER);
  start();
  
  
}
function draw() {
  bg()
  switch(tela){
    case 0:
      telaInicial()
      
      break;
    case 1:
      phase1();
      break;
    case 2:
      instrucoes();
      break;
    case 3:
      gameOver();
      break;
    case 4:
      telaPause();
      break;
    case 5:
      menuOpcoes();
      break;
    case 6:
      telaPersonagens();
      break;
      case 7:
      creditos();
  }
  if(gameover==true){
    gameOver();
  }

}

//Condição pra iniciar o jogo
function start(){
  plX = 300;
  plY = 340;
  vidas=3;
  score=0;
  enemyX=810;
  enemyY=random(190,370)
  gameover=false
}

//Pause
function gamePause(){
  
  if(jogoRodando==true){
    jogoRodando=false;
      noLoop()
    }else{
      jogoRodando=true;
      loop()
    }
}

//Função para Fullscreen
function fs(){
  let fsc = fullscreen();
   fullscreen(!fsc);
}
//Funcionamento do Inimigo
function enemy(){
     if(score>=5){
       enemyX-=eSpeed+(score/5)
     }else
        enemyX-=eSpeed;

    if(enemyX<plX+pWidth&&enemyX+eWidth>plX &&
    enemyY<plY+pHeight&&eHeight+enemyY>plY){score=score+1;enemyX=820; enemyY=random(150,370)}
  //hitBoxX,hitBoxY,tirosW,tirosH
  if(enemyX<hitBoxX+tirosW&&enemyX+eWidth>hitBoxX &&
    enemyY<hitBoxY+tirosH&&eHeight+enemyY>hitBoxY)
  {score=score+1;enemyX=820; enemyY=random(190,370)}
    if(enemyX<=(baseX+90)){
      vidas=vidas-1;enemyX=820; enemyY=random(150,370);
    }
 
}
function mouseClicked(){
 //Tela Inicial para Tela de instruções - Tela 0 -> Tela 2
  if (mouseX>270&&mouseX<480&&mouseY>180&&mouseY<240&&tela==0)  
   instrucoes();
  //+-105X +-30Y
  //Tela de instruções para Fase - Tela 2 -> Tela 1
  if (mouseX>270&&mouseX<480&&mouseY>305&&mouseY<365&&tela==2)
   tela=1;  

  //Gameover para tela inicial - Tela 3 -> Tela 0
  if (mouseX>270&&mouseX<480&&mouseY>180&&mouseY<240&&tela==3){
   start()
   telaInicial()
  }

  //Fase 1 para Tela de Pause a partir do botão na fase 1
  //Tela 1 -> tela 4
  if (colisao(755,35,mouseX,mouseY)&&tela==1){
   telaPause()
    noLoop()
  }
  //Tela de Opções para tela anterior
  //Tela 5-> tela anterior
  if (colisao(755,100,mouseX,mouseY)&&tela==5){
    if(ultTela==4)
      telaPause()
    if(ultTela==0)
      telaInicial()
  }
  //Tela inicial - Tela de Opcoes - Tela 0 -> Tela 5
  if (mouseX>270&&mouseX<480&&mouseY>250&&mouseY<310&&tela==0){
   ultTela=tela;
   menuOpcoes();
    
  }
  //Tela inicial - Créditos - Tela 0 -> Tela 7
  if (mouseX>270&&mouseX<480&&mouseY>320&&mouseY<380&&tela==0)    
    creditos()
  
  //Créditos - Tela 0
  if (colisao(755,100,mouseX,mouseY)&&tela==7){  
   
    telaInicial();
  }
  //Tela de instruções para  Tela Inicial- Tela 2 -> Tela 0
  if (colisao(755,100,mouseX,mouseY)&&tela==2){  
   
    telaInicial();
  }
  //Tela de Personagens para  Opções - Tela 6 -> Tela 5
  if (colisao(755,100,mouseX,mouseY)&&tela==6){ 
   
    menuOpcoes();
  }
  //Tela de pause para retornar ao jogo - Tela 4 -> Tela 0+Game over
  if (mouseX>270&&mouseX<480&&mouseY>180&&mouseY<240&&tela==4){
    
    tela=1;
    loop()
  }
    //Tela de pause para opções - Tela 4 -> tela 5
  if (mouseX>270&&mouseX<480&&mouseY>250&&mouseY<310&&tela==4){
   ultTela=tela;
   menuOpcoes();
    
  }
  //Tela 4 para sair - Tela 4 -> game over
  if (mouseX>270&&mouseX<480&&mouseY>320&&mouseY<380&&tela==4)
   gameOver();

  //Tela 5 -> Tela 6
  
  if (mouseX>102.5&&mouseX<312.5&&mouseY>310&&mouseY<370&&tela==5) 
   telaPersonagens();

  if(canhoto==true&&colisao(412.5,180,mouseX,mouseY)&&tela==5){
    canhoto=false;
    
      
    }else if(canhoto==false&&colisao(508.5,180,mouseX,mouseY)&&tela==5){
      canhoto=true
      
    }
  //Botão para Tela cheia no mobile
  if(isMobile == true){
  if(colisao(690,35,mouseX,mouseY)&&tela==1||
     colisao(635,270,mouseX,mouseY)&&tela==2||
    colisao(755,35,mouseX,mouseY)&&tela==0||
    colisao(755,35,mouseX,mouseY)&&tela==2||
    colisao(690,35,mouseX,mouseY)&&tela==3||
    colisao(690,35,mouseX,mouseY)&&tela==4||
    colisao(690,35,mouseX,mouseY)&&tela==5||
    colisao(690,35,mouseX,mouseY)&&tela==6||
    colisao(755,35,mouseX,mouseY)&&tela==7)
    fs();

  }
  if(colisao(412.5,250,mouseX,mouseY)&&tela==5)
    fs();
  if(colisao(80,120,mouseX,mouseY)&&tela==6){
    pNum=0;
  }  
  if(colisao(80,190,mouseX,mouseY)&&tela==6){
    pNum=1;
  }
  if(colisao(80,260,mouseX,mouseY)&&tela==6){
    pNum=2; 
  }
  if(colisao(80,330,mouseX,mouseY)&&tela==6){
    pNum=3; 
  }
  //Confirmar personagem
//219,327 
if(mouseX>114&&mouseX<324&&mouseY>197&&mouseY<357&&tela==6){
     player.num=pNum
  }
}

//Jogo através das setas/WASD
function keyPressed(){
  if(keyIsDown(27)){
    if(tela==1){
      telaPause()
      noLoop()
    }else
    if(tela==2)
      telaInicial()
    else
      if(tela==3){
         start()
       telaInicial()
    }else
      if(tela==5){
        if(ultTela==4)
      telaPause()
    if(ultTela==0)
      telaInicial()
    }else
      if(tela==6)
        menuOpcoes()
    else
      if(tela==7)
        telaInicial()
      
  }
    
  if(keyIsDown(LEFT_ARROW)||keyIsDown(65))
    plX-=5;
  if(keyIsDown(RIGHT_ARROW)||keyIsDown(68))
    plX+=5;
  if(keyIsDown(UP_ARROW)||keyIsDown(87))
    plY-=5;
  if(keyIsDown(DOWN_ARROW)||keyIsDown(83))
    plY+=5;
  if(keyIsDown(32)&&bow==true) {
    tirosX[tirosX.length]=plX+25;
    tirosY[tirosY.length]=plY-25;
    
  }
    }

//Gamepad para o jogo no celular
function gamepad(){

  gamePad()
  
  if(canhoto==false){
    if (touches.length>0) {

      if(colisao(650,325,touches[0].x, touches[0].y))
           plX-=5;
      if(colisao(750,325,touches[0].x, touches[0].y))
           plX+=5;
      if (colisao(700,275,touches[0].x, touches[0].y))
        plY-=5;
      if(colisao(700,375,touches[0].x,touches[0].y))
        plY+=5;
      if(colisao(100,300,touches[0].x,touches[0].y)&&bow==true){tirosX[tirosX.length]=plX+25;
      
    tirosY[tirosY.length]=plY-25;
    
}
}
    
}
  
  if(canhoto==true){
    if (touches.length>0) {

      if(colisao(70,325,touches[0].x, touches[0].y))
           plX-=5;
      if(colisao(170,325,touches[0].x, touches[0].y))
           plX+=5;
      if (colisao(120,275,touches[0].x, touches[0].y))
        plY-=5;
      if(colisao(120,375,touches[0].x,touches[0].y))
        plY+=5;
}
  }
}

//Colisão dos botões na tela do jogo
//seja de menu ou do gamepad
function colisao(x1,y1,x2,y2) {
          if(x1 > x2 + 48)
            return false;
          if(y1 > y2 + 48)
            return false;
          if(x1 + 48 < x2)
            return false;
          if(y1 + 48 < y2)
            return false;
          return true;
  }
//Limites que o jogador pode ir
function limites(){
  if(plY<150)
    plY=150;
  
  if(plY>370)
     plY=365;
     
  if(plX<90)
    plX=90;
  
  if(plX>785)
    plX=785;
}