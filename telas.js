//tela icicial - tela = 0
function telaInicial(){
  tela=0
playerVar()
  background(player.bg)
  
  //Iniciar
  botaoG(375,210,210,60,"Iniciar", 375,player.num);
  //Opções
  botaoG(375,280,210,60,"Opções", 375,player.num);
  //Créditos
  botaoG(375,350,210,60,"Créditos", 375,player.num);
 
  push()
  strokeWeight(5)
  stroke(player.bgColor)
  fill("#FFF")
  textFont(edo)
  textSize(100);
  text(player.name, 375 ,100);
  pop()
  noStroke(); 
    textFont(leagueGothic);
    fill("#000")
  textSize(40)
  text("NÃO É DIABO",375,150)
  
  if(isMobile==true){
        botaoN(755,35,player.num);
        fullscreenDesenho(732.5,12.5)
      }
}
  //fase 1 - tela = 1
  function phase1() {
    tela=1
      limites();
      keyPressed()
        enemy();
    
      if(vidas==0){
    gameover=true;
      
    }
      background("#041b6b");
      noStroke()
      fill('#e8b972');
      rect(width / 2, 400, width, 480);
      
      stroke("#262626");
      strokeWeight(5);
      fill('#dbd9d5')
      rect(baseX,350,baseY,400);
      
      noFill();
      stroke(100,100,100);
      strokeWeight(15);
      rect(width/2, height/2, width, height);
      
      personagem();
      
        tiros()
      
      stroke(0)
      strokeWeight(3);
      fill('#f03c2b');
    rect(enemyX,enemyY,eWidth,eHeight);
    
      stroke("#000")
      strokeWeight(3)
      fill("#fff");
      textSize(22);
      text("Vidas: "+vidas,70,40);
      text("Pontos: "+score,220,40);
      if(isMobile == true){
        gamepad();
        botaoN(690,35,player.num);
        fullscreenDesenho(667.5,12.5)
        
  }
      botaoN(765,35,player.num)
      
      menuDesenhoTri(745,12)
    
  }  

//Menu de Instruções - Tela = 2
  function instrucoes(){
    tela=2
    background(player.bg)
    botaoG(375,320,210,60,"Iniciar", 375,player.num);
  noStroke(); 
    textFont(leagueGothic);
    fill("#000")
    textSize(38)
    text("Seu objetivo é impedir que alcancem", 375,110)
    text("e tentem acabar com o terreiro",375,143)
    botaoN(755,100,player.num)
    
    retornar(730.5,75.5)
    
  if(isMobile == true){  
  textSize(38)
    text("Você pode se mover com o controle no canto da tela",375,210)
    text("Para melhorar a experiência do jogo deixe o celular na horizontal",375,245)
    text("Você pode deixar em tela cheia ao apertar o botão",330,285)
    botaoN(635,270,player.num)
    fullscreenDesenho(612.5,247.5)
    botaoN(755,35,player.num);
    fullscreenDesenho(732.5,12.5)
      
    
    }else{
      text("Você pode se mover com as setas do teclado ou WASD",375,180)
      if(player.num==1){
text("e atirar com o espaço",375,215)
       botaoG(375,255,200,60,"",0,4)
      espaco(273.5,225) 
      }
        
      //Down
      //X= 195-172.5= 22.5 --- Y= 215-195= 120
      botaoN(183,215,4)
      direcionalDWN(160.5,195,4)
      //Up
      botaoN(183,265,4)
      direcionalUP(160.5,242.5,4)
      //Left
      botaoN(133,265,4)
      direcionalLFT(110.5,245,4)
      //Right
      botaoN(233,265,4)
      direcionalRGT(210.5,245,4)
      push()
      textFont(fontee)
      textSize(30)
      fill("rgb(51,51,51)")
      botaoN(565,215,4)
      text("W",565,227.5)
      botaoN(565,265,4)
      text("S",565,276.5)
      botaoN(515,265,4)
      text("A",515,277.5)
      botaoN(615,265,4)
      text("D",615,277.5)
      
      
      pop()
    }
  textSize(60);
  text("TUTORIAL", 375 ,75);
  }
//Tela de Gave Over - tela = 3
function gameOver(){
  tela=3
  highScore=score;
  background(player.bg)
  stroke("#000")
  strokeWeight(3);
  fill("#aaaaaa")
  botaoG(375,210,210,60,"Voltar", 375,player.num)

  strokeWeight(4)
  stroke("#000");
  textFont(leagueGothic);
  fill(player.color)
  textSize(72);
  text("FIM DE JOGO", 375 ,120);
  textSize(44);
  fill("#FFF")
  text("Você fez: "+highScore+" pontos",376,160)

  
  
  if(isMobile==true){
        botaoN(690,35,player.num);
        fullscreenDesenho(667.5,12.5)
      }
  
}
//Tela de pause/tela 4
function telaPause(){
  gamePause()
  tela=4
  highScore=score;
  background(player.bg)
  
  
  //Voltar
  botaoG(375,210,210,60,"Voltar", 375,player.num);
  //Opções
  botaoG(375,280,210,60,"Opções", 375,player.num);
  //Sair
  botaoG(375,350,210,60,"Sair", 375,player.num);
  
  
  strokeWeight(4)
  stroke("#000");
  textFont(leagueGothic);
  fill(player.color)
  textSize(72);
  text("JOGO PAUSADO", 375 ,120);

    if(isMobile==true){
        botaoN(690,35,player.num)
        fullscreenDesenho(667.5,12.5)
      }
}

//menu de opções Tela 5
function menuOpcoes(){
    personagem()
  tela=5
  
  background(player.bg)
  push()
  
  //Personagens
  botaoG(207.5,337,210,60,"Personagens",207.5,player.num);
  
  
  strokeWeight(4)
  stroke("#000");
  textFont(leagueGothic);
  fill(player.color)
  textSize(72);
  text("OPÇÕES", 375 ,120);
  pop()
  textSize(60)
  text("Canhoto",280,200)
  push()
  if(canhoto==false){
    
    stroke("rgba(77,1,1,0.75)");
      strokeWeight(3)
      fill("rgba(248,0,0,0.75)")
      rect(460,180,145,45,5);
    botao(412.5,180)
  }else if(canhoto==true){
    stroke("rgba(1,77,3,0.75)");
      strokeWeight(3)
      fill("rgba(3,248,0,0.75)")
      rect(460,180,145,45,5);
    botao(508.5,180)
  }
  pop()
  text("Tela Cheia",280,270)
  botaoN(412.5,250,player.num)
  
  fullscreenDesenho(390.5,227.5)
  
  botaoN(755,100,player.num)
  
  retornar(730.5,75.5)

    if(isMobile==true){
        botaoN(690,35,player.num);
        fullscreenDesenho(667.5,12.5)
      }
}
//Tela de troca de personagens 6
function telaPersonagens(){
  tela=6
  personagem()

  background(player.bg)
  push()
  textFont(fontee);
  switch(pNum){
    case 0:
      push()
      stroke("rgba(93,4,4,0.75)");
      /*stroke("rgba(80,80,80,0.75)");*/
    strokeWeight(3)
      beginShape()
      vertex(105,120)
      vertex(130,120)
    endShape()
      translate(300,105.5)
      fill("rgba(255, 18, 18,0.7)")
      rect(120,120,577.5,262,5)
      translate(-200,0)
      fill("rgba(255, 18, 18,0.7)")
      rect(120,120,177.5,262.5)
      pop()
      
    push()
    strokeWeight(4)
    stroke("#000");
    fill("#FFF")
    textSize(32)
    text("Exú", 220,125)
    pop()

    break
    case 1:
    push()
      stroke("rgba(4,95,15,0.75)");
    strokeWeight(3)
      beginShape()
      vertex(105,190)
      vertex(130,190)
      endShape()
      translate(300,105.5)
      fill("rgba(25,221,22,0.75)")
      rect(120,120,577.5,262,5)
      translate(-200,0)
      fill("rgba(25,221,22,0.75)")
      rect(120,120,177.5,262.5)
      pop()
      
    push()
    strokeWeight(4)
    stroke("#000");
    fill("#FFF")
    textSize(32)
    text("Oxóssi", 220,125)
    pop()
  
      break
    case 2:
    push()
      stroke("rgba(4,7,95,0.75)");
    strokeWeight(3)
      beginShape()
      vertex(105,260)
      vertex(130,260)
    endShape()
      translate(300,105.5)
      fill("rgba(13,53,179,0.75)")
      rect(120,120,577.5,262,5)
      translate(-200,0)
      fill("rgba(13,53,179,0.75)")
      rect(120,120,177.5,262.5)
      pop()
      
    push()
    strokeWeight(4)
    stroke("#000");
    fill("#FFF")
    textSize(32)
    text("Ogum", 220,125)
    pop()
      break
    case 3:
    push()
      stroke("rgba(48,2,2,0.75)");
    strokeWeight(3)
      beginShape()
      vertex(105,330)
      vertex(130,330)
    endShape()
      translate(300,105.5)
      fill("rgba(179,13,13,0.75)")
      rect(120,120,577.5,262,5)
      translate(-200,0)
      fill("rgba(179,13,13,0.75)")
      rect(120,120,177.5,262.5)
      pop()
      
    push()
    strokeWeight(4)
    stroke("#000");
    fill("#FFF")
    textSize(28)
    text("Pomba gira", 220,125)
    pop()
      
  }
  
  pop()
  push()
      stroke("rgba(12,12,12,0.5)");
      strokeWeight(3)
      fill("rgba(255, 18, 18,0.7)")
      rect(80,120,45,45,5);
      fill("rgba(25,221,22,0.75)")
      rect(80,190,45,45,5);
      fill("rgba(13,53,179,0.75)")
      rect(80,260,45,45,5);
      fill("rgba(179,13,13,0.75)")
      rect(80,330,45,45,5);
      
  pop();
  
  
  push()
  
      if(pNum==player.num){
        botaoG(220,328,177.5,60,"Selecionado", 221,4);
        
      }else{
        botaoG(220,328,177.5,60,"Selecionar", 221,4);
        
      }
  pop()
  push()
    stroke(player.cor6)
  strokeWeight(5)
    fill("#FFF")
    textFont(fontee)
    textSize(52);
    text("PERSONAGENS", 400 ,72.5);
  pop()
botaoN(755,100,player.num)
  
  retornar(730.5,75.5)

    if(isMobile==true){
        botaoN(690,35,player.num);
        fullscreenDesenho(667.5,12.5)
      }
  
}

//Créditos tela 7
  function creditos(){
    tela=7
    background(player.bg)
    textFont(leagueGothic);
    strokeWeight(4)
    stroke(player.cor6)
    fill("#FFF")
    
    botaoN(755,100,player.num)
    retornar(730.5,75.5)
    push()
    strokeWeight(10)
    stroke(player.cor6)
  ellipse(220, 190, 180, 180);
  drawingContext.clip();
    //ctx.canvasDrawingContext2D.clip();
  image(fotoMinha,130,100,180,180);
  pop()
  textSize(42)
    text("Discente",225,322.5)
    textSize(32)
    text("Gabriel Bitencourt",225,355)
  push()
    strokeWeight(10)
    stroke(player.cor6)
  ellipse(540, 190, 170, 170);
  drawingContext.clip();
  image(fotoProf,450,100,180,180);
    
  pop()
    textSize(42)
    text("Docente",540,322.5)
    textSize(32)
    text("Prof. Aquiles Burlamaqui",540,355)
  if(isMobile == true){
    botaoN(755,35,player.num);
    fullscreenDesenho(732.5,12.5)
    
    }
  textSize(60);
  text("CRÉDITOS", 375 ,75);
  }